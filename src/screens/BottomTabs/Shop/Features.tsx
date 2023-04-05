import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialTopScrollWrapper from "./components/MaterialTopScrollWrapper";
import LargeCard from "../../../components/Cards/LargeCard";
import { images } from "../../../constants/images";
import HorizontalProductCard from "../../../components/Cards/HorizontalProductCard";
import Divider from "../../../components/Dividers";
import AnnounceMentCard from "../../../components/Cards/AnnounceMentCard";
const data = [
  { image: images.elixr },
  { image: images.bottle },
  { image: images.clean },
  { image: images.hairloss },
  { image: images.gummies },
  { image: images.hairloss },
  { image: images.mental },
  { image: images.skin },
  { image: images.skincream },
  { image: images.sleep },
  { image: images.tropical },
];
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
        data={[{ image: images.skin }, { image: images.skincream }]}
        title="Trending"
        subtitle="This month"
      />
      <Divider />
      <HorizontalProductCard data={data} title="Everyday favorites" />
      <Divider />
      <AnnounceMentCard
        title="Big News"
        subtitle="Welcome phill to the hims family"
        image={images.pillsboy}
        products={data}
      />
      <Divider />
      <HorizontalProductCard
        data={[{ image: images.skin }]}
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
