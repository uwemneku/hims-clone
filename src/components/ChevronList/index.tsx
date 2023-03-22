import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BaseText from "../Text";

interface Props {
  title: string | JSX.Element;
  onPress(): void;
}
const ChevronList = ({ onPress, title }: Props) => {
  const left = typeof title === "string" ? <BaseText>{title}</BaseText> : title;
  return (
    <TouchableOpacity onPress={onPress} style={styles.list}>
      {left}
      <Ionicons size={20} name="chevron-forward" />
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
