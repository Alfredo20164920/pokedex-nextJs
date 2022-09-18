import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemoninfo = async (pokemonIdentifier: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonIdentifier}`);
    
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}