import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import BaseTextInput from "../../../components/TextInput/BaseTextInput";
import Divider from "../../../components/Dividers";
import Button from "../../../components/Button";
import Color from "../../../constants/colors";
import BaseText from "../../../components/Text";
import ScreenWithHeading from "../../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFormik } from "formik";
import * as yup from "yup";
import PasswordInput from "../../../components/TextInput/PasswordInput";
import LoadingAnimation from "./LoadingAnimation";
import { OnboardingStackScreenProps } from "../../../types/Navigation";

type Props = OnboardingStackScreenProps<"SignUp">;

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Must be a minium of 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("This field is required"),
  acceptTerms: yup.boolean().oneOf([true]).required(),
});
type SignUpInfo = {
  email: string;
  password: string;
  confirm_password: string;
  acceptTerms: boolean;
};

const SignUp = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { values, setFieldValue, handleChange, errors, submitForm } =
    useFormik<SignUpInfo>({
      validationSchema,
      initialValues: {
        email: "",
        confirm_password: "",
        password: "",
        acceptTerms: false,
      },
      onSubmit() {
        setIsLoading(true);
        setTimeout(() => {
          navigation.navigate("SetNotifications");
        }, 500);
      },
    });
  const onTermsClick = () => setFieldValue("acceptTerms", !values.acceptTerms);
  const navigateToLogin = () => navigation.navigate("Login");

  return (
    <ScreenWithHeading screenTitle="Sign Up">
      <BaseText size="h1">Let's get your account set up</BaseText>
      <Divider size="l" />
      <BaseTextInput
        onChangeText={handleChange("email")}
        value={values.email}
        placeholder="Email"
        isError={Boolean(errors.email)}
        helperText={errors.email}
      />
      <Divider size="l" />
      <PasswordInput
        placeholder="password"
        onChangeText={handleChange("password")}
        value={values.password}
        isError={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Divider size="l" />
      <PasswordInput
        placeholder="Confirm password"
        onChangeText={handleChange("confirm_password")}
        value={values.confirm_password}
        isError={Boolean(errors.confirm_password)}
        helperText={errors.confirm_password}
      />
      <Divider size="xl" />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.terms} onPress={onTermsClick}>
          <View
            style={[
              styles.button,
              {
                backgroundColor: values.acceptTerms ? Color.green : Color.white,
                borderColor: errors.acceptTerms ? Color.red : Color.lightGray,
              },
            ]}
          >
            <AntDesign name="check" size={15} color={Color.white} />
          </View>
          <Divider dir="horizontal" size="xl" />

          {/* flex shrink wraps the text in small screens */}
          <Text style={{ flexShrink: 1, flexWrap: "wrap" }}>
            <BaseText color={Color.darkGray}>I agree to the</BaseText>
            <BaseText> Terms and Conditions </BaseText>
            <BaseText color={Color.darkGray}> and </BaseText>
            <BaseText>Telehealth Consent</BaseText>
          </Text>
        </TouchableOpacity>
        <Divider size="xl" />
        <Button
          onPress={submitForm}
          color={isLoading ? Color.gray : Color.black}
          label={isLoading ? <LoadingAnimation /> : "Create account"}
        />
        <Divider size="l" />
        <Button
          onPress={navigateToLogin}
          color={Color.lightGray}
          label={"Already have an account? Sign in"}
        />
      </View>
    </ScreenWithHeading>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  button: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: Color.lightGray,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
