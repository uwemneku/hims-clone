import { StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import QuestionnaireGradientText from "../components/QuestionnaireGradientText";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import { images } from "../../../constants/images";
import Button from "../../../components/Button";
import Divider from "../../../components/Dividers";
import { LinearGradient } from "expo-linear-gradient";
import { questionnaireGradient } from "../components/data";
import { cardData } from "./data";
import { Ionicons } from "@expo/vector-icons";
import Animated, { SlideInDown } from "react-native-reanimated";
import LoadingAnimationScreen from "../components/LoadingAnimation";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"TreatmentPlan">;

const Intro = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = () => navigation.navigate("AddressDetails");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading)
    return <LoadingAnimationScreen title="Personalizing your treatment" />;
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
        <Animated.View entering={SlideInDown} style={styles.card}>
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
            <View>
              {cardData.map((item) => (
                <View key={item.title} style={styles.cardList}>
                  <Ionicons name={item.iconName} size={24} color={Color.gray} />
                  <Divider size="l" dir="horizontal" />
                  <View style={{ flex: 1 }}>
                    <BaseText>{item.title}</BaseText>
                    <Divider size="s" />
                    <BaseText lineHeight={25} color={Color.darkGray}>
                      {item.details}
                    </BaseText>
                  </View>
                </View>
              ))}
            </View>
            <Divider size="xl" />
            <Button
              label="Continue"
              onPress={navigate}
              color={Color.lightGray}
              variant="outlined"
              style={{ text: styles.button }}
            />
            <Divider size="xl" />
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 150,
  },
  header: {
    backgroundColor: Color.lightGray,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Color.white,
    elevation: 2,
    maxWidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: Color.lightGray,
  },
  cardList: {
    padding: 10,
    flexDirection: "row",
    marginVertical: 10,
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
