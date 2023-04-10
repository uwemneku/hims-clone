import { StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BaseText from "../../../../components/text";
import Color from "../../../../constants/colors";
import { useRef } from "react";
import BaseQuestionLayout from "./BaseQuestionLayout";
import BaseTextInput from "../../../../components/textInput/BaseTextInput";
import { OptionsVariant, TextVariant } from "./types";

type Props = Omit<ComponentProps<typeof BaseQuestionLayout>, "children"> & {
  onSelect(item: string): void;
} & (OptionsVariant | TextVariant);

const QuestionWithOptions = (props: Props) => {
  const { mode, onSelect, question, stage, details } = props;
  const ref = useRef<ScrollView>(null);
  ref.current?.scrollTo({ y: 0 });
  return (
    <BaseQuestionLayout question={question} stage={stage} details={details}>
      <View>
        {mode === "options" ? (
          <>
            {props.options.map((i) => {
              const handleClick = () => onSelect(i);
              return (
                <TouchableOpacity
                  onPress={handleClick}
                  key={i}
                  style={styles.options}
                >
                  <BaseText>{i}</BaseText>
                </TouchableOpacity>
              );
            })}
          </>
        ) : (
          <BaseTextInput placeholderStyle={{ textAlign: "center" }} />
        )}
      </View>
    </BaseQuestionLayout>
  );
};

export default QuestionWithOptions;

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", maxWidth: 500 },
  options: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Color.white,
    borderColor: Color.lightGray,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
