import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountStackScreenParamsList } from "src/types/Navigation";
import { AccountsScreen, ContactScreen } from "../screens/Account/index";

const { Navigator, Screen } =
  createStackNavigator<AccountStackScreenParamsList>();

const AccountsNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="account" component={AccountsScreen} />
      <Screen name="contactInfo" component={ContactScreen} />
    </Navigator>
  );
};

export default AccountsNavigator;

const styles = StyleSheet.create({});
