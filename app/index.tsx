import { useEffect, useState } from "react";
import { Pokemon } from "../src/types/tipos";
import { fetchPokemon } from "../src/utils/fetcher";
import Pokelist from "./components/pokelist";

export default function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Fetch Pokémon data from the API
    fetchPokemon(setPokemon);
  }, []);

  return <Pokelist pokemon={pokemon} showName={true} />;
}
