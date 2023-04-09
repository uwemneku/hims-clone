import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import QuestionnaireLayoutWithScrollView from "../components/QuestionLayoutWithScrollView";
import QuestionnaireGradientText from "../components/QuestionnaireGradientText";
import BaseText from "../../../components/Text";
import Divider from "../../../components/Dividers";
import Color from "../../../constants/colors";
import Button from "../../../components/button";
import { suggestedAddress } from "./data";
import { UserAddress } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StartingVisitStackScreenProps } from "../../../types/Navigation";

type Props = StartingVisitStackScreenProps<"ConfirmAddressDetails">;

const ConfirmAddressDetails = ({ navigation }: Props) => {
  const [activeAddressIndex, setActiveAddressIndex] = useState(0);
  const originalAdress: UserAddress = {
    address: "1266 University Manhatten",
    location: "Menlo Park, CA",
    phoneNumber: "94025-4221",
    state: "CA, United States",
  };
  const handleContactClick = (index: number) => () => {
    setActiveAddressIndex(index);
  };
  const handleButtonClick = () => {
    navigation.navigate("PaymentDetails");
  };
  return (
    <QuestionnaireLayoutWithScrollView>
      <QuestionnaireGradientText size="small">
        Your account
      </QuestionnaireGradientText>
      <Divider />
      <BaseText size="h1" align="center">
        Confirm Address
      </BaseText>
      <Divider size="l" />
      <BaseText size="h3" align="center" lineHeight={25} color={Color.gray}>
        We found a more precise address. Please review and confirm our
        suggestion address below.
      </BaseText>
      <Divider size="xl" />
      <>
        {[originalAdress, ...suggestedAddress].map((item, index) => {
          const isOriginal = index === 0;
          return (
            <TouchableOpacity
              key={item.address}
              onPress={handleContactClick(index)}
            >
              <ContactCard
                title={isOriginal ? "Original address:" : "Suggested address:"}
                isSelected={activeAddressIndex === index}
                {...item}
              />
            </TouchableOpacity>
          );
        })}
      </>
      <Divider size="xl" />
      <Button label="Confirm" onPress={handleButtonClick} />
    </QuestionnaireLayoutWithScrollView>
  );
};

const ContactCard = (
  props: UserAddress & { title: string; isSelected: boolean }
) => {
  const borderColor = props.isSelected ? Color.darkGray : Color.lightGray;
  return (
    <View style={[styles.contactCard, { borderColor }]}>
      <View style={[styles.indicator_outter, { borderColor }]}>
        {props.isSelected && <View style={styles.indicator_inner} />}
      </View>
      <Divider dir="horizontal" size="xl" />
      <View style={{ flex: 1 }}>
        <BaseText size="h3">{props.title}</BaseText>
        <Divider size="s" />
        <BaseText color={Color.gray}>{props.address}</BaseText>
        <Divider size="s" />
        <BaseText>{props.location}</BaseText>
        <Divider size="s" />
        <BaseText>{props.phoneNumber}</BaseText>
        <Divider size="s" />
        <BaseText>{props.state}</BaseText>
      </View>
    </View>
  );
};

export default ConfirmAddressDetails;

const styles = StyleSheet.create({
  contactCard: {
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    width: "90%",
    marginBottom: 20,
    alignSelf: "center",
  },
  indicator_outter: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator_inner: {
    backgroundColor: Color.darkGray,
    width: "70%",
    height: "70%",
    borderRadius: 20,
  },
});
