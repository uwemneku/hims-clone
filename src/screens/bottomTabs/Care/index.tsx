import { StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import Divider from "../../../components/dividers";
import SectionTitle from "./SectionTiltle";
import CareCard from "./CareCard";
import Color from "../../../constants/colors";
import { images } from "../../../constants/images";
import CareList from "./CareList";

const Care = () => {
  return (
    <HeadingScreenWrapper title="Care">
      <SectionTitle
        title="Care"
        subTitle="The support you need when you need it. Meet your care Team"
      />
      <Divider size="xl" />
      <CareCard
        image={images.boy_doctor}
        title="Concierge"
        details="Our 24/7 concierge team provides live support with free, unlimited messaging,"
        gradient={["#5e47d5", "#af6dbf", "#5e47d5"]}
      />
      <Divider size="s" />
      <CareCard
        title="Medical Team"
        details="A team of licensed medical experts dedicated to your care"
        textColor={Color.black}
        image={images._3dDoctor}
      />
      <Divider size={50} />
      <SectionTitle
        title="Explore treatments"
        subTitle="Our most popular programs"
      />
      <Divider size={50} />
      {List1.map((_) => {
        return (
          <View key={_.title}>
            <CareList title={_.title} items={_.items} />
            <Divider size="xl" />
          </View>
        );
      })}
    </HeadingScreenWrapper>
  );
};

const List1: ComponentProps<typeof CareList>[] = [
  {
    title: "Sexual Health",
    items: [
      { tag: "Popular", title: "Erectile dysfunction" },
      { title: "Premature Ejaculation" },
      { title: "Genital Herpes" },
    ],
  },
  {
    title: "Har & Skin",
    items: [
      { tag: "Popular", title: "Hair Loss" },
      { title: "Acne", tag: "Trending" },
      { title: "Ani-aging" },
    ],
  },
  {
    title: "Mental Health",
    items: [
      { tag: "Popular", title: "Anxiety & depression" },
      { title: "Online therapy" },
      { title: "Performance anxiety" },
    ],
  },
  {
    title: "Everyday Health",
    items: [
      { title: "Primary Care" },
      { title: "Cold Sores" },
      { title: "Infections" },
    ],
  },
];

export default Care;

const styles = StyleSheet.create({});
