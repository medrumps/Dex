import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import { Pokemon } from "../types/tipos";
import {
    capitalizeFirstLetter,
    getGradientColors,
} from "../utils/helpers";

interface PokemonDetailsProps {
  pokemon: Pokemon;
}
export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <LinearGradient
      colors={getGradientColors(pokemon.mainType, pokemon.subType)}
      className="flex-1"
    >
      <Text className="text-3xl font-bold mb-2.5 self-center">
        {capitalizeFirstLetter(pokemon.name)}
      </Text>
    </LinearGradient>
  );
};
