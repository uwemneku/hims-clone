import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { FC, useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from "../../../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseText from "../../../../components/Text";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  useSharedValue,
} from "react-native-reanimated";
import AnimatedHeaderIcon from "../../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { useMaterialTopScrollContext } from "./ScrollContext";
import AppFonts from "../../../../constants/fonts";
const Header = ({ navigation, state }: MaterialTopTabBarProps) => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const titleLayout = useSharedValue(0);
  const headers = state.routeNames.map(
    (i) => i.charAt(0).toUpperCase() + i.slice(1)
  );
  const [scrollOffset] = useMaterialTopScrollContext();

  const headerAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 100],
      ["rgba(248,248,248,0)", "rgba(229, 227, 224, 0.98)"]
    ),
  }));
  const titleAnimatedStyle = useAnimatedStyle(() => {
    const _interpolate = (input: [number, number]) => {
      "worklet";
      return interpolate(scrollOffset.value, [0, 20], input, Extrapolate.CLAMP);
    };
    return {
      fontSize: _interpolate([30, 20]),
      left: _interpolate([20, (width - titleLayout.value) / 2]),
      top: _interpolate([40, 20]) + top,
    };
  });

  const placeholderAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollOffset.value,
      [0, 20],
      [20, 0],
      Extrapolate.CLAMP
    ),
  }));

  const toggleActiveView = (i: string) => () =>
    navigation.navigate(i.toLowerCase());
  return (
    <Animated.View
      style={[styles.container, { paddingTop: top }, headerAnimatedStyles]}
    >
      <Animated.Text
        onLayout={(e) => {
          titleLayout.value = e.nativeEvent.layout.width;
        }}
        style={[styles.title, titleAnimatedStyle]}
      >
        Shop
      </Animated.Text>
      <View style={styles.headerTop}>
        <AnimatedHeaderIcon scrollOffset={scrollOffset} iconName="cart-sharp" />
      </View>
      <Animated.View style={placeholderAnimatedStyle} />
      <View style={styles.headerText}>
        {headers.map((i, index) => (
          <TouchableOpacity key={i} onPress={toggleActiveView(i)}>
            <HeaderText
              index={index}
              isActive={headers[state.index] === i}
              text={i}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};
const HeaderText: FC<{
  text: string;
  isActive: boolean;
  index: number;
}> = ({ isActive, text }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(isActive ? "100%" : "0%"),
  }));
  return (
    <View>
      <BaseText
        color={isActive ? Color.black : Color.darkGray}
        size={"h3"}
        fontWeight="sofia_bold"
      >
        {text}
      </BaseText>

      <Animated.View style={[styles.headerIndicator, animatedStyle]} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
    position: "relative",
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerIndicator: {
    marginTop: 10,
    height: 5,
    borderRadius: 5,
    backgroundColor: Color.black,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  title: {
    fontFamily: AppFonts.sofia_bold,
    position: "absolute",
    top: 0,
  },
});
