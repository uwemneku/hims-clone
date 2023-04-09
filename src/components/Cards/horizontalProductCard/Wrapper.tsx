import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import BaseText from "../../Text";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../../../constants/colors";
import Divider from "../../Dividers";

interface Props extends ComponentProps<typeof View> {
  title?: string;
  subtitle?: string;
  iconName?: ComponentProps<typeof MaterialIcons>["name"];
}
const HorizontalCardWrapper = ({
  children,
  style,
  title,
  subtitle,
  iconName,
  ...props
}: Props) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {Boolean(title || subtitle || iconName) && (
        <View style={styles.header}>
          <View>
            {title && (
              <BaseText fontWeight="sofia_bold" size="h2">
                {title}
              </BaseText>
            )}
            {subtitle && (
              <>
                <Divider size="xs" />
                <BaseText size="h2" color={Color.gray}>
                  {subtitle}
                </BaseText>
              </>
            )}
          </View>
          {iconName && (
            <MaterialIcons name={iconName} size={30} color={Color.black} />
          )}
        </View>
      )}
      {children}
    </View>
  );
};

export default HorizontalCardWrapper;

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
