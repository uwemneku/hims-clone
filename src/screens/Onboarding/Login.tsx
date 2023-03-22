import { StyleSheet } from "react-native";
import React from "react";
import BaseText from "../../components/Text";
import ScreenWithHeading from "../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import Divider from "../../components/Dividers";
import PasswordInput from "../../components/TextInput/PasswordInput";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import Color from "../../constants/colors";
import { OnboardingStackScreenProps } from "../../types/Navigation";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .trim()
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});

//TODO: move this to types
type LoginFormValues = { email: string; password: string };
type Props = OnboardingStackScreenProps<"Login">;

const Login = ({ navigation }: Props) => {
  const { errors, values, submitForm, setFieldValue } =
    useFormik<LoginFormValues>({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit() {
        navigation.navigate("HomeBottomTabs", { screen: "home" });
      },
    });
  const handleChange = (key: keyof LoginFormValues) => (value: string) => {
    setFieldValue(key, value);
  };
  return (
    <ScreenWithHeading screenTitle="Log in">
      <BaseText size="h1">Welcome back!</BaseText>
      <Divider size="xl" />
      <BaseTextInput
        helperText={errors.email}
        isError={Boolean(errors.email)}
        value={values.email}
        onChangeText={handleChange("email")}
        placeholder="Email"
      />
      <Divider size="l" />
      <PasswordInput
        value={values.password}
        helperText={errors.password}
        onChangeText={handleChange("password")}
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
