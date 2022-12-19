import { StyleSheet, View } from "react-native";
import React from "react";
import ScreenWithHeading from "../../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import Sections, { SectionList } from "./Sections";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../../../types/Navigation";

type Props = NativeStackScreenProps<OnboardingStackParamList, "BookAVisit">;

const BookVisit = ({ navigation }: Props) => {
  const handleClick = (i: string) => navigation.navigate("SignUp");
  return (
    <ScreenWithHeading screenTitle="Book a Visit">
      <BaseText size="h1" color={Color.purple}>
        A whole new level of care. Get 24/7 Concierge and direct access to
        medical providers-all with treatment.
      </BaseText>
      {data.map((i) => (
        <View style={styles.sections} key={i.title}>
          <Sections onItemClick={handleClick} title={i.title} list={i.list} />
          <View />
        </View>
      ))}
    </ScreenWithHeading>
  );
};
const data: SectionList[] = [
  {
    title: "Sexual Health",
    list: ["Erectile dysfunction", "Premature ejeculation", "Genital herpes"],
  },
  {
    title: "Hair & Skin",
    list: ["Hair Loss", "Acne", "Anti-aging"],
  },
  {
    title: "Mental Health",
    list: ["Anxiety & depression", "Online therapy", "Performance anxiety"],
  },
  {
    title: "Everyday Health",
    list: [
      "Primary care",
      "Cold sores",
      "Infections",
      "Allergies",
      "Cold & Flu",
    ],
  },
];
export default BookVisit;

const styles = StyleSheet.create({
  sections: {
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: Color.lightGray,
  },
});
