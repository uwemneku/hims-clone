import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../types/Navigation";
import {
  SetNotificationsScreen,
  BookVisitScreen,
  GetStartedScreen,
  LoginScreen,
  SetDateOfBirthScreen,
  SetStateScreen,
  SignUpScreen,
} from "../screens/onboarding";
import Color from "../constants/colors";

const { Navigator, Screen, Group } =
  createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Color.white },
        animation: "slide_from_right",
      }}
      initialRouteName="GetStarted"
    >
      <Screen name="GetStarted" component={GetStartedScreen} />
      <Group>
        <Screen name="SetDateOfBirth" component={SetDateOfBirthScreen} />
        <Screen name="SetState" component={SetStateScreen} />
      </Group>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="BookAVisit" component={BookVisitScreen} />
      <Screen name="SetNotifications" component={SetNotificationsScreen} />
    </Navigator>
  );
};

export default AuthenticationNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
    padding: 10,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    left: 20,
  },
});
