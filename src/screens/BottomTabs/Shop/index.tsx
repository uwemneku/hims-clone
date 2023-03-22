import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import AnimatedHeaderIcon from "../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
interface Props {
  title: string;
  leftIcon?: (props: {
    scrollOffset: Animated.SharedValue<number>;
  }) => JSX.Element;
  rightIcon?: (props: {
    scrollOffset: Animated.SharedValue<number>;
  }) => JSX.Element;
}
type onScroll = ComponentProps<typeof ScrollView>["onScroll"];

const BottomTabScreenWrapper = ({ title, leftIcon, rightIcon }: Props) => {
  const scrollOffset = useSharedValue(0);
  const { top } = useSafeAreaInsets();

  const handleScroll: onScroll = ({ nativeEvent }) => {
    scrollOffset.value = nativeEvent.contentOffset.y;
  };
  const animatedHeaderContentStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 100],
      ["rgba(248,248,248,0)", "rgba(229, 227, 224, 0.98)"]
    ),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [0, 100],
          [100, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedHeader,
          animatedHeaderContentStyle,
          { paddingTop: top + 10 },
        ]}
      >
        <View style={styles.headerContent}>
          <Animated.View style={[styles.header, animatedTextStyle]}>
            <BaseText size="h2" align="center">
              Shop
            </BaseText>
          </Animated.View>
          <AnimatedHeaderIcon scrollOffset={scrollOffset} iconName="cart" />
        </View>
      </Animated.View>
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={[styles.content]}
      >
        <View style={{ height: 3000, backgroundColor: "red" }} />
      </ScrollView>
    </View>
  );
};

export default BottomTabScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Color.offWhite,
  },
  content: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    paddingBottom: 200,
    backgroundColor: Color.offWhite,
  },
  animatedHeader: {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    paddingHorizontal: 20,
    paddingBottom: 10,
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    textAlignVertical: "center",
    position: "absolute",
    width: "100%",
    textAlign: "center",
  },
});
