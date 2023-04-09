import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import WebView from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types/Navigation";
import Color from "../constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type Props = RootStackScreenProps<"WebView">;
const AppWebView = ({ navigation, route }: Props) => {
  const { link } = route.params;
  const { top } = useSafeAreaInsets();
  const handleClick = () => navigation.goBack();
  const width = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value + "%",
    };
  });
  useEffect(() => {
    if (width.value >= 0) {
      width.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
    }
  }, []);
  return (
    <View style={styles.full}>
      <View style={[styles.top, { paddingTop: top + 10 }]}>
        <Ionicons size={24} name="close" onPress={handleClick} />
      </View>
      <View style={styles.full}>
        <Animated.View style={[styles.animatedLoader, animatedStyle]} />
        <WebView
          onLoad={() => {
            width.value = withTiming(-1, { duration: 500 });
          }}
          style={styles.full}
          source={{ uri: link }}
        />
      </View>
    </View>
  );
};

export default AppWebView;

const styles = StyleSheet.create({
  top: {
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
  full: {
    flex: 1,
    position: "relative",
  },
  animatedLoader: {
    height: 10,
    backgroundColor: Color.black,
    alignSelf: "center",
    top: 0,
    zIndex: 20,
  },
});
