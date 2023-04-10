import { StyleSheet } from "react-native";
import React, { ComponentProps } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { AccountStackScreenParamsList } from "../../types/Navigation";
import HeadingScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import withDefaultValue from "../../utils/withDefaultValue";
import BaseText from "../../components/text";
import BaseTextInput from "../../components/textInput/BaseTextInput";
import Divider from "../../components/dividers";
import Button from "../../components/button";
import * as yup from "yup";
import { useFormik } from "formik";
import BackIcon from "../../components/icon/backIcon";
import DateInput from "../../components/textInput/DateInput";
import Color from "../../constants/colors";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phoneNumber: yup
    .number()
    .required("This field is required")
    .typeError("Must be number"),
  dob: yup
    .string()
    .matches(/\d\d-\d\d-\d\d\d\d/, "Invalid date format")
    .required("This field is required")
    .typeError("Invalid format"),
});

type Form = ExtractFormikTypes<typeof validationSchema>;
type Props = StackScreenProps<AccountStackScreenParamsList, "contactInfo">;
const Contact = ({ navigation }: Props) => {
  const { errors, values, submitForm, setFieldValue, isValid, dirty } =
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
    <HeadingScreenWrapper title="Contacts" leftIcon={LeftIcon}>
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
        color={isValid && dirty ? Color.black : Color.lightGray}
        label="Save"
        onPressIn={submitForm}
      />
    </HeadingScreenWrapper>
  );
};
const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default Contact;
