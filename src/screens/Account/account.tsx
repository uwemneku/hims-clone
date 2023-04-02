import { StyleSheet, View } from "react-native";
import React from "react";
import HeadingScreenWrapper from "../../components/layout/Wrappers/BottomTabScreenWrapper";
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
type NavKeys = Exclude<
  keyof AccountStackScreenParamsList,
  "orderHistoryDetails"
>;
const Account = ({ navigation }: Props) => {
  const handleLogout = () =>
    navigation.navigate("Onboarding", { screen: "GetStarted" });
  const handleNavigation = (key: NavKeys) => () => {
    navigation.navigate("Account", { screen: key });
  };
  const handleLinkNavigation = (link: string) => () => {
    navigation.navigate("WebView", { link });
  };
  return (
    <HeadingScreenWrapper title="Account" rightIcon={BackIcon}>
      <BaseText size="h1" fontWeight="sofia_bold">
        Account
      </BaseText>
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
        {webListData.map(({ label, link }) => {
          return (
            <View key={label} style={styles.list}>
              <ChevronList onPress={handleLinkNavigation(link)} title={label} />
            </View>
          );
        })}
      </View>
      <Divider size={"xl"} />
      <Button label={"Log Out"} onPressIn={handleLogout} />
    </HeadingScreenWrapper>
  );
};

export default Account;

const listData: { label: string; nav: NavKeys }[] = [
  { nav: "contactInfo", label: "Contact Information" },
  { nav: "subscriptions", label: "Subscriptions" },
  { nav: "orderHistory", label: "Order history" },
];
const webListData: { label: string; link: string }[] = [
  { link: "https://support.forhims.com/hc/en-us", label: "Help center" },
  {
    link: "https://www.forhims.com/terms-and-conditions",
    label: "Terms, Privacy and Consent",
  },
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
