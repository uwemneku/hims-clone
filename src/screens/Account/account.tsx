import { StyleSheet, View } from "react-native";
import React from "react";
import BottomTabScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
import BaseText from "../../components/Text";
import ChevronList from "../../components/ChevronList";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";
import Button from "../../components/Button";
import {
  AccountStackScreenParamsList,
  NestedStackScreenProps,
} from "../../types/Navigation";
import BackIcon from "../../components/Icon/BackIcon";

type Props = NestedStackScreenProps<AccountStackScreenParamsList, "account">;

const Account = ({ navigation }: Props) => {
  const handleLogout = () =>
    navigation.navigate("Onboarding", { screen: "Login" });
  const handleNavigation = (key: keyof AccountStackScreenParamsList) => () => {
    navigation.navigate("Account", { screen: key });
  };
  return (
    <BottomTabScreenWrapper title="Account" rightIcon={BackIcon}>
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
        {listData.slice(0, 3).map(({ label, nav }) => {
          return (
            <View key={label} style={styles.list}>
              <ChevronList onPress={handleNavigation(nav)} title={label} />
            </View>
          );
        })}
        <View style={styles.list}>
          <ChevronList
            onPress={() => {}}
            title={
              <View style={styles.listBox}>
                <BaseText>Payment methods</BaseText>
                <BaseText
                  style={{ textAlignVertical: "center" }}
                  color={Color.gray}
                >
                  **** 1234
                </BaseText>
              </View>
            }
          />
        </View>
        {listData.slice(3).map(({ label, nav }) => {
          return (
            <View key={label} style={styles.list}>
              <ChevronList onPress={() => {}} title={label} />
            </View>
          );
        })}
      </View>
      <Divider size={"xl"} />
      <Button label={"Log Out"} onPressIn={handleLogout} />
    </BottomTabScreenWrapper>
  );
};

export default Account;

const listData: { label: string; nav: keyof AccountStackScreenParamsList }[] = [
  { nav: "contactInfo", label: "Contact Information" },
  { nav: "subscriptions", label: "Subscriptions" },
  { nav: "orderHistory", label: "Order history" },
  { nav: "helpCenter", label: "Help center" },
  { nav: "terms", label: "Terms, Privacy and Consent" },
];

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  heading: {
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  initials: {
    backgroundColor: Color.lightGray,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  names: {
    marginHorizontal: 20,
  },
  listBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
