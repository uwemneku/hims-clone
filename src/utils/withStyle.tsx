import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";

const withStyle = <S, K extends { style?: S }>(
  Component: React.ComponentType<K>,
  style: ViewStyle | TextStyle
) => {
  return ({ style: componentStyle, ...props }: K) => {
    // @ts-ignore
    return <Component style={[style, componentStyle]} {...props} />;
  };
};
export default withStyle;

const styles = StyleSheet.create({});
