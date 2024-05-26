import axios from 'axios';

const getData = async (): Promise<any> => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemonResults = response.data.results;

    const pokemonDetailsPromises = pokemonResults.map((pokemon: any) => axios.get(pokemon.url));
    const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);

    return pokemonDetailsResponses.map(res => res.data);
}

export default getData;
