import {
  ImageBackground,
  StyleSheet,
  View,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import React from "react";
import { addOpacity } from "../../../utils";
import Color from "../../../constants/colors";

interface Props {
  textView: React.ReactNode;
  button: React.ReactNode;
  backgroundImage?: ImageSourcePropType;
  backgroundOpacity?: number;
  style?: ViewStyle;
}

const IntroScreenLayout = ({
  textView,
  button,
  backgroundImage,
  backgroundOpacity = 0,
  style,
}: Props) => {
  return (
    <ImageBackground source={backgroundImage} style={[styles.container, style]}>
      <View
        style={[
          {
            backgroundColor: addOpacity(Color.black, backgroundOpacity),
            width: "100%",
          },
        ]}
      >
        <View style={styles.textBox}>{textView}</View>
      </View>
      <View style={styles.button}>{button}</View>
    </ImageBackground>
  );
};

export default IntroScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textBox: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    maxWidth: 500,
    paddingVertical: 20,
  },
  button: {
    position: "absolute",
    bottom: 30,
    padding: 20,
    width: "100%",
  },
});
