/**
 * This TS file provides read environment variables
 */

import * as Q from "q";

import { IDependency } from '../interfaces';
import { Dependency } from './dependency';
import { Version } from '../version';
import { workspace } from 'vscode';

export class DependencyMgr {
     _dependencies: Q.Promise<IDependency[]> = [];
    constructor() {
        const config = workspace.getConfiguration('qurator-vscode');
        const dependList = config.get('qurator.dependencies');
        Object.keys(dependList).forEach(key => {
            this._dependencies.push(
                new Dependency(key.toString(), Version.fromString(dependList[key].toString()))
            );
        });
    }

    checkDependencies(): Q.Promise<void> {
        let packages: Array<Q.Promise<IDependency>> = [];

        this._dependencies.forEach(dep => {
            packages.push(dep.isInstalled());
        });

        return Q.all(packages);
    }
}
