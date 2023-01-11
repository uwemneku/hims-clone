import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";
import HomeCards from "../components/HomeCards";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../../components/Dividers";
import { images } from "../../../constants/images";
import BlogPost from "./BlogPost";

const data: { image: ImageSourcePropType; title: string }[] = [
  { image: images.blog3, title: "Skin Care" },
  { image: images.blog1, title: "Lorem ipsum" },
  { image: images.blog2, title: "Booster shot" },
];
const PopularReads = () => {
  return (
    <HomeCards title="Popular reads">
      <Divider size={"xs"} />
      <View style={{ paddingHorizontal: 15 }}>
        <BlogPost
          image={images.afro}
          title="The Hair Growth Cycle Explained"
          height={400}
          enableImageAnimation
        />
      </View>
      <Divider size={"xl"} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 15 }}
      >
        {data.map((_, i) => (
          <View style={{ flexDirection: "row" }} key={i}>
            <View style={{ width: 170 }}>
              <BlogPost image={_.image} title={_.title} />
            </View>
            <Divider dir="horizontal" size="xl" />
          </View>
        ))}
      </ScrollView>
    </HomeCards>
  );
};

export default PopularReads;

const styles = StyleSheet.create({
  container: {},
});
