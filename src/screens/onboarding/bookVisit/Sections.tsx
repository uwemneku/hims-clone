import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import ChevronList from "../../../components/ChevronList";
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
    <View>
      <BaseText size="body" style={{ paddingBottom: 5 }} color={Color.darkGray}>
        {title}
      </BaseText>
      {list.map((i) => (
        <ChevronList key={i} onPress={handleClick(i)} title={i} />
      ))}
    </View>
  );
};

export default Sections;
