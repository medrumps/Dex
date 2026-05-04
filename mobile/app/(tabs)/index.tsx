import { Text } from "react-native";

import { Screen } from "../../components/Screen";

export default function HomeScreen() {
  return (
    <Screen className="items-center justify-center">
      <Text className="text-lg font-semibold text-neutral-800">
        Home — NativeWind + Expo Router
      </Text>
    </Screen>
  );
}
