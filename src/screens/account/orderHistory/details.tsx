import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingScreenWrapper from "../../../components/layout/Wrappers/BottomTabScreenWrapper";
import withDefaultValue from "../../../utils/withDefaultValue";
import BackIcon from "../../../components/icon/backIcon";
import BaseText from "../../../components/text";
import {
  AccountStackScreenParamsList,
  NestedStackScreenProps,
} from "../../../types/Navigation";
import { list } from "./data";
import Color from "../../../constants/colors";
import ProductItemLayout from "../../../components/Cards/ProductItemLayout";
import { addOpacity } from "../../../utils";
import Divider from "../../../components/dividers";
import TextList from "../../../components/list/TextList";
type Props = NestedStackScreenProps<
  AccountStackScreenParamsList,
  "orderHistoryDetails"
>;

const OrderHistoryDetails = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const item = list[id];
  return (
    <HeadingScreenWrapper
      title=""
      leftIcon={LeftIcon}
      contentContainerStyle={styles.container}
    >
      <View style={[styles.content, { paddingTop: 10 }]}>
        <BaseText fontWeight="sofia_bold" size="h1">
          {item.subtitle}
        </BaseText>
      </View>
      <View style={styles.line} />
      <View style={styles.content}>
        <BaseText fontWeight="sofia_bold" size="small">
          items (1)
        </BaseText>
        <Divider />
        <ProductItemLayout
          disabled
          image={item.image}
          title={item.subtitle}
          action={"Qty 1"}
          subtitle="$15"
        />
      </View>
      <View style={styles.line} />
      <View style={styles.content}>
        <TextList
          fontWeight="sofia_bold"
          color={Color.gray}
          left="Order No"
          right="DJ5J5I69FK"
          style={styles.list}
        />
        <TextList
          fontWeight="sofia_bold"
          color={Color.gray}
          left="Shipping Address"
          right="128 University Drive Menli Park, CA"
          style={styles.list}
        />
        <TextList
          fontWeight="sofia_bold"
          left="Grand total"
          right="$30"
          style={{ ...styles.list, borderBottomWidth: 0 }}
        />
      </View>
      <View style={styles.line} />
    </HeadingScreenWrapper>
  );
};

const LeftIcon = withDefaultValue(BackIcon)("iconName", "arrow-back")();

export default OrderHistoryDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  content: {
    paddingHorizontal: 20,
  },
  list: {
    paddingVertical: 15,
    borderBottomColor: addOpacity(Color.brown, 0.05),
    borderBottomWidth: 2,
  },

  line: {
    height: 10,
    backgroundColor: addOpacity(Color.brown, 0.05),
    marginVertical: 20,
  },
});
