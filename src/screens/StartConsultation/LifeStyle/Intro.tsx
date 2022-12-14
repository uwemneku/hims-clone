import { StyleSheet } from "react-native";
import React from "react";
import QuestionnaireSectionIntro from "../components/QuestionnaireSectionIntro";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"LifeStyleIntro">;
const LifeStyleIntro = ({ navigation }: Props) => {
  const handleButtonClick = () => navigation.navigate("LifeStyleQuestion");
  return (
    <QuestionnaireSectionIntro
      title="Section 2: Lifestyle"
      details="A few questions about non-prescription drug and alcohol use"
      mode="LIFESTYLE"
      onButtonClick={handleButtonClick}
    />
  );
};

export default LifeStyleIntro;

const styles = StyleSheet.create({});
