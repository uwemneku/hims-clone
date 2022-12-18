import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Divider from "../../components/Dividers";
import Button from "../../components/Button";
import Color from "../../constants/colors";
import BaseText from "../../components/Text";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <BaseText size="h1">Let's get your account set up</BaseText>
      <Divider size="l" />
      <BaseTextInput placeholder="Email" />
      <Divider size="l" />
      <BaseTextInput placeholder="password" secureTextEntry={true} />
      <Divider size="l" />
      <BaseTextInput placeholder="Confirm password" secureTextEntry={true} />
      <Divider size="xl" />
      <Button color={Color.black} label="Create account" />
      <Divider size="l" />
      <Button
        color={Color.lightGray}
        label="Already have an account? Sign in"
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
