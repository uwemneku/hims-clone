import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps, FC, useState } from "react";
import BaseTextInput from "./BaseTextInput";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props
  extends Omit<
    ComponentProps<typeof BaseTextInput>,
    "rightAdornment" | "secureTextEntry"
  > {}

const PasswordInput: FC<Props> = (props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggle = () => setHidePassword(!hidePassword);

  return (
    <BaseTextInput
      secureTextEntry={hidePassword}
      rightAdornment={
        <TouchableOpacity onPress={toggle}>
          <Entypo
            name={hidePassword ? "eye-with-line" : "eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

export default PasswordInput;

const styles = StyleSheet.create({});
