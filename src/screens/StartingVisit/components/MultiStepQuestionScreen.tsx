import { BackHandler } from "react-native";
import React, { ComponentProps, useCallback, useRef, useState } from "react";
import QuestionWithOptions from "./QuestionLayout/QuestionWithOptions";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  stage: ComponentProps<typeof QuestionWithOptions>["stage"];
  onRequestNextScreen(answers: Record<number, string>): void;
  allQuestions: {
    question: string;
    details?: string;
    options: string[];
  }[];
}
const MultiStepQuestionScreen = ({
  onRequestNextScreen,
  allQuestions,
  stage,
}: Props) => {
  const [currentNumber, setNumberQuestion] = useState(0);
  const answers = useRef<Record<number, string>>({});

  const isFirstQuestion = currentNumber === 0;
  const isLastQuestion = currentNumber === allQuestions.length - 1;
  const currentQuestion = allQuestions[currentNumber];

  const handleSelect = (i: string) => {
    answers.current[currentNumber] = i; // save answer
    if (isLastQuestion) {
      onRequestNextScreen(answers.current);
    } else {
      navigate("next");
    }
  };

  const navigate = (dir: "next" | "prev") => {
    setNumberQuestion((prev) => {
      const diff = dir === "next" ? 1 : -1;
      return prev + diff;
    });
  };

  useFocusEffect(
    useCallback(() => {
      const handlePrevious = () => {
        if (isFirstQuestion) return false;
        navigate("prev");
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", handlePrevious);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handlePrevious);
      };
    }, [isFirstQuestion])
  );

  return (
    <QuestionWithOptions
      stage={stage}
      onSelect={handleSelect}
      options={currentQuestion.options}
      key={currentQuestion.question}
      question={currentQuestion.question}
      details={currentQuestion.details}
    />
  );
};

export default MultiStepQuestionScreen;
