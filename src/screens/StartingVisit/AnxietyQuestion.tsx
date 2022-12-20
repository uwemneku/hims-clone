import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MultiQuestionLayout from "./components/MultiQuestionLayout";
import { StartingVisitStackScreenProps } from "../../types/Navigation";

type Props = StartingVisitStackScreenProps<"AnxietyQuestion">;
const AnxietyQuestion = ({ navigation }: Props) => {
  const handleOptionClick = () => navigation.navigate("QuestionnaireResult");
  return (
    <MultiQuestionLayout
      stage="Anxiety & Depression Symptoms"
      question=" Over the last 2 weeks, how often have you been bothered by little
      interest or pleasure in doing things?"
      onSelect={handleOptionClick}
      options={options}
    />
  );
};

const options = [
  "Not al all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

export default AnxietyQuestion;

const styles = StyleSheet.create({});
