import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppParamList } from "../types/Navigation";
import OnboardingNavigator from "./OnboardingNavigator";
const { Navigator, Screen } = createNativeStackNavigator<AppParamList>();
const AppNavigator = () => {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Onboarding" component={OnboardingNavigator} />
    </Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
