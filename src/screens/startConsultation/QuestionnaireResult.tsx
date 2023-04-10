import { StyleSheet, View } from "react-native";
import React from "react";
import BaseText from "../../components/text";
import Button from "../../components/button";
import Color from "../../constants/colors";
import QuestionnaireLayoutWithScrollView from "./components/QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "./components/QuestionnaireGradientText";
import Divider from "../../components/dividers";
import { StartingVisitStackScreenProps } from "../../types/Navigation";

type Props = StartingVisitStackScreenProps<"QuestionnaireResult">;

const QuestionnaireResult = ({ navigation }: Props) => {
  const handleButtonClick = () => navigation.navigate("BiggerPicture");
  return (
    <QuestionnaireLayoutWithScrollView>
      <QuestionnaireGradientText size="small">
        Questionnaire
      </QuestionnaireGradientText>
      <Divider size="l" />
      <BaseText size="h1" align="center">
        Your Results
      </BaseText>
      <Divider size="xl" />
      <BaseText align="center" color={Color.gray}>
        Now that you've set your baseline, you're one step closer to getting
        support to help you feel your best
      </BaseText>
      <View>
        {result.map((i) => {
          return (
            <View style={styles.section} key={i.title}>
              <QuestionnaireGradientText size="title">
                {i.title}
              </QuestionnaireGradientText>
              <BaseText align="center" size="h3">
                {i.subTitle}
              </BaseText>
              {i.list.map((i) => (
                <BaseText
                  style={{ paddingVertical: 10 }}
                  color={Color.gray}
                  align="center"
                  key={i}
                >
                  {i}
                </BaseText>
              ))}
            </View>
          );
        })}
      </View>
      <Divider size="xl" />
      <Button
        onPress={handleButtonClick}
        label={"Continue"}
        color={Color.lightGray}
      />
      <Divider size="xl" />
    </QuestionnaireLayoutWithScrollView>
  );
};

const result: { title: string; subTitle: string; list: string[] }[] = [
  {
    title: "Minimal Depression: 03/24",
    subTitle: "Depression can feel like:",
    list: ["Poor appetite", "Trouble concentrating", "Moving slowly"],
  },
  {
    title: "Mild Anxiety: 07/21",
    subTitle: "Anxiety can feel like:",
    list: [
      "Feeling anxious/on edge",
      "Can't help worrying",
      "Constant worrying",
    ],
  },
];
export default QuestionnaireResult;

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
});
