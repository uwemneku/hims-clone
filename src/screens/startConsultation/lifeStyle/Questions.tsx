import { StyleSheet } from "react-native";
import React from "react";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import MultiStepQuestionScreen from "../components/QuestionLayout/MultiStepQuestionScreen";
import { questions_lifestyle } from "./data";

type Props = StartingVisitStackScreenProps<"LifeStyleQuestion">;
const LifeStyleQuestions = ({ navigation }: Props) => {
  const navigate = () => {
    navigation.navigate("ContactIntro");
  };
  return (
    <MultiStepQuestionScreen
      allQuestions={questions_lifestyle}
      onRequestNextScreen={navigate}
      stage="LIFESTYLE"
    />
  );
};

export default LifeStyleQuestions;

const styles = StyleSheet.create({});
