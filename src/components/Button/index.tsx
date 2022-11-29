import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  label: string;
  variant: "filled" | "outlined";
  onPress(): void;
  color?: string;
}

const Button = ({ label, onPress, variant, color }: Props) => {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
