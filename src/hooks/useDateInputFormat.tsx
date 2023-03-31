import React, { useState } from "react";

const useDateInputFormat = (maxAge: number) => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const maxYear = new Date().getFullYear() - maxAge;

  const displayedText = value
    .replace(/ |[\D]|/g, "")
    .replace(/([\d]{2})-?([\d]{1,2})?-?([\d]{1,4})?/g, (_, p1, p2, p3) => {
      const errorText =
        parseInt(p1) > 12
          ? "Invalid month"
          : parseInt(p2) > 31
          ? "Invalid day"
          : parseInt(p3) > maxYear
          ? `Must not be before ${maxYear}`
          : "";
      // this is to avoid infinite rerender
      setTimeout(() => {
        setErrorText(errorText);
      }, 0);
      // This allows the code to match dates of birth in the format dd, dd-mm, or dd-mm-yyyy.
      return `${p1}${p2 ? `-${p2}` : ""}${p3 ? `-${p3}` : ""}`;
    });

  // Text format is correct when displayed text text is not empty and matches the format of MM-DD-YYYY or when the text input is empty
  const isTextFormatCorrect =
    (Boolean(displayedText.match(/[\d]{2}-[\d]{2}-[\d]{4}/g)) &&
      displayedText.length > 0) ||
    displayedText.length === 0;
  const isError = !isTextFormatCorrect || Boolean(errorText);

  return [displayedText, setValue, isError, errorText] as const;
};

export default useDateInputFormat;
