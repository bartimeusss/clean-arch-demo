import { Logger } from 'application/port/Logger';

export class ConsoleLogger implements Logger {
    logError(error: unknown): void {
        console.log(error);
    }
}