import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFormik } from "formik";
import * as yup from "yup";
import { AntDesign } from "@expo/vector-icons";
import QuestionnaireLayoutWithScrollView from "../components/QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "../components/QuestionnaireGradientText";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import BaseTextInput from "../../../components/TextInput/BaseTextInput";
import withStyle from "../../../utils/withStyle";
import Color from "../../../constants/colors";
import Button from "../../../components/Button";
import DropDown from "../../../components/Dropdown";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

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
  terms: yup.boolean(),
});

type FormInfoType = RemoveIndex<yup.InferType<typeof validationSchema>>;
type Props = StartingVisitStackScreenProps<"AddressDetails">;
const Details = ({ navigation }: Props) => {
  const { submitForm, errors, setFieldValue, values } = useFormik<
    Partial<FormInfoType>
  >({
    initialValues: {},
    onSubmit(values) {
      navigation.navigate("ConfirmAddressDetails");
    },
    validationSchema,
  });

  const getInputProps = (
    key: keyof Omit<FormInfoType, "terms">
  ): PickFromComponentProps<
    typeof BaseTextInput,
    "isError" | "onChangeText" | "helperText" | "value"
  > => ({
    isError: Boolean(errors[key]),
    onChangeText(text) {
      setFieldValue(key, text);
    },
    helperText: errors[key],
    value: values[key],
  });

  const handleTermsPress = () => setFieldValue("terms", !values.terms);
  const handleDropDownSelect = (selectedItem: string) => () => {
    //Todo: find a better implementation without the non nullable exclamation point
    getInputProps("state").onChangeText!(selectedItem);
  };

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
      <DropDown
        data={["Sample 1", "Sample 2", "Sample 3"]}
        renderItem={(i) => (
          <BaseText
            onPress={handleDropDownSelect(i)}
            style={styles.dropDownText}
            size="h2"
            align="center"
          >
            {i}
          </BaseText>
        )}
        closeOnSelect
        keyExtractor={(i) => i}
        value={values.state}
        placeholder="State"
        inputProps={{ containerStyle: { backgroundColor: Color.white } }}
      />
      <Divider />
      <AddressInput
        placeholder="Zip"
        keyboardType="number-pad"
        {...getInputProps("zip")}
      />

      <Divider size="xl" />
      <Button onPress={submitForm} label="Save and Continue" />
      <Divider size="xl" />
      <TouchableOpacity style={styles.terms} onPress={handleTermsPress}>
        <View style={styles.box}>
          {values.terms && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Divider dir="horizontal" size="l" />
        <BaseText size="h3" style={{ flex: 1 }}>
          Text me updates about Hims products and services
        </BaseText>
      </TouchableOpacity>
      <Divider size="l" />
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

const styles = StyleSheet.create({
  terms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: 24,
    height: 24,
    borderColor: Color.lightGray,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownText: {
    paddingVertical: 10,
  },
});
