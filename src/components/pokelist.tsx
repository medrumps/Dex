import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useTheme } from "../context/themecontext";
import { styles } from "../styles/components";
import { PokelistProps } from "../types/tipos";
import {
  capitalizeFirstLetter,
  collectUniqueTypes,
  filterPokemonList,
  getGradientColors,
  getPokemonGridLayout,
} from "../utils/helpers";

const Pokelist: React.FC<PokelistProps> = ({
  pokemon,
  showName,
  loading = false,
  error = null,
}) => {
  const router = useRouter();
  const { width: screenWidth } = useWindowDimensions();
  const { theme, toggleTheme } = useTheme();

  const { columns, cardGap, horizontalPadding, cardWidth } =
    getPokemonGridLayout(screenWidth);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<string | null>(null);

  const uniqueTypes = React.useMemo(
    () => collectUniqueTypes(pokemon),
    [pokemon],
  );
  const filteredPokemon = React.useMemo(
    () => filterPokemonList(pokemon, searchQuery, typeFilter),
    [pokemon, searchQuery, typeFilter],
  );

  if (loading)
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Carregando...</Text>
      </View>
    );
  if (error)
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{error}</Text>
      </View>
    );

  return (
    <View className={`flex-1 ${theme === 'dark' ? 'theme-dark' : 'theme-light'} ${styles.pageContainer}`}>
      <View className={styles.header}>
        <View className="flex-row justify-between items-center mb-4 gap-2">
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar por nome..."
            placeholderTextColor="#888"
            autoCapitalize="none"
            className={`flex-1 ${styles.searchBar}`}
          />
          <TouchableOpacity 
            onPress={toggleTheme}
            className={styles.themeToggle}
          >
            <Ionicons 
              name={theme === "light" ? "moon" : "sunny"} 
              size={20} 
              color={theme === "light" ? "#1e293b" : "#f8fafc"} 
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="py-2"
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-2"
          >
            <TouchableOpacity
              onPress={() => setTypeFilter(null)}
              className={
                typeFilter === null
                  ? styles.filterButtonActive
                  : styles.filterButtonInactive
              }
            >
              <Text
                className={
                  typeFilter === null
                    ? styles.filterButtonActiveText
                    : styles.filterButtonInactiveText
                }
              >
                Todos
              </Text>
            </TouchableOpacity>
            {uniqueTypes.map((t) => (
              <TouchableOpacity
                key={t}
                onPress={() => setTypeFilter(typeFilter === t ? null : t)}
                className={
                  typeFilter === t
                    ? styles.filterButtonActive
                    : styles.filterButtonInactive
                }
              >
                <Text
                  className={
                    typeFilter === t
                      ? styles.filterButtonActiveText
                      : styles.filterButtonInactiveText
                  }
                >
                  {capitalizeFirstLetter(t)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingVertical: 12,
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {filteredPokemon.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyStateText}>
              Nenhum Pokémon encontrado.
            </Text>
          </View>
        ) : (
          <View className={styles.gridContainer} style={{ gap: cardGap }}>
            {filteredPokemon.map((pokemon) => (
              <Link
                key={pokemon.name}
                href={`/screens/details?name=${pokemon.name}`}
                asChild
              >
                <TouchableOpacity
                  className={styles.card}
                  style={{ width: cardWidth, borderRadius: 16 }}
                >
                  <View
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 16,
                    }}
                  >
                    <LinearGradient
                      colors={getGradientColors(
                        pokemon.mainType,
                        pokemon.subType,
                      )}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    />
                    <View
                      className={`w-full py-4 ${styles.cardContent}`}
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      {showName && (
                        <Text
                          className={styles.pokemonName}
                          numberOfLines={1}
                          style={{
                            textAlign: "center",
                            textShadowColor: "rgba(0,0,0,0.3)",
                            textShadowOffset: { width: 0, height: 1 },
                            textShadowRadius: 4,
                          }}
                        >
                          {capitalizeFirstLetter(pokemon.name)}
                        </Text>
                      )}
                      <View className="w-24 h-24 items-center justify-center self-center">
                        <Image
                          source={{ uri: pokemon.image }}
                          style={{ width: 96, height: 96 }}
                          resizeMode="contain"
                        />
                      </View>
                      <Text
                        className={styles.pokemonType}
                        numberOfLines={1}
                        style={{ textAlign: "center" }}
                      >
                        {capitalizeFirstLetter(pokemon.mainType)}
                        {pokemon.subType
                          ? ` / ${capitalizeFirstLetter(pokemon.subType)}`
                          : ""}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Pokelist;
