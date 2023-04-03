import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { FC } from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BackIcon from "../../../components/Icon/BackIcon";
import withDefaultValue from "../../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import Animated from "react-native-reanimated";
import ProductCard from "../../../components/Cards/ProductCard";
import { images } from "../../../constants/images";
import { productCardSize } from "../../../constants/sizes";
import Divider from "../../../components/Dividers";
import { addOpacity } from "../../../utils";
import Color from "../../../constants/colors";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

const data = new Array(20).fill(0).map((_, i) => i);
type Props = StartingVisitStackScreenProps<"Products">;

const ConsultationProducts: FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const columnCount = Math.floor((width - 40) / productCardSize.width);
  const handleProductPress = () => navigation.navigate("ProductDetails");
  return (
    <HeadingScreenWrapper
      isFlatList
      data={data}
      title="Be Kind to your mind"
      showHeading
      rightIcon={CartIcon}
      leftIcon={LeftIcon}
      key={columnCount}
      renderItem={({ index }) => (
        <Pressable
          onPress={handleProductPress}
          style={{
            marginLeft: index % 2 ? 10 : 0,
            marginRight: index % 2 ? 10 : 0,
            marginVertical: 10,
          }}
        >
          <ProductCard
            backgroundColor={addOpacity(Color.brown, 0.1)}
            source={images.clean}
          />
        </Pressable>
      )}
      keyExtractor={(i) => i as string}
      contentContainerStyle={{}}
      numColumns={columnCount}
    ></HeadingScreenWrapper>
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
