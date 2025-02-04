import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
    // NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });

  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        {children}
      </SafeAreaView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
