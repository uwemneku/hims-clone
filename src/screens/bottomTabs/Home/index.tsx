import { StyleSheet, View } from "react-native";
import React from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BaseText from "../../../components/text";
import Divider from "../../../components/dividers";
import { images } from "../../../constants/images";
import Color from "../../../constants/colors";
import { addOpacity, shuffleArray } from "../../../utils";
import PopularReads from "./PopularReads";
import AnnounceMentCard from "../../../components/Cards/AnnounceMentCard";
import AnimatedHeaderIcon from "../../../components/animatedHeaderIcon/AnimatedHeaderIcon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import {
  HomeBottomTabsParamsList,
  NestedStackScreenProps,
  RootStackParamList,
} from "../../../types/Navigation";
import LargeCard from "../../../components/Cards/largeCard";
import HorizontalProductCard from "../../../components/Cards/horizontalProductCard";
import { allProducts } from "../../../constants/products";
import ResponsiveWrapper from "../../../components/layout/ResponsiveWrapper";

type Prop = NestedStackScreenProps<HomeBottomTabsParamsList, "home">;
const Home = ({ navigation }: Prop) => {
  const handleBoxClick = () => {
    navigation.navigate("StartingConsultation", { screen: "Products" });
  };
  return (
    <HeadingScreenWrapper title="Home" rightIcon={HomeIcon}>
      <ResponsiveWrapper>
        <View>
          <BaseText fontWeight="sofia_bold" size="h1" style={{ width: "70%" }}>
            Welcome back, John
          </BaseText>
        </View>
        <Divider size={60} />
        <LargeCard
          onPress={handleBoxClick}
          tag="Mental Health"
          image={images.happyCouple}
          details="It's always a good time to take care of your mental health. With
        affordable online therapy and doctor-trusted medication, Hims can
        help you feel better than ever."
          title="Be Kind to your mind in 2023"
        />
        <Divider size="xl" />
        <HorizontalProductCard
          title="Trending"
          iconName="show-chart"
          subtitle="Jul 15"
          data={shuffleArray(allProducts)}
        />
        <Divider size="xl" />
        <PopularReads />
        <Divider size="xl" />
        <AnnounceMentCard
          title="Big News"
          subtitle="Welcome Grank to the hims family"
          image={images.announcement}
          products={shuffleArray(allProducts)}
        />
      </ResponsiveWrapper>
    </HeadingScreenWrapper>
  );
};
type Navigation = NavigationProp<RootStackParamList, "HomeBottomTabs">;

const HomeIcon = ({
  scrollOffset,
}: {
  scrollOffset: Animated.SharedValue<number>;
}): JSX.Element => {
  const navigation = useNavigation<Navigation>();
  const onPress = () => navigation.navigate("Account", { screen: "account" });

  return (
    <AnimatedHeaderIcon
      scrollOffset={scrollOffset}
      iconName="person"
      onPress={onPress}
    />
  );
};

export default Home;

const data = [
  { image: images.skin },
  { image: images.tropical },
  { image: images.gummies },
  { image: images.sleep },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeBox: {
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 500,
  },
  pill: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: Color.brown,
    alignSelf: "flex-start",
  },
  overlay: {
    padding: 15,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: addOpacity(Color.black, 0.4),
    top: 0,
    right: 0,
  },
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
});
