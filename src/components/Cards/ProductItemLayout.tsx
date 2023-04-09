import { Image, StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import Color from "../../constants/colors";
import { addOpacity } from "../../utils";
import BaseText from "../Text";
import Divider from "../Dividers";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface Props extends ComponentProps<typeof TouchableOpacity> {
  image: ComponentProps<typeof Image>["source"];
  title: string;
  subtitle: string;
  action: string | JSX.Element;
  disable?: string;
}

const ProductItemLayout = ({
  action,
  image,
  subtitle,
  title,
  style,
  onPress,
  ...props
}: Props) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const handlePress = () => {
    scale.value = withSequence(
      withTiming(0.8, { duration: 250 }),
      withTiming(1, { duration: 150 }, (isFinished) => {
        if (isFinished) {
          onPress && runOnJS(onPress)();
        }
      })
    );
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={handlePress}
      {...props}
    >
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image
          source={image}
          style={{ width: "140%", height: "140%" }}
          resizeMode="contain"
        />
      </Animated.View>
      <Divider dir="horizontal" />
      <View style={styles.details}>
        <BaseText fontWeight="sofia_bold">{title}</BaseText>
        <BaseText size={"small"} fontWeight="sofia_bold">
          {subtitle}
        </BaseText>
        {typeof action === "string" ? (
          <BaseText size="small" color={Color.darkGray}>
            {action}
          </BaseText>
        ) : (
          action
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemLayout;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: addOpacity(Color.brown, 0.3),
    padding: 10,
    borderRadius: 15,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flex: 1,
    padding: 10,
  },
});
