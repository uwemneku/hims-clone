import { StyleSheet, View } from "react-native";
import { useState } from "react";
import React from "react";
import DropDown from "../../components/Dropdown";
import BaseText from "../../components/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScreenWithHeading from "../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import Divider from "../../components/Dividers";
import PasswordInput from "../../components/TextInput/PasswordInput";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import Color from "../../constants/colors";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});

type LoginFormValues = { email: string; password: string };

const Login = () => {
  const { errors, values, submitForm } = useFormik<LoginFormValues>({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit() {},
  });
  return (
    <ScreenWithHeading screenTitle="Log in">
      <BaseText size="h1">Welcome back!</BaseText>
      <Divider size="xl" />
      <BaseTextInput
        helperText={errors.email}
        isError={Boolean(errors.email)}
        value={values.email}
        placeholder="Email"
      />
      <Divider size="l" />
      <PasswordInput
        value={values.password}
        helperText={errors.password}
        isError={Boolean(errors.password)}
        placeholder="password"
      />
      <Divider size="xl" />
      <BaseText color={Color.brown}>Forgot password?</BaseText>
      <Divider size="xl" />
      <Button onPress={submitForm} label="Log in" />
    </ScreenWithHeading>
  );
};

export default Login;

const styles = StyleSheet.create({});
