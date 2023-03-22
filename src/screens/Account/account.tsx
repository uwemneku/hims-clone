import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTabScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import withDefaultValue from "../../utils/withDefaultValue";
import AnimatedHeaderIcon from "../../components/AnimatedHeaderIcon/AnimatedHeaderIcon";
import BaseText from "../../components/Text";
import ChevronList from "../../components/ChevronList";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";

const Account = () => {
  return (
    <BottomTabScreenWrapper title="" rightIcon={LeftIcon}>
      <BaseText size="h1">Account</BaseText>
      <View style={styles.heading}>
        <View style={styles.initials}>
          <BaseText size="h2">S.N</BaseText>
        </View>
        <View style={styles.names}>
          <BaseText size="h2">Sample Name</BaseText>
          <Divider size={"xs"} />
          <BaseText size="h3" color={Color.gray}>
            Sample Name
          </BaseText>
        </View>
      </View>
      <View>
        {listData.map(({ label, nav }) => {
          return (
            <View key={label} style={styles.list}>
              <ChevronList onPress={() => {}} title={label} />
            </View>
          );
        })}
      </View>
    </BottomTabScreenWrapper>
  );
};

const LeftIcon = withDefaultValue(AnimatedHeaderIcon)("iconName", "close")();

export default Account;
const listData: { label: string; nav: string }[] = [
  { nav: "", label: "Contact Information" },
  { nav: "", label: "Subscriptions" },
  { nav: "", label: "Order history" },
  { nav: "", label: "Payment methods" },
  { nav: "", label: "Help center" },
  { nav: "", label: "Terms, Privacy and Consent" },
];

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  heading: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  initials: {
    backgroundColor: Color.lightGray,
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  names: {
    marginHorizontal: 20,
  },
});
