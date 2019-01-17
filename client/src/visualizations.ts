/**
 * This TS file provides License VizManager
 */

'use strict';

import { RenderBuilder } from './visualizations/renderBuilder';

export namespace VizManager {
    export function createViz(result: object): string {
        let renderer = RenderBuilder.instanceFrom(result);
        return renderer.render();
    }
}
