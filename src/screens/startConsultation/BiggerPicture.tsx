import { StyleSheet } from "react-native";
import React from "react";
import IntroScreenLayout from "./components/IntroScreenLayout";
import Button from "../../components/button";
import BaseText from "../../components/text";
import Color from "../../constants/colors";
import { images } from "../../constants/images";
import Divider from "../../components/dividers";
import { StartingVisitStackScreenProps } from "../../types/Navigation";

type Props = StartingVisitStackScreenProps<"BiggerPicture">;
const BiggerPicture = ({ navigation }: Props) => {
  const handleButtonClick = () => navigation.navigate("MedicalProfileIntro");
  return (
    <IntroScreenLayout
      backgroundImage={images.medHistory}
      backgroundOpacity={0.5}
      textView={
        <>
          <BaseText color={Color.white}>03/05</BaseText>
          <Divider />
          <BaseText align="center" color={Color.white} size="h1">
            The bigger picture
          </BaseText>
          <Divider />
          <BaseText align="center" color={Color.white}>
            A few questions about your medical history and health
          </BaseText>
        </>
      }
      button={
        <Button
          color={Color.white}
          label="Continue"
          onPress={handleButtonClick}
        />
      }
    />
  );
};

export default BiggerPicture;

const styles = StyleSheet.create({});
