import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";

const withStyle = <S, K extends { style?: S }>(
  Component: React.ComponentType<K>,
  style: ViewStyle | TextStyle
) => {
  return (props: K) => (
    <Component style={{ ...style, ...props.style }} {...props} />
  );
};
export default withStyle;

const styles = StyleSheet.create({});
