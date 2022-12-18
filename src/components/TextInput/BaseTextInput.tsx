import { StyleSheet, View, TextInput, TextStyle } from "react-native";
import React, { ComponentProps, useRef } from "react";
import Color from "../../constants/colors";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import BaseText from "../Text";

const HEIGHT = 60;
const BORDER_WIDTH = 2;
type onLayout = ComponentProps<typeof Animated.Text>["onLayout"];
type textInputProps = Pick<
  ComponentProps<typeof TextInput>,
  "onFocus" | "onChangeText" | "onBlur"
>;
interface Props extends ComponentProps<typeof TextInput> {
  /**
   * This style is applied to the text input component
   */
  style?: TextStyle;
  /**
   * This style is applied to the placeholder text component.
   * ```paddingVertical``` and ```paddingTop``` are omitted as changing this values can affect the placeholder animation
   */
  placeholderStyle?: Omit<TextStyle, "paddingTop" | "paddingVertical">;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
  isError?: boolean;
  helperText?: string;
}
let isFirstRender = false;
const SMALL_FONT_SIZE = 5;

const BaseTextInput = ({
  style,
  leftAdornment,
  rightAdornment,
  placeholder,
  onChangeText,
  placeholderStyle,
  onFocus,
  onBlur,
  isError,
  helperText,
  value,
  ...props
}: Props) => {
  const placeholderLayoutChangeCount = useRef(0);
  const isTextInputEmpty = useRef(true);
  const calculatedPlaceholderTopValue = useRef(10);
  const placeholderTop = useSharedValue(calculatedPlaceholderTopValue.current);

  const paddingLeft = leftAdornment ? 10 : 0;
  const paddingRight = rightAdornment ? 10 : 0;
  const borderColor = isError ? Color.red : Color.lightGray;

  const animatePlaceholder = (value: number) => {
    placeholderTop.value = withTiming(value, {
      duration: 125,
      easing: Easing.linear,
    });
  };

  // animate placeholder to the top when text input is focused
  const handleTextInputFocus: textInputProps["onFocus"] = (e) => {
    animatePlaceholder(SMALL_FONT_SIZE);
    if (onFocus) onFocus(e);
  };

  // Calculate the middle of the textInput and place the placeholder there. The top value of the placeholder style is cached in a ref value
  const handleTextLayout: onLayout = (e) => {
    if (placeholderLayoutChangeCount.current) return;
    calculatedPlaceholderTopValue.current =
      (HEIGHT + BORDER_WIDTH * 2) / 2 - e.nativeEvent.layout.height / 2.5;
    placeholderTop.value = calculatedPlaceholderTopValue.current;

    // Animate the placeholder if textInput has an initial value
    // this is done here so the that accurate middle placement is calculated before moving the placeholder to the top
    if (value) animatePlaceholder(SMALL_FONT_SIZE);

    placeholderLayoutChangeCount.current++;
  };

  const handleTextInputChange: textInputProps["onChangeText"] = (e) => {
    isTextInputEmpty.current = e.trim().length === 0;
    if (onChangeText) onChangeText(e);
  };

  // Animated the placeholder back to the middle if the text input is empty on blur
  const handleTextInputBlur: textInputProps["onBlur"] = (e) => {
    if (isTextInputEmpty.current)
      animatePlaceholder(calculatedPlaceholderTopValue.current);
    if (onBlur) onBlur(e);
  };

  if (isFirstRender && value) {
    animatePlaceholder(SMALL_FONT_SIZE);
  }

  isFirstRender = true;
  const animatedPlaceholderStyle = useAnimatedStyle(
    () => ({
      paddingTop: placeholderTop.value,
      fontSize: interpolate(
        placeholderTop.value,
        [5, calculatedPlaceholderTopValue.current],
        [12, placeholderStyle?.fontSize || 14],
        Extrapolate.CLAMP
      ),
    }),
    [calculatedPlaceholderTopValue.current]
  );

  return (
    <>
      <View
        style={[
          styles.container,
          {
            paddingLeft,
            paddingRight,
            borderColor,
          },
        ]}
      >
        {leftAdornment}
        <View style={styles.container_inner}>
          {placeholder && (
            <Animated.Text
              style={[styles.placeholder, animatedPlaceholderStyle]}
              onLayout={handleTextLayout}
            >
              {placeholder}
            </Animated.Text>
          )}
          <TextInput
            onFocus={handleTextInputFocus}
            onChangeText={handleTextInputChange}
            onBlur={handleTextInputBlur}
            style={[styles.textInput, style]}
            value={value}
            {...props}
          />
        </View>
        {rightAdornment}
      </View>
      {helperText && (
        <BaseText
          style={[
            styles.helperText,
            { color: isError ? Color.red : Color.gray },
          ]}
          fontWeight="sofia_medium"
          size="small"
          color={Color.gray}
        >
          {helperText}
        </BaseText>
      )}
    </>
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: HEIGHT,
    borderWidth: BORDER_WIDTH,
    flexDirection: "row",
    alignItems: "center",
  },
  container_inner: {
    flex: 1,
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
    flex: 1,
    height: "100%",
    padding: 10,
    fontFamily: "sofia_regular",
  },
  helperText: {
    marginTop: 8,
    marginLeft: 8,
  },
});
