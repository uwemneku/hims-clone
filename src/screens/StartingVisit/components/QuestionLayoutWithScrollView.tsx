import {
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView,
} from "react-native";
import React, { ComponentPropsWithRef } from "react";

type Props = Omit<
  ComponentPropsWithRef<typeof ScrollView>,
  "showsVerticalScrollIndicator" | "contentContainerStyle" | "style"
>;
const QuestionnaireLayoutWithScrollView = React.forwardRef(
  ({ children, ...props }: Props, ref) => {
    const { height } = useWindowDimensions();
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          ref={ref as React.RefObject<ScrollView>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={{ flex: 1 }}
          {...props}
        >
          <View style={{ height: height * 0.3, minHeight: 200 }} />
          {children}
        </ScrollView>
      </View>
    );
  }
);

export default QuestionnaireLayoutWithScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  scrollContainer: {
    maxWidth: 500,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 130,
  },
});
