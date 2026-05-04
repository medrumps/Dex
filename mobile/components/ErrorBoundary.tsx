import { Component, type ErrorInfo, type ReactNode } from "react";
import { Text, View } from "react-native";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <View className="flex-1 items-center justify-center bg-white p-6">
          <Text className="text-center text-base text-red-600">
            Something went wrong.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}
