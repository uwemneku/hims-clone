import { StyleSheet } from "react-native";
import React from "react";
import BaseText from "../../components/Text";
import Button from "../../components/button";
import IntroScreenLayout from "./components/IntroScreenLayout";
import Color from "../../constants/colors";
import { images } from "../../constants/images";
import Divider from "../../components/Dividers";
import { addOpacity } from "../../utils";
import { StartingVisitStackScreenProps } from "../../types/Navigation";

type Props = StartingVisitStackScreenProps<"QuestionnaireIntro">;

const QuestionnaireIntro = ({ navigation }: Props) => {
  const onButtonClick = () => navigation.navigate("HowItWorks");
  return (
    <IntroScreenLayout
      backgroundImage={images.questionIntroOne}
      backgroundOpacity={0.2}
      textView={
        <>
          <BaseText align="center" color={Color.white}>
            02/05
          </BaseText>
          <Divider />
          <BaseText
            align="center"
            size="h1"
            fontWeight="sofia_bold"
            color={Color.white}
          >
            Take a deeper look
          </BaseText>
          <Divider />
          <BaseText lineHeight={25} align="center" color={Color.white}>
            These simple questions can help you better understand your mental
            health today.
          </BaseText>
          <Divider size="s" />
          <BaseText align="center" color={Color.white}>
            You'll see your results in just a few screens
          </BaseText>
        </>
      }
      button={
        <Button
          onPress={onButtonClick}
          color={addOpacity(Color.white, 0.2)}
          style={{ text: { color: Color.white } }}
          label="Continue"
        />
      }
    />
  );
};

export default QuestionnaireIntro;

const styles = StyleSheet.create({});
