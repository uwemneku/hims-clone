import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { AccountStackScreenParamsList } from "../../types/Navigation";
import BottomTabScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import withDefaultValue from "../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import BaseText from "../../components/Text";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Divider from "../../components/Dividers";
import Button from "../../components/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import BackIcon from "../../components/Icon/BackIcon";
import DateInput from "../../components/TextInput/DateInput";
import Color from "../../constants/colors";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phoneNumber: yup.number().required("This field is required"),
  dob: yup
    .string()
    .matches(/\d\d-\d\d-\d\d\d\d/)
    .required("This field is required"),
});

type Form = ExtractFormikTypes<typeof validationSchema>;
type Props = StackScreenProps<AccountStackScreenParamsList, "contactInfo">;
const Contact = ({ navigation }: Props) => {
  const { errors, values, submitForm, setFieldValue, isValid } =
    useFormik<Form>({
      initialValues: {},
      validationSchema,
      onSubmit() {
        navigation.goBack();
      },
    });

  const getFormProps = (
    key: keyof Form
  ): ComponentProps<typeof BaseTextInput> => ({
    isError: Boolean(errors[key]),
    value: (values[key] || "").toString(),
    helperText: errors[key],
    onChangeText: (value) => {
      setFieldValue(key, value);
    },
  });
  return (
    <BottomTabScreenWrapper title="Contacts" leftIcon={LeftIcon}>
      <BaseText size="h1">Contact information</BaseText>
      <Divider size="xl" />
      <BaseTextInput
        placeholder="Legal First Name"
        textContentType="familyName"
        {...getFormProps("firstName")}
      />
      <Divider />
      <BaseTextInput
        placeholder="Legal Last Name"
        textContentType="givenName"
        {...getFormProps("lastName")}
      />
      <Divider />
      <BaseTextInput
        placeholder="Phone Number"
        keyboardType="number-pad"
        textContentType="telephoneNumber"
        {...getFormProps("phoneNumber")}
      />
      <Divider />
      <BaseTextInput
        placeholder="Email Address"
        keyboardType="email-address"
        textContentType="emailAddress"
        {...getFormProps("email")}
      />
      <Divider />
      <DateInput
        maxAge={18}
        placeholder="Date of Birth"
        onChange={(e) => {
          setFieldValue("dob", e);
        }}
        isError={Boolean(errors.dob)}
        helperText={errors.dob}
      />
      <Divider size="xl" />
      <Button
        color={isValid ? Color.black : Color.lightGray}
        label="Save"
        onPressIn={submitForm}
      />
    </BottomTabScreenWrapper>
  );
};
const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default Contact;

const styles = StyleSheet.create({});
