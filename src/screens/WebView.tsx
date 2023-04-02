import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import WebView from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types/Navigation";
import LoadingAnimation from "../components/LoadingAnimation";

type Props = RootStackScreenProps<"WebView">;
const AppWebView = ({ navigation, route }: Props) => {
  const { link } = route.params;
  const { top } = useSafeAreaInsets();
  const handleClick = () => navigation.goBack();
  return (
    <View style={styles.full}>
      <View style={[styles.top, { paddingTop: top + 10 }]}>
        <Ionicons size={24} name="close" onPress={handleClick} />
      </View>

      <WebView
        onLoadEnd={() => {}}
        style={styles.full}
        source={{ uri: link }}
      />
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
  },
});
