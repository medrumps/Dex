import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../../src/styles/estilos";
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
    >
      {pokemon.map((pokemon) => (
        <Link key={pokemon.name} href={"/screens/details"}>
          <LinearGradient
            colors={getGradientColors(pokemon.mainType, pokemon.subType)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.container, { opacity: 0.9 }]} // Gradiente aqui
            key={pokemon.name}
          >
            {showName && (
              <Text style={styles.pokemonName}>
                {capitalizeFirstLetter(pokemon.name)}
              </Text>
            )}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: pokemon.image }}
                style={{ width: 150, height: 150 }}
              />
              <Image
                source={{ uri: pokemon.imageShiny }}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <View style={styles.typeContainer}>
              <Text style={[styles.pokemonTypes]}>
                Tipo: {capitalizeFirstLetter(pokemon.mainType)}
              </Text>
              {pokemon.subType && (
                <Text style={[styles.pokemonTypes]}>
                  Subtipo: {capitalizeFirstLetter(pokemon.subType)}
                </Text>
              )}
            </View>
          </LinearGradient>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Pokelist;
