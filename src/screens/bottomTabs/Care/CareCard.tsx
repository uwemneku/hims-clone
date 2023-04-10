import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import BaseText from "../../../components/text";
import Divider from "../../../components/dividers";
import ZoomImageCard from "../../../components/Cards/zoomImageCard";
import Color from "../../../constants/colors";
import { addOpacity } from "../../../utils";

interface Props {
  title: string;
  details: string;
  badge?: string;
  textColor?: Color;
  gradient?: string[];
  image: ImageSourcePropType;
}

const CareCard = ({
  textColor = Color.white,
  title,
  badge,
  details,
  image,
  gradient = [Color.white, Color.white],
}: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={gradient}
    >
      <View style={{ flex: 1, padding: 15, justifyContent: "space-between" }}>
        <View>
          <BaseText color={textColor} size="h2">
            {title}
          </BaseText>
          <BaseText size="h3">{badge}</BaseText>
        </View>
        <Divider size="xl" />
        <BaseText color={addOpacity(textColor, 0.7)}>{details}</BaseText>
      </View>
      <View style={{ width: "30%" }}>
        <ZoomImageCard source={image} />
      </View>
    </LinearGradient>
  );
};

export default CareCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    height: 150,
    overflow: "hidden",
  },
});
