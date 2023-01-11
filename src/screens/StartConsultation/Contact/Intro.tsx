import { StyleSheet } from "react-native";
import React from "react";
import QuestionnaireSectionIntro from "../components/QuestionnaireSectionIntro";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"ContactIntro">;
const ContactIntro = ({ navigation }: Props) => {
  const handleClick = () => navigation.navigate("ContactQuestion");
  return (
    <QuestionnaireSectionIntro
      title="Contact"
      details="Lets make a few connection before we finish"
      mode="CONTACT"
      onButtonClick={handleClick}
    />
  );
};

export default ContactIntro;

const styles = StyleSheet.create({});
