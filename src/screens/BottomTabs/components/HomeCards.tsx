import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import BaseText from "../../../components/Text";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";

interface Props extends ComponentProps<typeof View> {
  title: string;
  subtitle?: string;
}
const HomeCards = ({ children, style, title, subtitle, ...props }: Props) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.header}>
        <View>
          <BaseText size="h2">{title}</BaseText>
          {subtitle && (
            <>
              <Divider size="xs" />
              <BaseText size="h2" color={Color.gray}>
                {subtitle}
              </BaseText>
            </>
          )}
        </View>
        <MaterialIcons name="show-chart" size={30} color={Color.black} />
      </View>
      {children}
    </View>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: 20,
    minHeight: 200,
    paddingVertical: 15,
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
