import { Slot, Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";

import { tokenCache } from "@clerk/clerk-expo/token-cache";

import { COLORS } from "../constants/colors";
import SafeScreen from "@/components/SafeScreen";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
