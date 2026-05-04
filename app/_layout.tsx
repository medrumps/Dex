import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { cssInterop } from "nativewind";

cssInterop(LinearGradient, { className: "style" });

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Pokédex",
          headerStyle: { backgroundColor: "#e7e7e7" },
          headerTitleStyle: { color: "#333333", fontSize: 24 },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="screens/details"
        options={{
          headerTitle: "Details",
          headerStyle: { backgroundColor: "#e7e7e7" },
          headerTitleStyle: { color: "#333333", fontSize: 24 },
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.75, 1],
          sheetGrabberVisible: true,
        }}
      />
    </Stack>
  );
}
