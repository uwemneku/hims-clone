import { StyleSheet } from "react-native";
import React from "react";
import QuestionnaireSectionIntro from "../components/QuestionnaireSectionIntro";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"MedicalProfileIntro">;
const MedicalProfileIntro = ({ navigation }: Props) => {
  const handleButtonClick = () => navigation.navigate("HistoryQuestion");
  return (
    <QuestionnaireSectionIntro
      title="Medical Profile"
      details="Understanding your medical history and important health details"
      mode="HISTORY"
      onButtonClick={handleButtonClick}
    />
  );
};

export default MedicalProfileIntro;

const styles = StyleSheet.create({});
