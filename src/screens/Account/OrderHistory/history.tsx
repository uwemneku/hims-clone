import { StyleSheet } from "react-native";
import React, { ComponentProps } from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import BackIcon from "../../../components/Icon/BackIcon";
import withDefaultValue from "../../../utils/withDefaultValue";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import Color from "../../../constants/colors";
import ProductItemLayout from "../../../components/Cards/ProductItemLayout";
import {
  AccountStackScreenParamsList,
  NestedStackScreenProps,
} from "../../../types/Navigation";
import { list } from "./data";

type Props = NestedStackScreenProps<
  AccountStackScreenParamsList,
  "orderHistory"
>;

const OrderHistory = ({ navigation }: Props) => {
  const handleClick = (id: number) => () => {
    navigation.navigate("orderHistoryDetails", { id });
  };
  return (
    <HeadingScreenWrapper leftIcon={LeftIcon} title="Subscriptions">
      <BaseText size="h1" fontWeight="sofia_bold">
        Order history
      </BaseText>
      <Divider />
      {list.map((i, index) => (
        <ProductItemLayout
          key={i.subtitle}
          action={i.action}
          image={i.image}
          subtitle={i.subtitle}
          title={i.title}
          style={{ marginBottom: 20 }}
          onPress={handleClick(index)}
        />
      ))}
    </HeadingScreenWrapper>
  );
};

const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default OrderHistory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.lightGray,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
});
