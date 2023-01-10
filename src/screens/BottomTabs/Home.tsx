import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import AppFonts from "../../constants/fonts";
import Animated from "react-native-reanimated";

const Home = () => {
  const mes = useRef(0);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text allowFontScaling={false} style={styles.text}>
          2
        </Text>
        <Animated.View style={styles.check} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "relative",
    backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // width: 150,
  },
  text: {
    fontSize: 300,
    padding: 0,
    margin: 0,
    includeFontPadding: false,
    // backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
  },
  check: {
    position: "absolute",
    height: "65%",
    width: "100%",
    backgroundColor: "green",
    opacity: 0.5,
  },
});
