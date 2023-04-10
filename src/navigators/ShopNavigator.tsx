import { StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ShopMaterialTopTabsParamList } from "../types/Navigation";
import {
  MaterialTopScrollContextProvider,
  ShopBrowseScreen,
  ShopFeaturesScreen,
  ShopNavigatorHeader,
} from "../screens/bottomTabs/shop";

const { Navigator, Screen } =
  createMaterialTopTabNavigator<ShopMaterialTopTabsParamList>();
const ShopNavigator = () => {
  return (
    <MaterialTopScrollContextProvider>
      <Navigator
        initialRouteName="featured"
        screenOptions={{}}
        tabBar={ShopNavigatorHeader}
      >
        <Screen name="featured" component={ShopFeaturesScreen} />
        <Screen name="browse" component={ShopBrowseScreen} />
      </Navigator>
    </MaterialTopScrollContextProvider>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
