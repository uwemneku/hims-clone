import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import MultiStepQuestionScreen from "../components/MultiStepQuestionScreen";

type Props = StartingVisitStackScreenProps<"LifeStyleQuestion">;
const LifeStyleQuestions = ({ navigation }: Props) => {
  const navigate = () => {
    navigation.navigate("ContactIntro");
  };
  return (
    <MultiStepQuestionScreen
      allQuestions={questions}
      onRequestNextScreen={navigate}
      stage="LIFESTYLE"
    />
  );
};

const questions: ComponentProps<
  typeof MultiStepQuestionScreen
>["allQuestions"] = [
  {
    question: "Do you smoke or use other tobacco product",
    details: "This includes smoking, chewing, or vaping",
    options: ["Yes", "No"],
  },
  {
    question:
      "How often in the last year have you had 5 or more alcoholic drinks (male), or 3 or more alcoholic drinks (female) on occasion?",
    options: [
      "Never",
      "A few times a year",
      "Once a month",
      "Once a week",
      "Daily or almost daily",
    ],
  },
  {
    question:
      "Excessive alcohol use can profoundly alter mood and behavior. Alcohol is a depressant and can lead to depression, anxiety, and increase stress. Alcohol has been linked to a higher risk of many cancers, including mouth, throat, liver, esophagus, colon, and breast cancers. Alcohol use can cause interactions with prescription medications as well.",
    options: ["Continue"],
  },
  {
    question:
      "Are you currently using any of the following recreational drugs?",
    details:
      "It is important for your provider to understand any potential interaction and impact on mental health symptoms",
    options: [
      "Cannabis, Marijuana, THC",
      "Cocaine",
      "Ectasy (MDMA)",
      "Opiates/opioids (Heroin, fentayl, oxyContin)",
      "Poppers",
      "None apply",
    ],
  },
];
export default LifeStyleQuestions;

const styles = StyleSheet.create({});
