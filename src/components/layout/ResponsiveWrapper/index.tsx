import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Color from "../../../constants/colors";

const ResponsiveWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  screen: {
    flex: 1,
    maxWidth: 800,
    width: "100%",
  },
});
export default ResponsiveWrapper;
