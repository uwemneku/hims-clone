import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";
import AuthenticationNavigator from "./AuthenticationNavigator";
import StartConsultationNavigator from "./StartConsultationNavigator";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./BottomTabsNavigator";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }}
    >
      <Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
      >
        <Screen name="Onboarding" component={AuthenticationNavigator} />
        <Screen
          name="StartingConsultation"
          component={StartConsultationNavigator}
        />
        <Screen name="HomeBottomTabs" component={BottomTabsNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
