/**
 * This TS file provides validation environment variables
 */

import * as Q from 'q';
import { CommandExecutor } from '../commandExecutor';
import { Version } from '../version';
import { IDependency, IVersion } from '../interfaces';

export class Dependency implements IDependency {
    name: string;
    requiredVersion: IVersion;

    private installedVersion: IVersion;

    constructor(name: string, version: IVersion) {
        this.name = name;
        this.requiredVersion = version;
        this.installedVersion = null;
    }
    // Is the version correct?
    public isInstalled(): Q.Promise<IDependency> {
        // We can check if Python is installed by invoking it with the
        // --version option.
        return Q.Promise((resolve, reject) => {
            return this.getInstalledVersion().then(installedVersion => {
                if(this.name==='python'){
                    if (
                        installedVersion.isPythonVersion(this.requiredVersion)
                    ) {
                        resolve(this);
                    } else {
                        reject(`Version = ${this.requiredVersion.toString()} of package ${this.name} is required`);
                    }
                }else{
                    if (
                        installedVersion.isGreater(this.requiredVersion) ||
                        installedVersion.isEqual(this.requiredVersion)
                    ) {
                        resolve(this);
                    } else {
                        reject(`Version >= ${this.requiredVersion.toString()} of package ${this.name} is required`);
                    }
                }
                
            });
        });
    }
    // Get local and configuration versions
    private getInstalledVersion(force = false): Q.Promise<IVersion> {
        return Q.Promise((resolve, reject) => {
            if (!force && this.installedVersion !== null) {
                return resolve(this.installedVersion);
            }

            return CommandExecutor.exec(this.name, ['--version'])
                .then(stdout => {
                    const patt = /\d{1,2}\.\d{1,2}\.\d{1,2}|\d{1,2}\.\d{1,2}/g;
                    this.installedVersion = Version.fromString(stdout.match(patt)[0]);
                    resolve(this.installedVersion);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
