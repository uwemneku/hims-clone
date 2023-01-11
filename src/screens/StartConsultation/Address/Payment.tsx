import { StyleSheet, Image, View } from "react-native";
import React from "react";
import QuestionnaireLayoutWithScrollView from "../components/QuestionLayoutWithScrollView";
import BaseText from "../../../components/Text";
import Button from "../../../components/Button";
import BaseTextInput from "../../../components/TextInput/BaseTextInput";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import { addOpacity } from "../../../utils";
import withStyle from "../../../components/withStyle";
import { useFormik } from "formik";
import * as yup from "yup";
import { images } from "../../../constants/images";

const validationSchema = yup.object().shape({
  cardNumber: yup.string(),
  cardDate: yup.string(),
});

type CardForm = RemoveIndex<yup.InferType<typeof validationSchema>>;

const Payment = () => {
  const { values, setFieldValue } = useFormik<Partial<CardForm>>({
    initialValues: {},
    validationSchema,
    onSubmit() {},
  });

  const handleDateChange = (key: keyof CardForm) => {
    let ref: NodeJS.Timeout;
    return (value: string) => {
      const newValue = value.replace(
        /^([0-9]{2})\/?([0-9]{1,2})?$/g,
        (_, i, j) => {
          return `${i}/${j || ""}`;
        }
      );
      //   clearTimeout(ref);
      setFieldValue(key, newValue);
      //   ref = setTimeout(() => {
      //   });
    };
  };
  return (
    <QuestionnaireLayoutWithScrollView>
      <BaseText size="h1" align="center">
        Almost done, John!
      </BaseText>
      <Divider size="xl" />
      <BaseText lineHeight={20} align="center" color={Color.gray}>
        Let's save your payment information, Next up we'll get you connected
        with a provider.
      </BaseText>
      <Divider size="xl" />
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={{ flex: 1 }}>
            <BaseText size="h2">Therapy</BaseText>
            <Divider />
            <BaseText color={Color.darkGray}>
              Confidential, 50 minute online sessions
            </BaseText>
          </View>
          <Divider dir="horizontal" />
          <Image style={styles.cardImage} source={images.boy_doctor} />
        </View>
        <Divider size="xl" />
        <CardDetails style={styles.line}>
          <BaseText size="h3">Per session</BaseText>
          <BaseText size="h3">$99</BaseText>
        </CardDetails>
        <CardDetails>
          <BaseText size="h3">Due Now</BaseText>
          <BaseText size="h3">$0</BaseText>
        </CardDetails>
      </View>
      <View style={styles.greenCard}>
        <BaseText align="center" color={Color.green}>
          You will be charged after each session
        </BaseText>
      </View>
      <Divider size="xl" />
      <BaseText>Pay with credit or debit card</BaseText>
      <Divider size="l" />
      <View style={styles.input}>
        <BaseTextInput
          containerStyle={{ borderColor: "transparent", flex: 1 }}
          placeholder="Card number"
          keyboardType="number-pad"
        />
        <BaseTextInput
          containerStyle={{ borderColor: "transparent", flex: 0.5 }}
          placeholder="MM/YY"
          keyboardType="number-pad"
          maxLength={5}
          onChangeText={handleDateChange("cardDate")}
          value={values.cardDate}
        />
      </View>
      <Divider size="xl" />
      <Button style={{ text: { letterSpacing: 5 } }} label="Pay $0 today" />
    </QuestionnaireLayoutWithScrollView>
  );
};

const CardDetails = withStyle(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 20,
});

export default Payment;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.lightGray,
  },
  card: {
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 10,
    zIndex: 1,
  },
  cardTop: {
    flexDirection: "row",
  },
  cardImage: {
    width: 40,
    height: 80,
    borderRadius: 10,
    borderColor: Color.lightGray,
    borderWidth: 5,
  },
  greenCard: {
    backgroundColor: addOpacity(Color.green, 0.2),
    padding: 20,
    alignSelf: "center",
    zIndex: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "95%",
  },
  line: {
    borderColor: Color.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
