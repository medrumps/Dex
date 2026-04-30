import { styles } from "@/src/styles/estilos";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import { Pokemon } from "../../src/types/tipos";
import {
    capitalizeFirstLetter,
    getGradientColors,
} from "../../src/utils/helpers";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}
export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <LinearGradient
      colors={getGradientColors(pokemon.mainType, pokemon.subType)}
      style={{ flex: 1 }}
    >
      <Text style={styles.pokemonName}>
        {capitalizeFirstLetter(pokemon.name)}
      </Text>
    </LinearGradient>
  );
};
