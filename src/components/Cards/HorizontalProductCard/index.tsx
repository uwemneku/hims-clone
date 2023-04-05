import { StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import Wrapper from "./Wrapper";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../Dividers";
import ProductCard from "../ProductCard";

interface Props extends ComponentProps<typeof Wrapper> {
  data: { image: any }[];
}

const HorizontalProductCard = ({ data, ...props }: Props) => {
  return (
    <Wrapper {...props}>
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
    </Wrapper>
  );
};

export default HorizontalProductCard;

const styles = StyleSheet.create({});
