type MyFlexibleDog = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDog = {
  name: 'Fafik',
  age: 22,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Changed`]?: (
    newValue: Type[Property],
  ) => void;
};

interface DogInfo {
  name: string;
  age: number;
}

type DogInfoListeners = Listeners<DogInfo>;

const listenToObject = <T>(obj: T, listeners: Listeners<T>): void => {
  throw 'Needs to be implemented';
};

const doggy: DogInfo = {
  name: 'fafik',
  age: 5,
};

listenToObject(doggy, {
  onNameChanged: (v: string) => {
    console.log(v);
  },
  onAgeChanged: (v: number) => {
    console.log(v);
  },
});
