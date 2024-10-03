import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Cart" />
      <Stack.Screen name="CreditCard" />
      <Stack.Screen options={{ headerShown: false }} name="Test" />
    </Stack>
  );
}
