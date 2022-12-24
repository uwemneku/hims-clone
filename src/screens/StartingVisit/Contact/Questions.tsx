import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuestionWithOptions from "../components/QuestionLayout/QuestionWithOptions";
import {
  StartingVisitStackParamList,
  StartingVisitStackScreenProps,
} from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"ContactQuestion">;
const Questions = ({ navigation }: Props) => {
  const handleNextScreen = (answer: string) => {
    const nextScreen: keyof StartingVisitStackParamList =
      answer === "Yes" ? "EmergencyContactDetailsScreen" : "TreatmentPlan";
    navigation.navigate(nextScreen);
  };
  return (
    <QuestionWithOptions
      options={["Yes", "No"]}
      mode="options"
      question="In case of an emergency is there someone we can contact"
      stage="Contact"
      onSelect={handleNextScreen}
    />
  );
};

export default Questions;

const styles = StyleSheet.create({});
