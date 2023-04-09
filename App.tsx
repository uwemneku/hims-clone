import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppFonts from "./src/constants/fonts";
import AppNavigator from "./src/navigators/appNavigator";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isFontsLoaded] = useFonts({
    [AppFonts.sofia_bold]: require("./assets/fonts/SofiaSans-Bold.ttf"),
    [AppFonts.sofia_regular]: require("./assets/fonts/SofiaProSemiBold-english.ttf"),
    [AppFonts.sofia_medium]: require("./assets/fonts/SofiaProMedium-english.ttf"),
    [AppFonts.sofia_curly]: require("./assets/fonts/Sofia-Regular.ttf"),
    [AppFonts[
      "SofiaSans-Light"
    ]]: require("./assets/fonts/SofiaSans-Light.ttf"),
    [AppFonts[
      "SofiaSans-Regular"
    ]]: require("./assets/fonts/SofiaSans-Regular.ttf"),
  });
  if (!isFontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="" translucent />
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 300,
  },
});
