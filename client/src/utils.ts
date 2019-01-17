/**
 * This TS file provides DependentPath
 */
import * as path from 'path';

export namespace Util {
    // Get path util
    export function getOSDependentPath(_path: string): string {
        let pathInOS = path.resolve(__dirname, _path);
        if (process.platform === 'win32') {
            pathInOS = pathInOS.replace(/\\/g, '/');
        }
        return pathInOS;
    }
}
