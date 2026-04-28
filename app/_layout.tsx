import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Pokédex",
          headerStyle: { backgroundColor: "#e7e7e7" },
          headerTitleStyle: { color: "#333", fontSize: 24 },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="screens/details"
        options={{
          headerTitle: "Details",
          headerStyle: { backgroundColor: "#e7e7e7" },
          headerTitleStyle: { color: "#333", fontSize: 24 },
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
