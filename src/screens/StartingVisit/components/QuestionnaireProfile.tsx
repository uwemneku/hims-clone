import { StyleSheet, View } from "react-native";
import React from "react";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import QuestionnaireGradientText from "./QuestionnaireGradientText";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../../components/Button";
import QuestionLayoutWithScrollView from "./QuestionLayoutWithScrollView";

interface Props {
  // mode: "history" | "lifestyle" | "contact";
  mode: typeof stages[number];
  title: string;
  details: string;
  onButtonClick(): void;
}

const QuestionnaireProfile = ({
  mode,
  details,
  title,
  onButtonClick,
}: Props) => {
  const currentIndex = stages.indexOf(mode);

  return (
    <QuestionLayoutWithScrollView>
      <View>
        <BaseText align="center" size="h1">
          {title}
        </BaseText>
        <Divider />
        <BaseText align="center" color={Color.gray}>
          {details}
        </BaseText>
        <Divider size="xl" />
        <View>
          {stages.map((i, index) => {
            return (
              <View key={i} style={styles.list}>
                <View style={styles.circle}>
                  {currentIndex >= index && (
                    <LinearGradient
                      colors={["#7685d0", "#70b8bb"]}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )}
                  <BaseText>{index + 1}</BaseText>
                </View>
                <View style={{ width: 100 }}>
                  <QuestionnaireGradientText size="small">
                    {i}
                  </QuestionnaireGradientText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <Divider size="m" />
      <Button onPress={onButtonClick} label="Continue" />
    </QuestionLayoutWithScrollView>
  );
};
const stages = ["HISTORY", "LIFESTYLE", "CONTACT"] as const;

export default QuestionnaireProfile;

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    position: "relative",
    overflow: "hidden",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
});
