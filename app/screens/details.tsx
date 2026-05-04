import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { pokemonCache } from "../../src/cache";
import { PokemonDetails } from "../components/pokedetails";

export default function Details() {
  const { name } = useLocalSearchParams();
  const pokemonName = (Array.isArray(name) ? name[0] : name) ?? "";


  // Busca instantânea no objeto de cache, sem precisar de fetch/async
  const pokemon = pokemonCache[pokemonName];
  if (!pokemon) {
    return <Text>Pokémon não encontrado!</Text>;
  }
  console.log("pokemon encontrado no cache:", pokemon);
  return <PokemonDetails pokemon={pokemon} />;
}
