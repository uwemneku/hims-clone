import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeBottomTabsParamsList } from "../types/Navigation";
import {
  BottomTabs_CareScreen,
  BottomTabs_HomeScreen,
  BottomTabs_ProgramsScreen,
  BottomTabs_TabBar,
} from "../screens/BottomTabs";
import Color from "../constants/colors";
import ShopNavigator from "./ShopNavigator";

const { Navigator, Screen } =
  createBottomTabNavigator<HomeBottomTabsParamsList>();

const BottomTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{ backgroundColor: Color.offWhite }}
      tabBar={BottomTabs_TabBar}
    >
      <Screen name="home" component={BottomTabs_HomeScreen} />
      <Screen name="care" component={BottomTabs_CareScreen} />
      <Screen name="shop" component={ShopNavigator} />
      <Screen name="programs" component={BottomTabs_ProgramsScreen} />
    </Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
