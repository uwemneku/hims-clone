import React, { useState } from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import Button from "../../components/button";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";
import BaseText from "../../components/Text";
import ScreenWithHeading from "../../components/layout/Wrappers/ScreenWithHeading/ScreenWithHeading";
import { OnboardingStackScreenProps } from "../../types/Navigation";
import useDateInputFormat from "../../hooks/useDateInputFormat";

type Props = OnboardingStackScreenProps<"SetDateOfBirth">;
const _helperText = "Must be up to 18 years old";

const SetState = ({ navigation }: Props) => {
  const [displayedText, setDOB, isError, errorText] = useDateInputFormat(18);
  const isButtonDisabled = !displayedText || isError;
  const handleButtonClick = () => {
    !isButtonDisabled && navigation.navigate("BookAVisit");
  };

  return (
    <ScreenWithHeading screenTitle="Getting Started">
      <BaseText size="h1">When were you born?</BaseText>
      <Divider size="l" />
      <BaseTextInput
        value={displayedText}
        onChangeText={setDOB}
        isError={isError}
        placeholder="Date of Birth (MM-DD-YYYY)"
        keyboardType="number-pad"
        helperText={errorText || _helperText}
        maxLength={10}
      />
      <Divider size="l" />
      <Button
        centerButton
        onPress={handleButtonClick}
        label="Next"
        color={isButtonDisabled ? Color.lightGray : Color.black}
        style={{ text: { color: Color.white } }}
      />
    </ScreenWithHeading>
  );
};

export default SetState;
