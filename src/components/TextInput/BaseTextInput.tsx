import { StyleSheet, View, TextInput, TextStyle } from "react-native";
import React, { ComponentProps, useRef } from "react";
import Color from "../../constants/colors";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const HEIGHT = 60;
const BORDER_WIDTH = 2;
type onLayout = ComponentProps<typeof Animated.Text>["onLayout"];
type onFocus = ComponentProps<typeof TextInput>["onFocus"];
interface Props extends Omit<ComponentProps<typeof TextInput>, ""> {
  style?: TextStyle;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
}

const BaseTextInput = ({
  style,
  leftAdornment,
  rightAdornment,
  placeholder,
  onFocus,
  ...props
}: Props) => {
  const renderCount = useRef(0);
  const placeholderTop = useSharedValue(10);
  const handleTextInputFocus: onFocus = (e) => {
    placeholderTop.value = withTiming(5, { duration: 250 });
    if (onFocus) onFocus(e);
  };
  const handleTextLayout: onLayout = (e) => {
    if (renderCount.current) return;
    placeholderTop.value =
      (HEIGHT + BORDER_WIDTH * 2) / 2 - e.nativeEvent.layout.height / 2.5;
    renderCount.current++;
  };
  const animatedStyle = useAnimatedStyle(() => ({
    paddingTop: placeholderTop.value,
    fontSize: interpolate(
      placeholderTop.value,
      [5, 10],
      [12, 14],
      Extrapolate.CLAMP
    ),
  }));
  const paddingLeft = leftAdornment ? 10 : 0;
  const paddingRight = rightAdornment ? 10 : 0;
  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft,
          paddingRight,
        },
      ]}
    >
      {leftAdornment}
      <View style={styles.container_inner}>
        {placeholder && (
          <Animated.Text
            style={[styles.placeholder, animatedStyle]}
            onLayout={handleTextLayout}
          >
            {placeholder}
          </Animated.Text>
        )}
        <TextInput
          onFocus={handleTextInputFocus}
          style={[styles.textInput, style]}
          {...props}
        />
      </View>
      {rightAdornment}
    </View>
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: HEIGHT,
    borderWidth: BORDER_WIDTH,
    borderColor: Color.lightGray,
    flexDirection: "row",
    alignItems: "center",
  },
  container_inner: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  placeholder: {
    position: "absolute",
    fontFamily: "sofia_regular",
    left: 10,
    color: Color.lightGray,
  },
  textInput: {
    width: "100%",
    height: "100%",
    padding: 10,
    fontFamily: "sofia_regular",
  },
});
