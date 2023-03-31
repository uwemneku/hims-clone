import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../../components/Dividers";
import ProductCard from "../../../components/Cards/ProductCard";
import { images } from "../../../constants/images";
import BaseText from "../../../components/Text";
import Color from "../../../constants/colors";
import { addOpacity } from "../../../utils";
import { LinearGradient } from "expo-linear-gradient";
import ZoomImageCard from "../../../components/Cards/ZoomImageCard";

const data = [
  { image: images.skin },
  { image: images.tropical },
  { image: images.gummies },
  { image: images.sleep },
];
const AnnounceMent = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.container, { height: height * 0.75, minHeight: 600 }]}>
      <View style={styles.header}>
        <BaseText size="h2" color={Color.white}>
          Big News
        </BaseText>
        <BaseText size="h3" color={addOpacity(Color.white, 0.8)}>
          Welcome Grank to the hims family
        </BaseText>
      </View>
      <ZoomImageCard enable style={{ flex: 1 }} source={images.announcement} />
      <LinearGradient
        end={{ x: 0.5, y: 0.3 }}
        colors={[addOpacity(Color.black, 0), addOpacity(Color.black, 1)]}
        style={{ paddingVertical: 15, marginTop: "-30%" }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {data.map((_, i) => (
            <View style={{ flexDirection: "row" }} key={i}>
              <ProductCard backgroundColor={Color.milk} source={_.image} />
              <Divider dir="horizontal" />
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default AnnounceMent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    flex: 1,
    position: "relative",
  },
  header: {
    padding: 15,
    position: "absolute",
    width: "100%",
    top: 0,
    zIndex: 12,
  },
});
