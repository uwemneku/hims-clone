import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import MaterialTopScrollWrapper from "./components/MaterialTopScrollWrapper";
import HorizontalProductCard from "../../../components/Cards/HorizontalProductCard";
import { shuffleArray } from "../../../utils";
import { allProducts } from "../../../constants/products";
import Categories from "./components/Categories";
import ChevronList from "../../../components/chevronList";
import Color from "../../../constants/colors";
import BaseText from "../../../components/text";
import Divider from "../../../components/dividers";
import { images } from "../../../constants/images";

const Browse = () => {
  return (
    <MaterialTopScrollWrapper>
      <HorizontalProductCard
        data={shuffleArray(allProducts)}
        title="Must haves, best sellers, & more"
      />
      <View style={styles.chevronListWrapper}>
        {list.map((i) => (
          <View key={i} style={styles.chevronList}>
            <ChevronList title={i} onPress={() => {}} />
          </View>
        ))}
      </View>
      <Divider />
      <BaseText fontWeight="sofia_bold" size="h1">
        Browse Categories
      </BaseText>
      {categories.map((i) => (
        <View key={i.title}>
          <Categories {...i} />
        </View>
      ))}
      <Divider />
    </MaterialTopScrollWrapper>
  );
};

const list = ["Shop RX", "Shop over the counter", "What's new"];
const categories: ComponentProps<typeof Categories>[] = [
  {
    title: "Sexual Health",
    categoryImage: images.himsPack,
    data: shuffleArray(allProducts),
  },
  {
    title: "Hair",
    categoryImage: images.doctor,
    data: shuffleArray(allProducts),
  },
  {
    title: "Skin",
    categoryImage: images.pillsboy,
    data: shuffleArray(allProducts),
  },
  {
    title: "Mental Health",
    categoryImage: images.announcement,
    data: shuffleArray(allProducts),
  },
  {
    title: "Supplements",
    categoryImage: images.smileman,
    data: shuffleArray(allProducts),
  },
];
export default Browse;

const styles = StyleSheet.create({
  chevronList: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: Color.lightGray,
  },
  chevronListWrapper: {
    borderTopWidth: 1,
    borderTopColor: Color.lightGray,
    marginVertical: 20,
  },
});
