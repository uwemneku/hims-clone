import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { ComponentProps } from "react";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../types/Navigation";
import {
  GetStartedScreen,
  SetDateOfBirthScreen,
  SetStateScreen,
} from "../screens/Onboarding";
import Color from "../constants/colors";
import BaseText from "../components/Text";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen, Group } =
  createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
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
      <Group
        screenOptions={{
          headerShown: true,
          header: (props) => <Header {...props} />,
        }}
      >
        <Screen name="SetDateOfBirth" component={SetDateOfBirthScreen} />
        <Screen name="SetState" component={SetStateScreen} />
      </Group>
    </Navigator>
  );
};

const Header = ({ navigation }: NativeStackHeaderProps) => {
  const handleButtonPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Ionicons name="arrow-back-sharp" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <BaseText fontWeight="sofia_bold">Getting Stared</BaseText>
    </View>
  );
};
export default OnboardingNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
    padding: 10,
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
