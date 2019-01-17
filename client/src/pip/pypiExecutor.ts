/**
 * This TS file provides  PyPiExecutor
 */

import * as Q from 'q';
import * as httpm from 'typed-rest-client/HttpClient';
import { PackageInfo } from '../interfaces';
import { Version } from '../version';

const PYPI_BASE_URL = 'https://pypi.python.org/pypi/';

export class PyPiExecutor {
    constructor() {}
    // Get package info
    async getPackageInfo(pkg: string): Q.Promise<PackageInfo> {
        let url: string = PYPI_BASE_URL + pkg + '/json';
        let httpc: httpm.HttpClient = new httpm.HttpClient('vsts-node-api');
        return httpc.get(url).then((res: httpm.HttpClientResponse) => {
            return res.readBody().then((body: string) => {
                let pypiPkgJson = JSON.parse(body);

                return {
                    name: pypiPkgJson.info.name,
                    version: Version.fromString(pypiPkgJson.info.version),
                    summary: pypiPkgJson.info.summary,
                    location: pypiPkgJson.info.package_url
                };
            });
        });
    }
}
