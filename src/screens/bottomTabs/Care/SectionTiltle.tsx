import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseText from "../../../components/text";
import Divider from "../../../components/dividers";
import Color from "../../../constants/colors";

interface Props {
  title: string;
  subTitle: string;
}
const SectionTitle = ({ subTitle, title }: Props) => {
  return (
    <View>
      <BaseText size="h1">{title}</BaseText>
      <Divider size="s" />
      <BaseText size="h3" style={{ width: "80%" }} color={Color.brightPurple}>
        {subTitle}
      </BaseText>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({});
