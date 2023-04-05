import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { ComponentProps } from "react";
import { useMaterialTopScrollContext } from "./ScrollContext";
import Animated from "react-native-reanimated";

interface Props extends ComponentProps<typeof Animated.ScrollView> {}

const MaterialTopScrollWrapper = ({ onScroll, ...props }: Props) => {
  const [, setScroll] = useMaterialTopScrollContext();
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScroll(e.nativeEvent.contentOffset.y);
  };
  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}
      {...props}
    />
  );
};

export default MaterialTopScrollWrapper;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
