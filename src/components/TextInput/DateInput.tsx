import React, { ComponentProps, useEffect, useRef } from "react";
import BaseTextInput from "../../components/TextInput/BaseTextInput";
import useDateInputFormat from "../../hooks/useDateInputFormat";

interface Props
  extends Pick<
    ComponentProps<typeof BaseTextInput>,
    "placeholder" | "helperText" | "isError"
  > {
  maxAge: number;

  onChange(e: string): void;
}

const DateInput = ({
  helperText,
  placeholder,
  maxAge,
  onChange,
  isError: _isError,
}: Props) => {
  const [displayedText, setDOB, isError, errorText] =
    useDateInputFormat(maxAge);
  const prevInput = useRef(displayedText);
  if (prevInput.current !== displayedText) {
    onChange(displayedText);
    prevInput.current = displayedText;
  }
  return (
    <BaseTextInput
      value={displayedText}
      onChangeText={setDOB}
      isError={_isError || isError}
      placeholder={placeholder}
      keyboardType="number-pad"
      helperText={errorText || helperText}
      maxLength={10}
    />
  );
};

export default DateInput;
