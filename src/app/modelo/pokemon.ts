export type Sprites = {
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  }
}
export type Moves = {
  move: {
    name: String;
  }
}
export type Abilities = {
  ability: {
    name: string
  }
  is_hidden: boolean
  slot: number
}
export interface Pokemon {
  name: string;
  order: number;
  sprites: Sprites;
  stats: Array<Stat>;
  moves: Moves;
  abilities: Abilities;
}
