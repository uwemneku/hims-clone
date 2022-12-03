import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Color from "../../constants/colors";
import { images } from "../../../assets";

interface Props {
  /**
   * @default 'left'
   */
  animationDirection?: "left" | "right";
  images: [string, string];
}

const InfiniteScrollWrapper = ({
  animationDirection = "left",
  images,
}: Props) => {
  const { width } = useWindowDimensions();
  const isLeft = animationDirection === "left";
  const initialValue = isLeft ? 0 : -width;
  const animateTo = isLeft ? -width : 0;
  const left = useSharedValue(initialValue);
  const animatedStyle = useAnimatedStyle(() => ({ left: left.value }));

  useEffect(() => {
    left.value = initialValue; // reset animation when orientation changed
    left.value = withRepeat(
      withTiming(animateTo, { duration: 10000, easing: Easing.linear }),
      -1,
      false
    );
    return () => {
      cancelAnimation(left);
    };
  }, [left, width]);

  return (
    <View style={{ width }}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <Content images={images} />
        <Content images={images} />
      </Animated.View>
    </View>
  );
};

const Content = ({ images: image }: Pick<Props, "images">) => {
  return (
    <View style={styles.item}>
      {[Color.lightGray, Color.white].map((color, i) => (
        <View key={color} style={[styles.ball, { backgroundColor: color }]}>
          <Image
            source={image?.[i] || images._3dDoctor}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      ))}
    </View>
  );
};
export default InfiniteScrollWrapper;

const styles = StyleSheet.create({
  animatedContainer: {
    width: "200%",
    height: 300,
    flexDirection: "row",
  },
  item: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ball: {
    width: "45%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
