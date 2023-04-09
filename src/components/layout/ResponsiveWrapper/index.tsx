import { FC, PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import "react-native-gesture-handler";
import Color from "../../../constants/colors";
import { sizes } from "../../../constants/sizes";

const ResponsiveWrapper: FC<PropsWithChildren<ViewProps>> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.screen}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.offWhite,
  },
  screen: {
    flex: 1,
    maxWidth: sizes.maxScreen,
    width: "100%",
  },
});
export default ResponsiveWrapper;
