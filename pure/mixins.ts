function myLoginFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLoginFunction();

logger('LOOOOOG');

function createLoggerClass() {
  return class MyLogger {
    private completeLog: string = '';

    log(str: string) {
      this.completeLog += str + '\n';
    }

    dumpLog() {
      return this.completeLog;
    }
  };
}

const LoggerClass = createLoggerClass();

const loggerInstance = new LoggerClass();

loggerInstance.log('Hello');
loggerInstance.log('It is me');
loggerInstance.log('I am wondering about');

console.log(loggerInstance.dumpLog());

function createSimpleInMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string) {
      return this.db[id];
    }

    getObject() {
      return this.db;
    }
  };
}

const StringDatabaseClass = createSimpleInMemoryDatabase<string>();
const stringDB = new StringDatabaseClass();

stringDB.set('1', 'super');
stringDB.set('2', 'duper');

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>,
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDB = Dumpable(StringDatabaseClass);

const dumpableDb = new DumpableStringDB();

dumpableDb.set('1', 'super');
dumpableDb.set('2', 'duper');

dumpableDb.dump();
