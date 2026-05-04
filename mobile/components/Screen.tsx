import type { ReactNode } from "react";
import { View, type ViewProps } from "react-native";

import { cn } from "../lib/utils";

type ScreenProps = ViewProps & {
  children: ReactNode;
  className?: string;
};

export function Screen({ children, className, ...props }: ScreenProps) {
  return (
    <View className={cn("flex-1 bg-white", className)} {...props}>
      {children}
    </View>
  );
}
