import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import BottomTabScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import { images } from "../../../constants/images";
import Color from "../../../constants/colors";
import { addOpacity } from "../../../utils";
import Trending from "./Trending";
import PopularReads from "./PopularReads";
import ZoomImageCard from "../../../components/Cards/ZoomImageCard";
import AnnounceMent from "./AnnounceMent";
import withDefaultValue from "../../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import { Link, NavigationProp, useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import {
  RootStackParamList,
  RootStackScreenProps,
} from "../../../types/Navigation";

type Prop = RootStackScreenProps<"HomeBottomTabs">;
const Home = () => {
  return (
    <BottomTabScreenWrapper title="Home" rightIcon={HomeIcon}>
      <View>
        <BaseText fontWeight="sofia_bold" size="h1" style={{ width: "70%" }}>
          Welcome back, John
        </BaseText>
      </View>
      <Divider size={60} />
      <View style={styles.largeBox}>
        <ZoomImageCard
          enable
          style={styles.image}
          source={images.happyCouple}
        />
        <View style={styles.overlay}>
          <BaseText size="small" style={styles.pill} color={Color.white}>
            Mental Health
          </BaseText>
          <View>
            <BaseText
              lineHeight={35}
              color={Color.white}
              style={{ width: "60%" }}
              size="h1"
            >
              Be Kind to your mind in 2023
            </BaseText>
            <Divider size="m" />
            <BaseText color={Color.white} lineHeight={24}>
              It's always a good time to take care of your mental health. With
              affordable online therapy and doctor-trusted medication, Hims can
              help you feel better than ever.
            </BaseText>
          </View>
        </View>
      </View>
      <Divider size="xl" />
      <Trending />
      <Divider size="xl" />
      <PopularReads />
      <Divider size="xl" />
      <AnnounceMent />
    </BottomTabScreenWrapper>
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
