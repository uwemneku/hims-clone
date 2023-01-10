import {
  StyleSheet,
  TouchableOpacity as _TouchableOpacity,
} from "react-native";
import React, { ComponentProps, FC, PropsWithChildren } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../constants/colors";
import { addOpacity } from "../../utils/inex";
const TouchableOpacity = Animated.createAnimatedComponent(_TouchableOpacity);
interface Props
  extends Omit<ComponentProps<typeof TouchableOpacity>, "children"> {
  iconName: ComponentProps<typeof Ionicons>["name"];
  scrollOffset: Animated.SharedValue<number>;
  /**@default 50 */
  maxScroll?: number;
}
const AnimatedHeaderIcon: FC<PropsWithChildren<Props>> = ({
  scrollOffset,
  iconName,
  onPress,
  maxScroll = 50,
}) => {
  const animatedButtonStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      scrollOffset.value,
      [0, maxScroll],
      [Color.lightGray, addOpacity(Color.lightGray, 0)]
    ),
  }));

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, animatedButtonStyle]}
    >
      <Ionicons name={iconName} size={20} color="black" />
    </TouchableOpacity>
  );
};

export default AnimatedHeaderIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
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
