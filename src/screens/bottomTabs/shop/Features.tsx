import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialTopScrollWrapper from "./components/MaterialTopScrollWrapper";
import LargeCard from "../../../components/Cards/LargeCard";
import { images } from "../../../constants/images";
import HorizontalProductCard from "../../../components/Cards/HorizontalProductCard";
import Divider from "../../../components/dividers";
import AnnounceMentCard from "../../../components/Cards/AnnounceMentCard";
import { shuffleArray } from "../../../utils";
import Header from "./components/Header";
import { allProducts } from "../../../constants/products";

const Features = () => {
  return (
    <MaterialTopScrollWrapper>
      <LargeCard
        tag="Best in case"
        image={images.cream}
        details="Winner of the product in AskMen's 21021 Grooming Awards. Ready to put it to rest?"
        title="Get the top rated hair loss product"
      />
      <Divider />
      <HorizontalProductCard
        data={shuffleArray(allProducts)}
        title="Trending"
        subtitle="This month"
      />
      <Divider />
      <HorizontalProductCard
        data={shuffleArray(allProducts)}
        title="Everyday favorites"
      />
      <Divider />
      <AnnounceMentCard
        title="Big News"
        subtitle="Welcome phill to the hims family"
        image={images.pillsboy}
        products={allProducts}
      />
      <Divider />
      <HorizontalProductCard
        data={shuffleArray(allProducts)}
        title="Set the Mood"
      />
      <Divider />
      <LargeCard
        details="Meet the new sunscreen that blocks 38% of UV rays plus blue light from the screen"
        image={images.blog1}
        tag=""
        title="SPF is skin's MVP"
      />
      <Divider size={"xl"} />
    </MaterialTopScrollWrapper>
  );
};

export default Features;

const styles = StyleSheet.create({});
