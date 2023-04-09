import { Image, StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import HorizontalCardWrapper from "./Wrapper";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../dividers";
import ProductCard from "../productCard";

interface Props extends ComponentProps<typeof HorizontalCardWrapper> {
  additionalItems?: JSX.Element;
  data: { image: ComponentProps<typeof Image>["source"] }[];
}

const HorizontalProductCard = ({ data, additionalItems, ...props }: Props) => {
  return (
    <HorizontalCardWrapper {...props}>
      <Divider size={"xs"} />
      <ScrollView
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {additionalItems}
        {data.map((_, i) => (
          <View style={{ flexDirection: "row" }} key={i}>
            <ProductCard source={_.image} />
            <Divider dir="horizontal" />
          </View>
        ))}
      </ScrollView>
    </HorizontalCardWrapper>
  );
};

export default HorizontalProductCard;

const styles = StyleSheet.create({});
