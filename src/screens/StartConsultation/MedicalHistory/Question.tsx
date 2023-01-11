import React from "react";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import MultiStepQuestionScreen from "../components/QuestionLayout/MultiStepQuestionScreen";
import { historyQuestion } from "./data";

type Props = StartingVisitStackScreenProps<"HistoryQuestion">;
const HistoryQuestion = ({ navigation }: Props) => {
  const handleSelect = () => {
    navigation.navigate("LifeStyleIntro");
  };

  return (
    <MultiStepQuestionScreen
      stage="History"
      allQuestions={historyQuestion}
      onRequestNextScreen={handleSelect}
    />
  );
};

export default HistoryQuestion;
