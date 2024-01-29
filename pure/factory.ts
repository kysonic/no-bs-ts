interface ILogger {
  info(message: void): void;
}

export class ProductionLogger implements ILogger {}
