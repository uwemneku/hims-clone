import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Color from "../../../constants/colors";
import { addOpacity } from "../../../utils";
import Divider from "../../dividers";
import BaseText from "../../text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "../../../constants/images";
import { sizes } from "../../../constants/sizes";

interface Props extends PickFromComponentProps<typeof Image, "source"> {
  /**@default ```transparent```` */
  backgroundColor?: string;
  width?: number;
}
const ProductCard = ({
  source = images.afro,
  backgroundColor = addOpacity(Color.lightGray, 0.2),
  width = sizes.productCard.width,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.minCard, { marginLeft: 0, backgroundColor, width }]}
    >
      <View style={styles.minCardHeader}>
        <BaseText
          color={Color.gray}
          size="small"
          style={[styles.headerPill]}
          allowFontScaling={false}
        >
          Rx
        </BaseText>
        <Divider dir="horizontal" />
        <BaseText
          color={Color.gray}
          align="right"
          allowFontScaling={false}
          size="small"
          style={{ flex: 0.5 }}
        >
          $20.26
        </BaseText>
      </View>
      <View style={styles.product}>
        <Image
          source={source}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <BaseText>Minixidil Foam</BaseText>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  minCard: {
    padding: 15,
    borderRadius: 20,
    height: sizes.productCard.height,
    backgroundColor: addOpacity(Color.lightGray, 0.2),
    top: 0,
    right: 0,
  },
  minCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerPill: {
    backgroundColor: Color.white,
    padding: 5,
    borderRadius: 20,
  },
  product: {
    flex: 1,
  },
});
