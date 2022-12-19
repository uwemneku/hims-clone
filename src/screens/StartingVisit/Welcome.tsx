import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import ScreenWithHeading from "../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import Button from "../../components/Button";
import BaseText from "../../components/Text";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";

const Welcome = () => {
  const { height } = useWindowDimensions();
  return (
    <ScreenWithHeading style={{}} hideBackButton screenTitle="Sign up">
      <View
        style={[
          { height: Math.max(height * 0.55, 300), backgroundColor: "red" },
          styles.image,
        ]}
      ></View>
      <Divider />
      <BaseText size="h1">You're almost there</BaseText>
      <Divider />
      <BaseText color={Color.gray}>
        We'll need to gather some information from you so a provider can
        evaluate you for treatment
      </BaseText>
      <Divider size="xl" />
      <Button label="Start Visit" />
    </ScreenWithHeading>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
  },
});
