interface Cat {
  name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  };
}

const usel = makeCat('Usel', 'Tabycat');

usel.name = 'python';

function makeCoordinate(
  x: number,
  y: number,
  z: number,
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(1, 2, 3);
c1[0] = 1;

const reallyConst = [1, 2, 3] as const;
reallyConst[0] = 2;
