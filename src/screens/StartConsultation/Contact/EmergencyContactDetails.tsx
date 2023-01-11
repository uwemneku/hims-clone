import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MultiStepQuestionScreen from "../components/QuestionLayout/MultiStepQuestionScreen";
import QuestionWithOptions from "../components/QuestionLayout/QuestionWithOptions";
import BaseQuestionLayout from "../components/QuestionLayout/BaseQuestionLayout";
import BaseTextInput from "../../../components/TextInput/BaseTextInput";
import { TextInput } from "react-native-gesture-handler";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import AppFonts from "../../../constants/fonts";
import Button from "../../../components/Button";
import Divider from "../../../components/Dividers";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"EmergencyContactDetailsScreen">;
const EmergencyContactDetails = ({ navigation }: Props) => {
  const [contact, setContact] = useState("");
  const handleNavigation = () => {
    navigation.navigate("TreatmentPlan");
  };
  return (
    <BaseQuestionLayout
      stage="Contact"
      question="Please provide their name, their relationship to you, and their phone number"
    >
      <>
        <View style={styles.container}>
          {contact === "" && (
            <BaseText
              style={styles.placeholder}
              size="h1"
              color={Color.lightGray}
              align="center"
            >
              Enter your response
            </BaseText>
          )}
          <TextInput onChangeText={setContact} multiline style={styles.input} />
        </View>
        <Divider size="xl" />
        <Button label="Continue" onPress={handleNavigation} />
      </>
    </BaseQuestionLayout>
  );
};

export default EmergencyContactDetails;

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    zIndex: 2,
    textAlign: "center",
    fontSize: 40,
    fontFamily: AppFonts.sofia_bold,
  },
  placeholder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    textAlignVertical: "center",
  },
  container: {
    position: "relative",
    alignItems: "center",
  },
});
