/**
 * This TS file provides  ChildProcess Command Executor
 */

import { CommandExecutor } from '../commandExecutor';
import * as Q from 'q';

export type ParserFunction = (out: string) => string;

export interface CommandExecutor {
    exec(command: string, args: string[], parser: ParserFunction): Q.Promise<string>;
}

const PIP_COMMAND = 'pip';
// Install pyqpanda、antlr4-python3-runtime
export class ChildProcessCommandExecutor implements CommandExecutor {
    public exec(command: string, args: string[], parser: ParserFunction): Q.Promise<string> {
        return CommandExecutor.exec(PIP_COMMAND, [command].concat(args))
            .then(stdout => {
                return Q.resolve(parser(stdout));
            })
            .catch(err => {
                return Q.reject(err);
            });
    }
}
