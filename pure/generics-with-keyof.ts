function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType,
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dog = [
  {
    name: 'Mimi',
    age: 12,
  },
  {
    name: 'Lg',
    age: 13,
  },
];

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name],
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  time: 123213,
  user: 'Josh',
  productId: '12139123',
  quantity: 2,
});

sendEvent('checkout', { user: 'Donald', time: 12312321 });
