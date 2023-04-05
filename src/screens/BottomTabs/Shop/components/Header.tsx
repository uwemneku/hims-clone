import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Color from "../../../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseText from "../../../../components/Text";
import Animated, {
  interpolateColor,
  useDerivedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AnimatedHeaderIcon from "../../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { useMaterialTopScrollContext } from "./ScrollContext";
const Header = ({ navigation, state }: MaterialTopTabBarProps) => {
  const { top } = useSafeAreaInsets();
  const headers = state.routeNames.map(
    (i) => i.charAt(0).toUpperCase() + i.slice(1)
  );
  const [scrollOffset] = useMaterialTopScrollContext();
  useDerivedValue(() => {
    console.log("scroll", scrollOffset.value);
  }, [scrollOffset.value]);
  const headerAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 100],
      ["rgba(248,248,248,0)", "rgba(229, 227, 224, 0.98)"]
    ),
  }));

  const toggleActiveView = (i: string) => () =>
    navigation.navigate(i.toLowerCase());
  return (
    <Animated.View
      style={[styles.container, { paddingTop: top }, headerAnimatedStyles]}
    >
      <View style={styles.headerTop}>
        <AnimatedHeaderIcon scrollOffset={scrollOffset} iconName="cart-sharp" />
      </View>
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
      <View style={{ flex: 1 }}>
        <Animated.ScrollView horizontal></Animated.ScrollView>
      </View>
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
});
