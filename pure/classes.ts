class Doggy {
  constructor(public name: string, age: number) {}
}

const fafik = new Doggy('Fafik', 5);

class DogList {
  private list: Doggy[] = [];

  static instance = new DogList();

  private constructor() {}

  public addDog(dog: Doggy) {
    this.list.push(dog);
  }
}

DogList.instance.addDog(new Doggy('Bafik', 2));
