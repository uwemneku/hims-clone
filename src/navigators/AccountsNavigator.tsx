import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountStackScreenParamsList } from "../types/Navigation";
import {
  AccountsScreen,
  ContactScreen,
  OrderHistoryDetailsScreen,
  OrderHistoryScreen,
  SubscriptionScreen,
} from "../screens/Account/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } =
  createNativeStackNavigator<AccountStackScreenParamsList>();

const AccountsNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Screen name="account" component={AccountsScreen} />
      <Screen name="contactInfo" component={ContactScreen} />
      <Screen name="subscriptions" component={SubscriptionScreen} />
      <Screen name="orderHistory" component={OrderHistoryScreen} />
      <Screen
        name="orderHistoryDetails"
        component={OrderHistoryDetailsScreen}
      />
    </Navigator>
  );
};

export default AccountsNavigator;

const styles = StyleSheet.create({});
