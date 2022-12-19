import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../../components/Button";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import BaseText from "../../../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { addOpacity } from "../../../utils/inex";

const SetNotifications = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, position: "relative" }}>
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(192,212,210,1)", "transparent"]}
        />
        <View style={styles.frame} />
        <LinearGradient
          style={styles.gradient}
          colors={["transparent", "white"]}
        />
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.textContainer}>
          <BaseText size="h1">Don't miss anything</BaseText>
          <Divider size="m" />
          <BaseText color={Color.gray}>
            Allow notifications from us to stay on top of communications with
            your DOC, or receive shipping updates
          </BaseText>
        </View>
        <Button label={"Allow notifications"} />
        <Divider size="m" />
        <Button color={Color.lightGray} label={"Not right now"} />
      </View>
    </View>
  );
};

export default SetNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  textContainer: {
    marginBottom: "20%",
  },
  gradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  frame: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 60,
    borderWidth: 12,
    borderBottomWidth: 0,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderColor: addOpacity(Color.black, 0.25),
    backgroundColor: Color.white,
  },
});
