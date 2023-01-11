import { StyleSheet, View } from "react-native";
import React from "react";
import BaseText from "../../components/Text";
import Button from "../../components/Button";
import IntroScreenLayout from "./components/IntroScreenLayout";
import Color from "../../constants/colors";
import GradientText from "../../components/Text/GradientText";
import { StartingVisitStackScreenProps } from "../../types/Navigation";
import { addOpacity } from "../../utils";
import Divider from "../../components/Dividers";
import QuestionnaireGradientText from "./components/QuestionnaireGradientText";

type Props = StartingVisitStackScreenProps<"HowItWorks">;

const HowItWorks = ({ navigation }: Props) => {
  const handleButtonClick = () => navigation.navigate("AnxietyQuestion");
  return (
    <IntroScreenLayout
      style={{ backgroundColor: addOpacity(Color.lightGray, 0.4) }}
      textView={
        <>
          <QuestionnaireGradientText size="small">
            Mental health questionnaire
          </QuestionnaireGradientText>
          <Divider />
          <BaseText size="h1">How it works</BaseText>
          <BaseText lineHeight={25} align="center" color={Color.gray}>
            The PHQ-8 and the GAD-7 are designed to quantify symptoms of
            depression and anxiety so you can set a marker for how you're
            feeling now, and track your progress in the future
          </BaseText>
        </>
      }
      button={<Button onPress={handleButtonClick} label="Continue" />}
    />
  );
};

export default HowItWorks;

const styles = StyleSheet.create({});
