export interface PokemonProps {
  pokemon: {
    name: string;
    base_experience?: number;
    height?: number;
    weight?: number;
    abilities?: Ability[];
    url: string;
    sprite: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  url: string;
  sprite: string;
}

interface Ability {
  ability: {
    name: string;
  };
}
