import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/Button";
import Color from "../../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<OnboardingStackParamList, "SetState">;

const SetState = ({ navigation, route }: Props) => {
  const [DOB, setDOB] = useState("");
  const displayedText = DOB.replace(/ /g, "");

  const handleButtonClick = () => {
    navigation.navigate("SetDateOfBirth");
  };

  return (
    <View style={{ padding: 20 }}>
      <BaseTextInput
        value={displayedText}
        onChangeText={setDOB}
        placeholder="Date of Birth (MM-DD-YYYY)"
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
