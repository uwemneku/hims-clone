import { StyleSheet, View } from "react-native";
import React from "react";
import { Svg, LinearGradient, Defs, Circle, Stop } from "react-native-svg";
import SpinningView from "../../../components/Animations/SpinningView";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
const LoadingAnimation = () => {
  return (
    <View style={styles.container}>
      <SpinningView>
        <Svg width="200" height="200">
          <Defs>
            <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="10%" stopColor={"#263048"} />
              <Stop offset="20%" stopColor={"#7685d0"} />
              <Stop offset="100%" stopColor={"#70b8bb"} />
            </LinearGradient>
          </Defs>
          <Circle
            cx="50%"
            cy="50%"
            r="80"
            stroke="url(#gradient)"
            strokeWidth={"5"}
            fill="none"
          />
        </Svg>
      </SpinningView>
      <BaseText size="small" color={Color.gray}>
        Loading Your Consultation
      </BaseText>
    </View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
