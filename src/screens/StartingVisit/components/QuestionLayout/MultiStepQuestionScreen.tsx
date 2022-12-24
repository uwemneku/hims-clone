import { BackHandler } from "react-native";
import React, { ComponentProps, useCallback, useRef, useState } from "react";
import QuestionWithOptions from "./QuestionWithOptions";
import { useFocusEffect } from "@react-navigation/native";
import { MultiStepQuestion } from "./types";
import Animated, {
  FadeOut,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";

interface Props {
  stage: ComponentProps<typeof QuestionWithOptions>["stage"];
  onRequestNextScreen(answers: Record<number, string>): void;
  allQuestions: MultiStepQuestion[];
}
const MultiStepQuestionScreen = ({
  onRequestNextScreen,
  allQuestions,
  stage,
}: Props) => {
  const [currentNumber, setNumberQuestion] = useState(0);
  const prev = useRef(currentNumber);
  const answers = useRef<Record<number, string>>({});

  const isNext = currentNumber >= prev.current;
  prev.current = currentNumber;

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
  if (allQuestions.length === 0) return null;

  return (
    <Animated.View
      style={{ flex: 1 }}
      entering={isNext ? SlideInDown : SlideInUp}
      exiting={FadeOut}
      key={currentNumber}
    >
      <QuestionWithOptions
        stage={stage}
        onSelect={handleSelect}
        key={currentQuestion.question}
        question={currentQuestion.question}
        details={currentQuestion.details}
        {...(currentQuestion.mode === "options"
          ? { options: currentQuestion.options, mode: "options" }
          : { placeHolder: currentQuestion.placeHolder, mode: "textInput" })}
      />
    </Animated.View>
  );
};

export default MultiStepQuestionScreen;
