export interface Pokemon {
  name: string;
  image: string;
  imageShiny: string;
  mainType: string;
  subType: string | null;
}

export interface PokelistProps {
  pokemon: Pokemon[];
  showName: boolean;
  loading?: boolean;
  error?: string | null;
}
