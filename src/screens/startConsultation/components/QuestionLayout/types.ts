export type OptionsVariant = {
  mode: "options";
  options: string[];
};
export type TextVariant = {
  mode: "textInput";
  placeHolder: string;
};
export type MultiStepQuestion = {
  question: string;
  details?: string;
  options: string[];
};
