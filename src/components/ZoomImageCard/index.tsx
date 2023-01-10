import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
interface Props
  extends ComponentProps<typeof View>,
    PickFromComponentProps<typeof Animated.Image, "source"> {
  /**@default false */
  enable?: boolean;
}

const ZoomImageCard = ({ style, source, enable = false, ...props }: Props) => {
  const scale = useSharedValue(1);

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: enable ? scale.value : 1 }],
  }));
  return (
    <View style={[styles.container, style, { overflow: "hidden" }]} {...props}>
      <Animated.Image
        style={[{ width: "100%", height: "100%" }, animatedImageStyle]}
        source={source}
        resizeMethod="auto"
        resizeMode="cover"
        onLayout={() => {
          scale.value = withRepeat(
            withTiming(1.2, { duration: 5000 }),
            -1,
            true
          );
        }}
      />
    </View>
  );
};

export default ZoomImageCard;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});
