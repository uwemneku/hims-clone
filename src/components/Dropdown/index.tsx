import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BaseTextInput from "../TextInput/BaseTextInput";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import MyScrollView from "./Test";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const i = useSharedValue(0);

  const toggle = (trigger: "open" | "close") => () => {
    i.value = withTiming(trigger === "open" ? 1 : 0, { duration: 250 });
    setIsOpen(trigger === "open");
  };

  const animationIconStyle = useAnimatedStyle(() => {
    const rotation = interpolate(i.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotate: `${rotation}deg` }],
    };
  });
  return (
    <>
      <MyScrollView />
      <View style={styles.container}>
        <Pressable onPress={toggle("open")} style={styles.button} />
        <BaseTextInput
          placeholder="Enter a name"
          key={value}
          value={value}
          rightAdornment={
            <Animated.View style={animationIconStyle}>
              <Entypo name="chevron-small-down" size={24} color="black" />
            </Animated.View>
          }
        />
      </View>
      <Modal visible={isOpen} transparent style={{ position: "relative" }}>
        <Pressable onPress={toggle("close")} style={{ flex: 1 }} />
        <Animated.View style={[styles.bottomSheetContainer]}>
          <Animated.ScrollView />
          <View />
        </Animated.View>
      </Modal>
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  bottomSheetContainer: {
    // position: "absolute",
    bottom: 0,
    top: 0,
    backgroundColor: "red",
    height: 200,
  },
});
