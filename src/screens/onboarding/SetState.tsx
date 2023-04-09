import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "../../components/button";
import Color from "../../constants/colors";
import BaseText from "../../components/Text";
import DropDown from "../../components/Dropdown";
import Divider from "../../components/Dividers";
import ScreenWithHeading from "../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import { OnboardingStackScreenProps } from "../../types/Navigation";

type Props = OnboardingStackScreenProps<"SetState">;

const SetState = ({ navigation, route }: Props) => {
  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    navigation.navigate("SetDateOfBirth");
  };
  const handleChange = (i: string) => () => {
    setValue(i);
  };
  function keyExtractor(i: string) {
    return i;
  }
  function showItems(i: string) {
    return (
      <TouchableOpacity onPress={handleChange(i)}>
        <BaseText size="h2" align="center">
          {i}
        </BaseText>
        <Divider />
      </TouchableOpacity>
    );
  }
  return (
    <ScreenWithHeading screenTitle="Get Started">
      <BaseText size="h1">Where do you currently call home ?</BaseText>
      <Divider size="l" />
      <BaseText size="small" color={Color.gray}>
        Where do you currently call home ?
      </BaseText>
      <Divider size="xl" />
      <DropDown
        closeOnSelect
        data={sample}
        keyExtractor={keyExtractor}
        renderItem={showItems}
        placeholder="Choose a state"
        value={value}
      />
      <Divider size="xl" />
      <Button
        centerButton
        onPress={handleButtonClick}
        label="Next"
        color={value ? Color.black : Color.gray}
      />
    </ScreenWithHeading>
  );
};

const sample = [
  "Sample 1",
  "Sample 2",
  "Sample 3",
  "Sample 4",
  "Sample 5",
  "Sample 6",
  "Sample 7",
  "Sample 8",
  "Sample 9",
  "Sample 19",
  "Sample 1119",
  "Sample 1e9",
  "Sample 1h9",
  "Sample 1d9",
  "Sample 1t9",
];
export default SetState;

const styles = StyleSheet.create({});
