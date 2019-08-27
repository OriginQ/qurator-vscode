/**
 * This ts file defines the qrunes language tag.
 */
'use strict';

import {getQRunesTagProvider, IQRunesTagProvider} from '../parser/qrunesTags';

export let allTagProviders : IQRunesTagProvider[] = [
	getQRunesTagProvider(),
];