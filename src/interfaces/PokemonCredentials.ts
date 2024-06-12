export interface PokemonCredentials {
    name: string;
    type: string
    sprites: Sprites;
    id: number;
}

type Sprites = {
    front_default: string | null;
};
