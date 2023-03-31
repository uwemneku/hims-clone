import {
  StyleSheet,
  ViewStyle,
  View,
  TouchableOpacity as _TouchableOpacity,
} from "react-native";
import React, { ComponentProps, FC, PropsWithChildren } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Color from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import BaseText from "../../../Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedHeaderIcon from "../../../AnimatedHeaderIcon/AnimatedHeaderIcon";
interface Props extends ComponentProps<typeof View> {
  rightHeadingButton?: JSX.Element;
  screenTitle?: string;
  style?: ViewStyle;
  hideBackButton?: boolean;
}
const ScreenWithHeading: FC<PropsWithChildren<Props>> = ({
  children,
  rightHeadingButton,
  screenTitle,
  hideBackButton,
  style,
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const scrollOffset = useSharedValue(0);
  const navigation = useNavigation();
  const handleButtonPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };
  const animatedHeadingStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 50],
      ["rgba(242, 242, 242, 0)", "rgba(242, 242, 242, 1)"]
    ),
  }));
  const handleScroll: ComponentProps<typeof ScrollView>["onScroll"] = ({
    nativeEvent,
  }) => {
    scrollOffset.value = nativeEvent.contentOffset.y;
  };
  return (
    <View style={[styles.container, style, { paddingBottom: bottom }]}>
      <Animated.View style={[animatedHeadingStyle, { paddingTop: top }]}>
        <View style={styles.header}>
          <View style={styles.buttonContainer}>
            {!hideBackButton && (
              <AnimatedHeaderIcon
                onPress={handleButtonPress}
                scrollOffset={scrollOffset}
                iconName="arrow-back-sharp"
              />
            )}
            {rightHeadingButton}
          </View>
          <BaseText fontWeight="sofia_bold">{screenTitle}</BaseText>
        </View>
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        keyboardShouldPersistTaps="always"
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default ScreenWithHeading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // backgroundColor: ,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  scrollView: {
    padding: 20,
  },
});
