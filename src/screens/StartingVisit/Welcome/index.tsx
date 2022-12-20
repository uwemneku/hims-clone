import { StyleSheet, Image, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import ScreenWithHeading from "../../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import Button from "../../../components/Button";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import { images } from "../../../../assets";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import LoadingAnimation from "./LoadingAnimation";

type Props = StartingVisitStackScreenProps<"welcome">;

const Welcome = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { height } = useWindowDimensions();
  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.replace("QuestionnaireIntro");
    }, 1000);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <ScreenWithHeading style={{}} hideBackButton screenTitle="Sign up">
      <View
        style={[
          { height: Math.max(height * 0.55, 300), backgroundColor: "red" },
          styles.image,
        ]}
      >
        <Image
          source={images.startVisit}
          resizeMethod="scale"
          resizeMode="cover"
          style={{ width: "100%" }}
        />
      </View>
      <Divider size="l" />
      <BaseText size="h1">You're almost there</BaseText>
      <Divider />
      <BaseText color={Color.gray}>
        We'll need to gather some information from you so a provider can
        evaluate you for treatment
      </BaseText>
      <Divider size="xl" />
      <Button onPress={handleButtonClick} label="Start Visit" />
    </ScreenWithHeading>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    overflow: "hidden",
  },
});
