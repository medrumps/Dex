import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  pokemonName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pokemonTypes: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginBottom: 20,
  },
});
