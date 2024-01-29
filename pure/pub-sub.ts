export type Subscriber<T> = (data: T) => void;

export class Subscribeable<T> {
  private subscribers: Set<Subscriber<T>> = new Set();

  constructor() {}

  public subscribe(subscriber: Subscriber<T>) {
    this.subscribers.add(subscriber);

    return () => {
      this.unsubscribe(subscriber);
    };
  }

  public unsubscribe(subscriber: Subscriber<T>) {
    this.subscribers.delete(subscriber);
  }

  public publish(data: T) {
    this.subscribers.forEach((subscriber) => subscriber(data));
  }
}

const stringBus = new Subscribeable<string>();

const unsub1 = stringBus.subscribe((data) => {
  console.log('Subs 1 got the message', data);
});

const unsub2 = stringBus.subscribe((data) => {
  console.log('Subs 2 got the message', data);
});

stringBus.publish('Hello how are you?');

unsub1();

stringBus.publish('Hekki!');
