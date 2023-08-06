import functools
import ci.util
import checkmarx.client
import checkmarx.model

import tabulate
import typing


@functools.lru_cache()
def create_checkmarx_client(checkmarx_cfg_name: str):
    cfg_fac = ci.util.ctx().cfg_factory()
    return checkmarx.client.CheckmarxClient(cfg_fac.checkmarx(checkmarx_cfg_name))


def is_scan_finished(scan: checkmarx.model.ScanResponse):
    if checkmarx.model.ScanStatusValues(scan.status.id) in (
            checkmarx.model.ScanStatusValues.FINISHED,
            checkmarx.model.ScanStatusValues.FAILED,
            checkmarx.model.ScanStatusValues.CANCELED,
    ):
        return True
    else:
        return False


def is_scan_necessary(project: checkmarx.model.ProjectDetails, hash: str):
    remote_hash = project.get_custom_field(checkmarx.model.CustomFieldKeys.HASH)
    if remote_hash != hash:
        print(f'{remote_hash=} != {hash=} - scan required')
        return True
    else:
        return False


def print_scan_result(
    scan_results: typing.Iterable[checkmarx.model.ScanResult],
    tablefmt: str = 'simple'
):
    results = scan_result_tables(scan_results=scan_results, tablefmt=tablefmt)
    for k, table in results.items():
        print(table)


def scan_result_tables(
    scan_results: typing.Iterable[checkmarx.model.ScanResult],
    tablefmt: str = 'simple'
):
    scan_info_header = ('ScanId', 'ComponentName', 'ScanState', 'Start', 'End')

    def started_on(scan_result):
        return scan_result.scan_result.dateAndTime.startedOn if \
                scan_result.scan_result else 'unknown'

    def ended_on(scan_result):
        return scan_result.scan_result.dateAndTime.finishedOn if \
                scan_result.scan_result else 'unknown'

    scan_info_data = (
        (
            scan_result.scan_result.id,
            scan_result.component.name(),
            scan_result.scan_result.status.name,
            started_on(scan_result),
            ended_on(scan_result),
         ) for scan_result in scan_results
    )

    scan_statistics_header = (
        'ComponentName',
        'Overall severity',
        'high',
        'medium',
        'low',
        'info'
    )
    scan_statistics_data = (
        (
            scan_result.component.name(),
            scan_result.scan_result.scanRiskSeverity,
            scan_result.scan_statistic.highSeverity,
            scan_result.scan_statistic.mediumSeverity,
            scan_result.scan_statistic.lowSeverity,
            scan_result.scan_statistic.infoSeverity,
        ) for scan_result in scan_results
    )

    scan_info = tabulate.tabulate(
        headers=scan_info_header,
        tabular_data=scan_info_data,
        tablefmt=tablefmt,
    )

    scan_statistics = tabulate.tabulate(
        headers=scan_statistics_header,
        tabular_data=scan_statistics_data,
        tablefmt=tablefmt,
    )

    return {'scan_info': scan_info, 'scan_statistics': scan_statistics}
