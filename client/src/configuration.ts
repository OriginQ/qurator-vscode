/**
 * This TS file provides read Configuration info.
 */

import { workspace } from 'vscode';
import { Version } from './version';
import { PackageInfo } from './interfaces';
// Get qrunes package by map
export namespace qrunesVSCodeConfiguration {
    export function requiredPackages(): PackageInfo[] {
        let config = workspace.getConfiguration('qurator-vscode');
        let qrunesPackages = config.get('qrunes.packages');

        return Object.keys(qrunesPackages).map(key => ({
            name: key,
            version: Version.fromString(qrunesPackages[key])
        }));
    }
}
