import { StyleSheet, View } from "react-native";
import { useState } from "react";
import React from "react";
import DropDown from "../../components/Dropdown";
import BaseText from "../../components/Text";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const [value, setValue] = useState("");
  return (
    <View style={{ margin: 10 }}>
      <DropDown
        value={value}
        data={["hello", "hi", "youi"]}
        keyExtractor={(i) => i}
        renderItem={(i) => (
          <TouchableOpacity
            onPress={() => {
              setValue(i);
            }}
          >
            <BaseText>{i}</BaseText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
