import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import GradientText from "../../../components/Text/GradientText";
import BaseText from "../../../components/Text";
import Button from "../../../components/Button";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import QuestionLayoutWithScrollView from "./QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "./QuestionnaireGradientText";
import { useRef } from "react";

interface Props {
  options: string[];
  onSelect(item: string): void;
  stage: string;
  question: string;
  details?: string;
}

const MultiQuestionLayout = ({
  onSelect,
  options,
  details,
  question,
  stage,
}: Props) => {
  const ref = useRef<ScrollView>(null);
  ref.current?.scrollTo({ y: 0 });
  return (
    <QuestionLayoutWithScrollView ref={ref}>
      <QuestionnaireGradientText size="small">
        {stage}
      </QuestionnaireGradientText>
      <Divider size="l" />
      <BaseText align="center" size="h1">
        {question}
      </BaseText>
      {details && (
        <>
          <Divider />
          <BaseText align="center" color={Color.darkGray}>
            {details}
          </BaseText>
        </>
      )}
      <Divider size="xl" />
      <View>
        {options.map((i) => {
          const handleClick = () => onSelect(i);
          return (
            <TouchableOpacity
              onPress={handleClick}
              key={i}
              style={styles.options}
            >
              <BaseText>{i}</BaseText>
            </TouchableOpacity>
          );
        })}
      </View>
    </QuestionLayoutWithScrollView>
  );
};

export default MultiQuestionLayout;

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", maxWidth: 500 },
  options: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Color.white,
    borderColor: Color.lightGray,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
