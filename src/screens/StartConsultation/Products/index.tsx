import { Pressable, StyleSheet, useWindowDimensions } from "react-native";
import React, { FC, useCallback } from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BackIcon from "../../../components/icon/backIcon";
import withDefaultValue from "../../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../../components/animatedHeaderIcon/AnimatedHeaderIcon";
import Animated from "react-native-reanimated";
import ProductCard from "../../../components/Cards/productCard";
import { images } from "../../../constants/images";
import { calcCardSize, sizes } from "../../../constants/sizes";
import Divider from "../../../components/dividers";
import { addOpacity } from "../../../utils";
import Color from "../../../constants/colors";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

const data = new Array(20).fill(0).map((_, i) => i);
type Props = StartingVisitStackScreenProps<"Products">;

const ConsultationProducts: FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const columnCount = Math.floor(
    (Math.min(width, sizes.maxScreen) - sizes.padding * 2) /
      sizes.productCard.width
  );

  const { spacing, width: _w } = calcCardSize(width);
  const handleProductPress = useCallback(
    () => navigation.navigate("ProductDetails"),
    []
  );
  const margin = spacing / columnCount;

  return (
    <HeadingScreenWrapper
      isFlatList
      data={data}
      title="Be Kind to your mind"
      showHeading
      rightIcon={CartIcon}
      leftIcon={LeftIcon}
      key={columnCount}
      renderItem={({ index }) => {
        const isLastIndex = data.length - 1 === index;
        return (
          <Pressable
            onPress={handleProductPress}
            style={{
              marginLeft: isLastIndex ? margin : 0,
              marginRight: isLastIndex ? 0 : margin,
            }}
          >
            <ProductCard
              width={_w}
              backgroundColor={addOpacity(Color.brown, 0.1)}
              source={images.clean}
            />
          </Pressable>
        );
      }}
      ItemSeparatorComponent={() => <Divider size={15} />}
      keyExtractor={(i) => i as string}
      contentContainerStyle={{}}
      numColumns={columnCount}
    />
  );
};
const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();
const CartIcon: FC<{ scrollOffset: Animated.SharedValue<number> }> = ({
  scrollOffset,
}) => {
  return (
    <AnimatedHeaderIcon scrollOffset={scrollOffset} iconName="cart-sharp" />
  );
};

export default ConsultationProducts;

const styles = StyleSheet.create({});
