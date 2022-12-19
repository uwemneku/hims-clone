import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartingVisitStackParamList } from "../types/Navigation";
import { StartVisitingWelcomeScreen } from "../screens/StartingVisit";

const { Navigator, Screen, Group } =
  createNativeStackNavigator<StartingVisitStackParamList>();

const StartVisitingNavigator = () => {
  return (
    <Navigator
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="welcome" component={StartVisitingWelcomeScreen} />
    </Navigator>
  );
};

export default StartVisitingNavigator;

const styles = StyleSheet.create({});
