import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../types/Navigation";
import { GetStartedScreen } from "../screens/Onboarding";
import Color from "../constants/colors";

const { Navigator, Screen } =
  createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Color.white },
      }}
      initialRouteName="GetStarted"
    >
      <Screen name="GetStarted" component={GetStartedScreen} />
    </Navigator>
  );
};

export default OnboardingNavigator;

const styles = StyleSheet.create({});
