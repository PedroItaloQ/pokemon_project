import axios, { AxiosResponse } from 'axios';
import { PokemonCredentials } from '@/interfaces/PokemonCredentials';

const getData = async (pokemonData: PokemonCredentials): Promise<AxiosResponse<any>> => {
  try {
    const response: AxiosResponse<any> = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return response;
  } catch (error) {
    throw error;
  }
};

export default getData;
