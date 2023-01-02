import { StyleSheet, View } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Color from "../../../constants/colors";
import { bottomTabData } from "./data";
import { TouchableOpacity } from "react-native-gesture-handler";
import BaseText from "../../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../../../components/Dividers";
import Animated from "react-native-reanimated";
import { HomeBottomTabsParamsList } from "../../../types/Navigation";
interface Props extends BottomTabBarProps {}
const TabBar = ({ navigation, state }: Props) => {
  const currentRoute = state.routeNames[state.index];
  const getColor = (route: string) => {
    return currentRoute === route ? Color.black : Color.gray;
  };
  const handleClick = (route: string) => () => {
    navigation.navigate(route);
  };
  return (
    <Animated.View style={styles.container}>
      {bottomTabData.map((data) => (
        <TouchableOpacity
          onPress={handleClick(data.routeName)}
          key={data.title}
          style={styles.item}
        >
          <Ionicons
            name={data.iconName}
            color={getColor(data.routeName)}
            size={24}
          />
          <Divider size="xs" />
          <BaseText size="small" color={getColor(data.routeName)}>
            {data.title}
          </BaseText>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
  },
});
