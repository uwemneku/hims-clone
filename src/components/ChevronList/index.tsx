import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "../Text";
import Color from "../../constants/colors";

interface Props {
  title: string | JSX.Element;
  onPress(): void;
  disabled?: boolean;
}
const ChevronList = ({ onPress, title, disabled }: Props) => {
  const left = typeof title === "string" ? <BaseText>{title}</BaseText> : title;
  const handleClick = () => {
    !disabled && onPress();
  };
  return (
    <TouchableOpacity onPress={handleClick} style={styles.list}>
      <View style={{ flex: 1 }}>{left}</View>
      <Ionicons size={20} name="chevron-forward" color={Color.gray} />
    </TouchableOpacity>
  );
};

export default ChevronList;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});
