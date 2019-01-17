/**
 * This TS file provides a package information parser
 */

export namespace PackageInfoParser {
    export function parseName(input: string): string {
        return /Name:\s*(.+)/g.exec(input)[1].trim();
    }

    export function parseVersion(input: string): string {
        return /Version:\s*(.+)/g.exec(input)[1].trim();
    }

    export function parseSummary(input: string): string {
        return /Summary:\s*(.+)/g.exec(input)[1].trim();
    }

    export function parseLocation(input: string): string {
        return /Location:\s*(.+)/g.exec(input)[1].trim();
    }

    export function parseDependencies(input: string): string {
        return /Requires:\s*(.+)/g.exec(input)[1].trim();
    }
}
