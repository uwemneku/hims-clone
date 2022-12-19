import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BaseText from "../../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../../constants/colors";
export type SectionList = {
  title: string;
  list: string[];
};
interface Props extends SectionList {
  onItemClick(item: string): void;
}
const Sections = ({ list, title, onItemClick }: Props) => {
  const handleClick = (i: string) => () => {
    onItemClick(i);
  };
  return (
    <View style={styles.container}>
      <BaseText size="body" style={{ paddingBottom: 5 }} color={Color.darkGray}>
        {title}
      </BaseText>
      {list.map((i) => (
        <TouchableOpacity onPress={handleClick(i)} key={i} style={styles.list}>
          <BaseText>{i}</BaseText>
          <Ionicons size={20} name="chevron-forward" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});
