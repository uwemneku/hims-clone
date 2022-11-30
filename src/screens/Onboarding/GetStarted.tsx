import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../components/Button";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";
import { OnboardingStackParamList } from "../../types/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<OnboardingStackParamList, "GetStarted">;
const GetStarted = ({ navigation, route }: Props) => {
  const handleButtonPress = (screen: keyof OnboardingStackParamList) => () =>
    navigation.navigate(screen);
  return (
    <View>
      <Text>Get your personalized treatment Plan</Text>
      <Button
        label="Get started"
        onPress={handleButtonPress("SetState")}
        color={Color.white}
      />
      <Divider size="l" />
      <Button
        label="Log in"
        onPress={handleButtonPress("Login")}
        variant="outlined"
        color={Color.white}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
