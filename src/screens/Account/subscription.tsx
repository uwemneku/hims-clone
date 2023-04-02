import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import BackIcon from "../../components/Icon/BackIcon";
import withDefaultValue from "../../utils/withDefaultValue";
import BaseText from "../../components/Text";
import Divider from "../../components/Dividers";
import Color from "../../constants/colors";

const Subscription = () => {
  return (
    <HeadingScreenWrapper leftIcon={LeftIcon} title="Subscriptions">
      <BaseText size="h1">Subscriptions</BaseText>
      <Divider />
      <View style={styles.card}>
        <BaseText>You have no subscription</BaseText>
      </View>
    </HeadingScreenWrapper>
  );
};

const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default Subscription;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.lightGray,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
});
