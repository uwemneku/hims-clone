import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import BaseText from "../Text";
import Color from "../../constants/colors";
type onScroll = ComponentProps<typeof Animated.ScrollView>["onScroll"];
const ITEM_HEIGHT = 50;
const PerspectiveScroll = () => {
  const scrollOffset = useSharedValue(0);
  const handleScroll: onScroll = ({ nativeEvent: { contentOffset } }) => {
    scrollOffset.value = contentOffset.y / ITEM_HEIGHT;
  };

  return (
    <Animated.ScrollView
      snapToInterval={ITEM_HEIGHT}
      onScroll={handleScroll}
      style={styles.container}
    >
      <View style={{ height: ITEM_HEIGHT * 2 }} />

      {[
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
      ].map((_, i) => (
        <ScrollItem index={i} scrollOffset={scrollOffset} key={i}>
          <BaseText size="h2" align="center">
            {_}
          </BaseText>
        </ScrollItem>
      ))}
      <View style={{ height: ITEM_HEIGHT * 1 }} />
    </Animated.ScrollView>
  );
};

interface ItemProps {
  index: number;
  scrollOffset: Animated.SharedValue<number>;
  children: JSX.Element;
}

const ScrollItem = ({ index, scrollOffset, children }: ItemProps) => {
  //TODO: optimize this animation
  const inputRange = [index - 2, index - 1, index, index + 1, index + 2];
  const animatedStyle = useAnimatedStyle(() => {
    const distanceFromCurrentIndex = index - scrollOffset.value;
    const translateY = distanceFromCurrentIndex * -18;
    if (index === 3) console.log("hello", distanceFromCurrentIndex, translateY);
    const opacity = interpolate(
      scrollOffset.value,
      [index - 3, ...inputRange, index + 3],
      [-1000, 0, 0.6, 1, 0.6, -10000, -1000],
      Extrapolate.CLAMP
    );
    const angle = interpolate(
      scrollOffset.value,
      inputRange,
      [-180, -50, 0, 50, 80],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      scrollOffset.value,
      inputRange,
      [0.8, 0.9, 1, 0.9, 0.8],
      Extrapolate.CLAMP
    );
    const backgroundColor = interpolateColor(scrollOffset.value, inputRange, [
      "rgba(0,0,0,0)",
      "rgba(0,0,0,0.1)",
      "rgba(0,0,0,0.25)",
      "rgba(0,0,0,0.1)",
      "rgba(0,0,0,0)",
    ]);
    return {
      transform: [
        { rotateX: `${angle}deg` },
        { perspective: 100 },
        { scale },
        { translateY },
      ],
      opacity,
      backgroundColor,
    };
  });
  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default PerspectiveScroll;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: Color.lightGray,
  },
  item: {
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
