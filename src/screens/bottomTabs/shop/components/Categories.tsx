import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import HorizontalProductCard from "../../../../components/Cards/HorizontalProductCard";
import { addOpacity } from "../../../../utils";
import BaseText from "../../../../components/text";
import Color from "../../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { productCardSize } from "../../../../constants/sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props extends ComponentProps<typeof HorizontalProductCard> {
  categoryImage: ComponentProps<typeof Image>["source"];
  onCategoryClick?(): void;
  title: string;
}
const Categories = ({
  categoryImage,
  title,
  onCategoryClick,
  ...props
}: Props) => {
  return (
    <HorizontalProductCard
      {...props}
      additionalItems={
        <TouchableOpacity activeOpacity={0.8} onPress={onCategoryClick}>
          <ImageBackground source={categoryImage} style={styles.all}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.pill]}>
                <BaseText
                  size={"small"}
                  color={Color.white}
                  allowFontScaling={false}
                >
                  Products
                </BaseText>
              </View>
            </View>
            <View style={styles.bottom}>
              <BaseText
                color={Color.white}
                style={{ flex: 1 }}
                fontWeight="sofia_medium"
                size="h2"
              >
                {title}
              </BaseText>
              <Ionicons
                name="chevron-forward-circle"
                size={30}
                color={Color.white}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      }
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  pill: {
    margin: 10,
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: "auto",
    backgroundColor: addOpacity(Color.brown, 0.5),
  },
  all: {
    height: productCardSize.height,
    width: 250,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 20,
    justifyContent: "space-between",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: addOpacity(Color.black, 0.25),
  },
});
