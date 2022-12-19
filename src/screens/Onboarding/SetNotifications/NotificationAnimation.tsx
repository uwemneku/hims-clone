import { StyleSheet, View } from "react-native";
import React from "react";
import Color from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

interface Props {
  delay: number;
  endScale?: number;
}

const NotificationAnimation = ({ delay, endScale = 1 }: Props) => {
  const progress = useSharedValue(0);
  progress.value = withDelay(
    1000 + delay,
    withTiming(1, { easing: Easing.linear })
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 0.5],
            [0, endScale],
            Extrapolate.CLAMP
          ),
        },
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [200, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(progress.value, [0, 0.5], [0, 1], Extrapolate.CLAMP),
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <LinearGradient
        style={styles.gradient}
        colors={["rgba(0,0,0, 0)", "rgba(0,0,0, 0.05)"]}
      />
      <Animated.View style={[styles.box]}>
        <View style={styles.innnerBox}>
          <BaseText style={styles.logo} size="h1" fontWeight="sofia_curly">
            h
          </BaseText>
          <Divider dir="horizontal" />
          <View>
            <BaseText size="h3">New message from Pete</BaseText>
            <BaseText size="body">Tap to open</BaseText>
          </View>
        </View>
        <View>
          <BaseText size="subTitle" color={Color.darkGray}>
            34m ago
          </BaseText>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default NotificationAnimation;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  box: {
    backgroundColor: Color.white,
    padding: 15,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 1,
  },
  innnerBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  logo: {
    backgroundColor: Color.lightGray,
    alignSelf: "flex-start",
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
  },
});
