import { StyleSheet } from "react-native";
import React from "react";
import MultiQuestionLayout from "../components/MultiQuestionLayout";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"HistoryQuestion">;
const HistoryQuestion = ({ navigation }: Props) => {
  const handleSelect = () => navigation.navigate("HistoryQuestion_2");
  return (
    <MultiQuestionLayout
      stage="History"
      onSelect={() => {}}
      options={options}
      question="Which of the following best describes why you are seeking service today?"
      details="If you're unsure, pick the ones that feel closest to what you're experiencing"
    />
  );
};

const options = [
  "Generalized anxiety (e.g persistent, general worry)",
  "Depression (e.g depressed mood or loss of interest in activities)",
  "Panic attacks",
  "Insomnia",
  "Stress 0r burnout",
  "Other",
  "I'm not sure",
];
export default HistoryQuestion;

const styles = StyleSheet.create({});
