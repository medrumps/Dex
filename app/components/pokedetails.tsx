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
      className="flex-1"
    >
      <Text className="text-[30px] font-bold mb-[10px] text-center">
        {capitalizeFirstLetter(pokemon.name)}
      </Text>
    </LinearGradient>
  );
};

export default PokemonDetails;
