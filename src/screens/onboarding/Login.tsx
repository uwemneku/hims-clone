import { StyleSheet } from "react-native";
import React from "react";
import BaseText from "../../components/text";
import Divider from "../../components/dividers";
import PasswordInput from "../../components/textInput/PasswordInput";
import BaseTextInput from "../../components/textInput/BaseTextInput";
import Button from "../../components/button";
import { useFormik } from "formik";
import * as yup from "yup";
import Color from "../../constants/colors";
import { OnboardingStackScreenProps } from "../../types/Navigation";
import HeadingScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import withDefaultValue from "../../utils/withDefaultValue";
import BackIcon from "../../components/icon/backIcon";

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
      initialValues: { email: "sample@g.com", password: "dffd" },
      validationSchema,
      onSubmit() {
        navigation.navigate("HomeBottomTabs", { screen: "home" });
      },
    });
  const handleChange = (key: keyof LoginFormValues) => (value: string) => {
    setFieldValue(key, value);
  };
  return (
    <HeadingScreenWrapper showHeading leftIcon={BackButton} title="Log in">
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
        placeholder="Password"
      />
      <Divider size="xl" />
      <BaseText color={Color.brown}>Forgot password?</BaseText>
      <Divider size="xl" />
      <Button onPress={submitForm} label="Log in" />
    </HeadingScreenWrapper>
  );
};

const BackButton = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default Login;

const styles = StyleSheet.create({});
