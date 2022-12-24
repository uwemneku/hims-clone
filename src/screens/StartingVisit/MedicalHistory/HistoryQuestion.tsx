import React from "react";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import MultiStepQuestionScreen from "../components/MultiStepQuestionScreen";

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

const historyQuestion: {
  question: string;
  details?: string;
  options: string[];
}[] = [
  {
    question:
      "Which of the following best describes why you are seeking service today?",
    details:
      "If you're unsure, pick the ones that feel closest to what you're experiencing",
    options: [
      "Generalized anxiety (e.g persistent, general worry)",
      "Depression (e.g depressed mood or loss of interest in activities)",
      "Panic attacks",
      "Insomnia",
      "Stress 0r burnout",
      "Other",
      "I'm not sure",
    ],
  },
  {
    question: "Do you currently have any desire to harm yourself or others",
    details: "",
    options: ["Yes", "No"],
  },
  {
    question: "What is your gender?",
    details:
      "We ask this question of all of our patients to ensure that we provide you with safe and effective care. We are inclusive of all people",
    options: [
      "Man",
      "Woman",
      "Transgender man",
      "Transgender woman",
      "Genderqueer/non-binary",
      "Agender",
    ],
  },
  {
    question: "What was your sex assigned at birth?",
    details: "For example, on your original birth certificate.",
    options: ["Male", "Female"],
  },
  {
    question:
      "Do you have or have you ever had any of the following medical conditions",
    options: [
      "Cancer or history of cancer",
      "Diabetes",
      "Enlarged prostate(benign prostate hyperplasia",
      "Glaucoma or family history of narrow angle glaucoma",
      "Hair loss",
      "Heart condition (e.g. heart failure)",
      "Liver disease",
      "Migraines",
    ],
  },
  {
    question:
      "Do you have any allergies to medication, dyes, food, or anything else ?",
    options: ["Yes", "No"],
  },
];
export default HistoryQuestion;
