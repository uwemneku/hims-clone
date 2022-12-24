import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import BaseText from "../../../../components/Text";
import Color from "../../../../constants/colors";
import Divider from "../../../../components/Dividers";
import QuestionnaireLayoutWithScrollView from "../QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "../QuestionnaireGradientText";
import { useRef } from "react";

interface BaseQuestionLayoutProps {
  stage: string;
  question: string;
  details?: string;
  children: JSX.Element;
}

const BaseQuestionLayout = ({
  details,
  question,
  stage,
  children,
}: BaseQuestionLayoutProps) => {
  const ref = useRef<ScrollView>(null);
  ref.current?.scrollTo({ y: 0 });
  return (
    <QuestionnaireLayoutWithScrollView ref={ref}>
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
      {children}
    </QuestionnaireLayoutWithScrollView>
  );
};

export default BaseQuestionLayout;
