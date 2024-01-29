interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y
  }
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coordinate = {
    x: 0,
    y: 0,
  }

  if (typeof arg1 === 'object') {
    coordinate = {
      ...(arg1 as Coordinate),
    }
  } else if (typeof arg1 === 'string') {
    const split = arg1.split(',');
    coordinate = {
      x: Number(split[0].split(':')[1]),
      y: Number(split[1].split(':')[1]),
    }
  } else {
    coordinate = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  console.log(coordinate);

  return coordinate;
}

parseCoordinate({ x: 1, y: 2 });
parseCoordinate(1, 3);
parseCoordinate("x: 1, y: 2");