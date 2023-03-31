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
import Color from "../../../../constants/colors";
import BaseText from "../../../Text";

type IconProps = Object & {
  scrollOffset: Animated.SharedValue<number>;
};
interface Props {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  leftIcon?: (props: IconProps) => JSX.Element;
  rightIcon?: (props: IconProps) => JSX.Element;
}
type onScroll = ComponentProps<typeof ScrollView>["onScroll"];

const BottomTabScreenWrapper = ({
  children,
  title,
  leftIcon,
  rightIcon,
}: Props) => {
  const scrollOffset = useSharedValue(0);
  const { top: paddingTop } = useSafeAreaInsets();

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
          { paddingTop: paddingTop, paddingBottom: paddingTop * 0 },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            {leftIcon && leftIcon({ scrollOffset })}
          </View>
          <View style={{ flex: 1 }} />
          <Animated.View style={[styles.header, animatedTextStyle]}>
            <BaseText size="h2" align="center">
              {title}
            </BaseText>
          </Animated.View>
          <View style={styles.iconContainer}>
            {rightIcon && rightIcon({ scrollOffset })}
          </View>
        </View>
      </Animated.View>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={[styles.content]}
      >
        {children}
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
  iconContainer: {
    minHeight: 24,
    zIndex: 20,
    paddingVertical: 5,
  },
});
