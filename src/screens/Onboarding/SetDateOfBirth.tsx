import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/Button";
import Color from "../../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<OnboardingStackParamList, "SetState">;

const SetState = ({ navigation }: Props) => {
  const [DOB, setDOB] = useState("");
  const displayedText = DOB.replace(/ |[\D]|/g, "").replace(
    /([\d]{2})-?([\d]{1,2})?-?([\d]{1,4})?/g,
    (_, p1, p2, p3) => {
      return `${p1}${p2 ? `-${p2}` : ""}${p3 ? `-${p3}` : ""}`; // This allows the code to match dates of birth in the format dd, dd-mm, or dd-mm-yyyy.
    }
  );

  // Text format is correct when displayed text text is not empty and matches the format of MM-DD-YYYY or when the text input is empty
  const isTextFormatCorrect =
    (Boolean(displayedText.match(/[\d]{2}-[\d]{2}-[\d]{4}/g)) &&
      displayedText.length > 0) ||
    displayedText.length === 0;

  const handleButtonClick = () => {
    navigation.navigate("SetDateOfBirth");
  };

  return (
    <View style={{ padding: 20 }}>
      <BaseTextInput
        value={displayedText}
        onChangeText={setDOB}
        isError={!isTextFormatCorrect}
        placeholder="Date of Birth (MM-DD-YYYY)"
        keyboardType="number-pad"
        maxLength={10}
      />
      <Button
        onPress={handleButtonClick}
        label="hello"
        color={Color.black}
        style={{ text: { color: Color.white } }}
      />
    </View>
  );
};

export default SetState;

const styles = StyleSheet.create({});
