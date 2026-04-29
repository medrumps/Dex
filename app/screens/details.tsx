import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { pokemonCache } from "../../src/cache";
import { getGradientColors } from "../../src/utils/helpers";

export default function Details() {
  const params = useLocalSearchParams();
  const name = Array.isArray(params.name) ? params.name[0] : params.name;

  // Busca instantânea no objeto de cache, sem precisar de fetch/async
  const pokemon = pokemonCache[name];
  if (!pokemon) return <Text>Pokémon não encontrado!</Text>;
  console.log("pokemon encontrado no cache:", pokemon);
  return (
    <LinearGradient
      colors={getGradientColors(pokemon.mainType, pokemon.subType)}
      style={{ flex: 1 }}
    >
      <Text>{pokemon.name}</Text>
    </LinearGradient>
  );
}
