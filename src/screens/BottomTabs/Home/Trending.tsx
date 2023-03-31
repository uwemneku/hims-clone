import { StyleSheet, View } from "react-native";
import React from "react";
import HomeCards from "../components/HomeCards";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../../components/Dividers";
import ProductCard from "../../../components/Cards/ProductCard";
import { images } from "../../../constants/images";

const data = [
  { image: images.clean },
  { image: images.skin },
  { image: images.tropical },
  { image: images.gummies },
  { image: images.sleep },
];
const Trending = () => {
  return (
    <HomeCards title="Trending" subtitle="Jun 15">
      <Divider size={"xs"} />
      <ScrollView
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((_, i) => (
          <View style={{ flexDirection: "row" }} key={i}>
            <ProductCard source={_.image} />
            <Divider dir="horizontal" />
          </View>
        ))}
      </ScrollView>
    </HomeCards>
  );
};

export default Trending;

const styles = StyleSheet.create({});
