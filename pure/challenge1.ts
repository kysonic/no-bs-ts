import housesData from '../data/houses.json';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type FilterFunction = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilterFunction): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilterFunction): HouseWithID[];

function findHouses(arg1: string | House[], arg2?: FilterFunction) {
  let houses: House[] = [];

  if (typeof arg1 === 'string') {
    houses = JSON.parse(arg1);
  } else {
    houses = structuredClone(arg1);
  }

  houses = houses.map((house, index) => ({ id: index, ...house }));

  if (arg2) {
    houses = houses.filter(arg2);
  }

  return houses;
}

console.log(
  findHouses(JSON.stringify(housesData), ({ name }) => name === 'Atreides'),
);

console.log(findHouses(housesData, ({ name }) => name === 'Harkonnen'));
