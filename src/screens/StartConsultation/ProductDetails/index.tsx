import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { FC } from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BackIcon from "../../../components/Icon/BackIcon";
import withDefaultValue from "../../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import Animated from "react-native-reanimated";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";
import Button from "../../../components/Button";

type Props = StartingVisitStackScreenProps<"ProductDetails">;

const ProductDetails: FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const handleProductPress = () => navigation.navigate("ProductDetails");
  return (
    <>
      <HeadingScreenWrapper
        title="Vilafaxine"
        showHeading
        rightIcon={CartIcon}
        leftIcon={LeftIcon}
      ></HeadingScreenWrapper>
      <View style={styles.button}>
        <Button label="Start Consultation" />
      </View>
    </>
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

export default ProductDetails;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    padding: 20,
  },
});
