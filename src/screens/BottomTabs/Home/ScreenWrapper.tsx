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
import Color from "../../../constants/colors";
import AnimatedHeaderIcon from "../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import BaseText from "../../../components/Text";
interface Props {
  children: React.ReactNode | React.ReactNode[];
}
type onScroll = ComponentProps<typeof ScrollView>["onScroll"];
const ScreenWrapper = ({ children }: Props) => {
  const scrollOffset = useSharedValue(0);
  const { top: paddingTop } = useSafeAreaInsets();

  const handleScroll: onScroll = ({ nativeEvent }) => {
    scrollOffset.value = nativeEvent.contentOffset.y;
    console.log(nativeEvent.contentOffset.y);
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
          { paddingTop },
          animatedHeaderContentStyle,
        ]}
      >
        <View style={styles.headerContent}>
          <Animated.View style={[styles.header, animatedTextStyle]}>
            <BaseText size="h2" align="center">
              Home
            </BaseText>
          </Animated.View>
          <AnimatedHeaderIcon scrollOffset={scrollOffset} iconName="person" />
        </View>
      </Animated.View>
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={[styles.content]}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Color.offWhite,
  },
  content: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    paddingBottom: 400,
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
