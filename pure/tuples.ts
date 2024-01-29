type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinates(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate,
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

function simpleStringState(
  initial: string,
): [() => string, (v: string) => void] {
  let value = initial;

  const getValue = () => value;
  const setValue = (newValue: string) => (value = newValue);

  return [getValue, setValue];
}

const [getStr, setStr] = simpleStringState('state');

console.log(getStr());

setStr('state2');

console.log(getStr());
