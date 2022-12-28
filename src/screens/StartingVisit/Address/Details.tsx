import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import QuestionnaireLayoutWithScrollView from "../components/QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "../components/QuestionnaireGradientText";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import BaseTextInput from "../../../components/TextInput/BaseTextInput";
import withStyle from "../../../components/withStyle";
import Color from "../../../constants/colors";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  first_name: yup.string().required("This field is required"),
  last_name: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  phone: yup.string().required("This field is required"),
  address: yup.string(),
  suite: yup.string(),
  city: yup.string(),
  state: yup.string(),
  zip: yup.string(),
});

type J = RemoveIndex<yup.InferType<typeof validationSchema>>;

const Details = () => {
  const { submitForm, errors, setFieldValue } = useFormik<Partial<J>>({
    initialValues: {},
    onSubmit() {},
    validationSchema,
  });

  const getInputProps = (
    key: keyof J
  ): ComponentProps<typeof BaseTextInput> => ({
    isError: Boolean(errors[key]),
    onChangeText(text) {
      setFieldValue(key, text);
    },
    helperText: errors[key],
  });

  return (
    <QuestionnaireLayoutWithScrollView>
      <QuestionnaireGradientText size="small">
        Details
      </QuestionnaireGradientText>
      <Divider size="m" />
      <BaseText size="h1" align="center">
        Address details
      </BaseText>
      <Divider size="l" />
      <AddressInput
        placeholder="First Name (Legal)"
        {...getInputProps("first_name")}
      />
      <Divider />
      <AddressInput
        placeholder="Last Name (Legal)"
        {...getInputProps("last_name")}
      />
      <Divider />
      <AddressInput placeholder="Country" {...getInputProps("country")} />
      <Divider />
      <AddressInput
        placeholder="Phone"
        keyboardType="number-pad"
        {...getInputProps("phone")}
      />
      <Divider />
      <AddressInput
        placeholder="Street Address"
        {...getInputProps("address")}
      />
      <Divider />
      <AddressInput placeholder="Apt/Suite" {...getInputProps("suite")} />
      <Divider />
      <AddressInput placeholder="City" {...getInputProps("city")} />
      <Divider />
      <AddressInput placeholder="State" {...getInputProps("state")} />
      <Divider />
      <AddressInput
        placeholder="Zip"
        keyboardType="number-pad"
        {...getInputProps("zip")}
      />

      <Divider size="xl" />
      <Button onPress={submitForm} label="Save and Continue" />
      <Divider size="xl" />
      <BaseText color={Color.gray} lineHeight={25}>
        By checking the option "Text me updates about Hims products and
        services!". I agree to receive marketing text messages rom Hims
        Promotional Alerts at the number provided above. Messages may be sent
        using an automatic telephone dialing system. Consent is not required as
        a condition of purchase. Message and data rates may apply. Message
        frequency varies. Send HELP for help or STOP to cancel. Messages may
        include shopping cart reminders.{" "}
        <BaseText color={Color.darkGray}>
          Privacy policy. SMS Terms of Service
        </BaseText>
      </BaseText>
    </QuestionnaireLayoutWithScrollView>
  );
};

const AddressInput = withStyle(BaseTextInput, { backgroundColor: Color.white });

export default Details;

const styles = StyleSheet.create({});
