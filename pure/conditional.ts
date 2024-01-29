interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T,
): FetchPokemonResult<T> {
  if (cb) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => cb(data as PokemonResults));
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((response) =>
      response.json(),
    ) as FetchPokemonResult<T>;
  }
}
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
fetchPokemon(API_URL, (data) => {
  console.log(data.results);
});

const results = <PokemonResults>await fetchPokemon(API_URL);

console.log(results.results);
