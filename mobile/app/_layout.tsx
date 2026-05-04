import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ErrorBoundary } from "../components/ErrorBoundary";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
      </>
    </ErrorBoundary>
  );
}
