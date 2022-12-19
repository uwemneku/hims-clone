import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import AppFonts from "./src/constants/fonts";
import AppNavigator from "./src/Navigators/AppNavigator";
export default function App() {
  const [isFontsLoaded] = useFonts({
    [AppFonts.sofia_bold]: require("./assets/fonts/SofiaProBold-english.ttf"),
    [AppFonts.sofia_medium]: require("./assets/fonts/SofiaProRegular-english.ttf"),
    [AppFonts.sofia_regular]: require("./assets/fonts/SofiaProSemiBold-english.ttf"),
    [AppFonts.sofia_medium]: require("./assets/fonts/SofiaProMedium-english.ttf"),
    [AppFonts.sofia_curly]: require("./assets/fonts/Sofia-Regular.ttf"),
  });
  if (!isFontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <SafeAreaView style={styles.container}> */}
          <AppNavigator />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
