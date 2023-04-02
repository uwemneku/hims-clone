import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ComponentProps, FC } from "react";
import BaseText from "../Text";
import Divider from "../Dividers";

interface Props extends Omit<ComponentProps<typeof BaseText>, "style"> {
  left: string;
  right: string;
  style?: ViewStyle;
}

const TextList: FC<Props> = ({ left, right, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <BaseText style={{ flex: 1 }} {...props}>
        {left}
      </BaseText>
      <BaseText style={{ flex: 1 }} align="right" {...props}>
        {right}
      </BaseText>
    </View>
  );
};

export default TextList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
