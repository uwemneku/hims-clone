import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/Button";

const SetState = () => {
  return (
    <View style={{ padding: 20 }}>
      <BaseTextInput placeholder="Select text" leftAdornment={<Text>v</Text>} />
      <Button label="hello" variant="outlined" />
    </View>
  );
};

export default SetState;

const styles = StyleSheet.create({});
