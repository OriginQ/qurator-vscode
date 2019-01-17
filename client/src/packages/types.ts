/**
 * This TS file provides the package interface
 */

import { PackageInfo } from '../interfaces';

export type InstallationCallback = (packageInfo: PackageInfo) => void;
