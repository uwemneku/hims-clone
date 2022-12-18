import { Modal, Pressable, StyleSheet, View } from "react-native";
import React, { useState, useRef } from "react";
import BaseTextInput from "../TextInput/BaseTextInput";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import BottomSheet, { BottomSheetRef } from "./BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Color from "../../constants/colors";

interface Props<T> {
  value?: string;
  data: T[];
  renderItem(item: T): JSX.Element;
  keyExtractor(item: T): string;
  placeholder?: string;
  closeOnSelect?: boolean;
}

const DropDown = <T,>({
  data,
  placeholder,
  value,
  keyExtractor,
  renderItem,
  closeOnSelect,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const i = useSharedValue(0);
  const prevValue = useRef(value);
  const bottomSheet_Ref = useRef<BottomSheetRef>(null);

  const toggle = (trigger: "open" | "close") => () => {
    i.value = withTiming(trigger === "open" ? 1 : 0, { duration: 250 });
    setIsOpen(trigger === "open");
  };

  if (closeOnSelect && prevValue.current !== value) {
    bottomSheet_Ref.current?.close();
  }
  prevValue.current = value;

  const animationIconStyle = useAnimatedStyle(() => {
    const rotation = interpolate(i.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotate: `${rotation}deg` }],
    };
  });

  function l() {
    toggle("close")();
  }
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={toggle("open")} style={styles.button} />
        <BaseTextInput
          placeholder={placeholder}
          value={value}
          rightAdornment={
            <Animated.View style={animationIconStyle}>
              <Entypo name="chevron-small-down" size={24} color="black" />
            </Animated.View>
          }
        />
      </View>
      {isOpen && (
        <BottomSheet open={isOpen} ref={bottomSheet_Ref} onRequestClose={l}>
          <>
            {data.map((i) => (
              <View key={keyExtractor(i)}>{renderItem(i)}</View>
            ))}
          </>
        </BottomSheet>
      )}
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
});
