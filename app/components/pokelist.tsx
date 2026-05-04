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
    <ScrollView
      contentContainerStyle={{
        gap: 7,
        padding: 20,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
      }}
      className="gap-2 p-5 bg-gray-200 items-center"
    >
      {pokemon.map((pokemon) => (
        <Link key={pokemon.name} href={`/screens/details?name=${pokemon.name}`}>
          <LinearGradient
            colors={getGradientColors(pokemon.mainType, pokemon.subType)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 20, opacity: 0.9 }}
            className="items-center mt-[10px]"
            key={pokemon.name}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
                marginBottom: 20,
              }}
            >
              {showName && (
                <Text className="text-[30px] font-bold mb-[10px] text-center w-full">
                  {capitalizeFirstLetter(pokemon.name)}
                </Text>
              )}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: pokemon.image }}
                style={{ width: 150, height: 150 }}
              />
              <Image
                source={{ uri: pokemon.imageShiny }}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
                marginBottom: 20,
              }}
            >
              <Text className="text-[20px] font-bold text-center">
                Tipo: {capitalizeFirstLetter(pokemon.mainType)} /{" "}
                {pokemon.subType ? capitalizeFirstLetter(pokemon.subType) : ""}
              </Text>
            </View>
          </LinearGradient>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Pokelist;
