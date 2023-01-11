import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Divider from "../../../components/Dividers";

interface Props {
  title: string;
  items: { title: string; tag?: string }[];
}
const CareList = ({ items = [], title }: Props) => {
  return (
    <View>
      <BaseText color={Color.darkGray}>{title}</BaseText>
      <Divider size="l" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((_) => {
          return (
            <View key={_.title} style={{ flexDirection: "row" }}>
              <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <BaseText color={Color.purple} size={"small"} align="right">
                  {_.tag}
                </BaseText>
                <Divider size="xl" />
                <BaseText color={Color.black}>{_.title}</BaseText>
              </TouchableOpacity>
              <Divider dir="horizontal" />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CareList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    padding: 15,
    borderRadius: 7.5,
    overflow: "hidden",
    width: 180,
  },
});
