import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Pokemon } from "../../src/types/tipos";
import {
  capitalizeFirstLetter,
  getGradientColors,
} from "../../src/utils/helpers";

const Pokelist: React.FC<{ pokemon: Pokemon[]; showName: boolean }> = ({
  pokemon,
  showName,
}) => {
  return (
    <ScrollView contentContainerClassName="gap-4 py-4 px-8 place-items-center grid grid-cols-2">
      {pokemon.map((pokemon) => (
        <Link key={pokemon.name} href={`/screens/details?name=${pokemon.name}`}>
          <LinearGradient
            colors={getGradientColors(pokemon.mainType, pokemon.subType)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-[20px] opacity-90 items-center"
            key={pokemon.name}
          >
            <View>
              {showName && (
                <Text className="text-2xl font-bold text-center mt-2">
                  {capitalizeFirstLetter(pokemon.name)}
                </Text>
              )}
            </View>
            <View className="flex items-center">
              <Image
                source={{ uri: pokemon.image }}
                className="w-[150px] h-[150px]"
              />
            </View>
            <View className="mb-4">
              <Text className="text-xl font-bold text-center">
                {capitalizeFirstLetter(pokemon.mainType)}
                {pokemon.subType
                  ? ` / ${capitalizeFirstLetter(pokemon.subType)}`
                  : ""}
              </Text>
            </View>
          </LinearGradient>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Pokelist;
