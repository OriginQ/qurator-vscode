/**
 * This TS file provides Pip Executor
 */

import { CommandExecutor } from './pipCommandExecutor';
import { PackageInfo } from '../interfaces';
import { PackageInfoParser } from './packageInfoParser';
import { Version } from '../version';
import { QLogger } from '../logger';

export class PipExecutor {
    constructor(private commandExecutor: CommandExecutor) {}
    // Get package info
    async getPackageInfo(packageName: string): Promise<PackageInfo> {
        let stdout = await this.show(packageName);

        return {
            name: PackageInfoParser.parseName(stdout),
            version: Version.fromString(PackageInfoParser.parseVersion(stdout)),
            summary: PackageInfoParser.parseSummary(stdout),
            location: PackageInfoParser.parseLocation(stdout),
            dependencies: PackageInfoParser.parseDependencies(stdout)
        };
    }
    // Update package
    async update(pkg: string): Promise<boolean> {
        try {
            const updateResult = await this.commandExecutor.exec(
                'install',
                ['-U', '--no-cache-dir', pkg],
                (stdout: string) => stdout
            );
            QLogger.verbose(`Package ${pkg} updated: ${updateResult}`, this);
            return true;
        } catch (err) {
            QLogger.verbose(`Package ${pkg} not updated: ${err}`, this);
            return false;
        }
    }
    //Download package 
    async install(pkg: string): Promise<boolean> {
        try {
            const updateResult = await this.commandExecutor.exec('install', [pkg], (stdout: string) => stdout);
            QLogger.verbose(`Package ${pkg} installed: ${updateResult}`, this);
            return true;
        } catch (err) {
            QLogger.verbose(`Package ${pkg} not installed: ${err}`, this);
            return false;
        }
    }

    async search(pkg: string): Promise<string> {
        return this.commandExecutor.exec('search', [pkg], (stdout: string) => stdout);
    }

    async list(): Promise<string> {
        return this.commandExecutor.exec('list', [], (stdout: string) => stdout);
    }

    private async show(pkg: string): Promise<string> {
        return this.commandExecutor.exec('show', [pkg], (stdout: string) => stdout);
    }
}
