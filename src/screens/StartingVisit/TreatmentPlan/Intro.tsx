import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import QuestionnaireGradientText from "../components/QuestionnaireGradientText";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import { images } from "../../../../assets";
import Button from "../../../components/Button";
import Divider from "../../../components/Dividers";
import { LinearGradient } from "expo-linear-gradient";
import { questionnaireGradient } from "../components/data";

const Intro = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <QuestionnaireGradientText size="title">
          Your Treatment Plan
        </QuestionnaireGradientText>
        <BaseText size="h3">Get Support For:</BaseText>
        <Divider />
        <LinearGradient
          colors={questionnaireGradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <BaseText color={Color.white}>Generalized anxiety</BaseText>
        </LinearGradient>
        <Divider size="xl" />
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.image}>
              <Image
                source={images.boy_doctor}
                resizeMethod="resize"
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardTitle}>
              <BaseText size="h1">Therapy</BaseText>
              <Divider size="xs" />
              <BaseText color={Color.darkGray}>$99/session</BaseText>
            </View>
            <Button
              label="Continue"
              color={Color.lightGray}
              variant="outlined"
              style={{ text: styles.button }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
  },
  header: {
    backgroundColor: Color.lightGray,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Color.white,
    elevation: 2,
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: Color.lightGray,
  },
  image: {
    width: 100,
    height: "60%",
    borderRadius: 10,
    borderWidth: 6,
    borderColor: Color.white,
    backgroundColor: Color.lightGray,
  },
  button: {
    color: Color.darkGray,
  },
  gradientButton: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 20,
  },
});
