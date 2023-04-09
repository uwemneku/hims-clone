import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Color from "../../../constants/colors";
import { bottomTabData } from "./data";
import { TouchableOpacity } from "react-native-gesture-handler";
import BaseText from "../../../components/text";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../../../components/dividers";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { sizes } from "../../../constants/sizes";
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
    <View style={{ backgroundColor: Color.white }}>
      <Animated.View style={styles.container}>
        {bottomTabData.map((data) => (
          <TabIcon
            currentRoute={currentRoute}
            onPress={handleClick(data.routeName)}
            key={data.title}
            color={getColor(data.routeName)}
            title={data.title}
            routeName={data.routeName}
            iconName={data.iconName}
          />
        ))}
      </Animated.View>
    </View>
  );
};

const TabIcon: FC<
  {
    onPress(): void;
    color: string;
    currentRoute: string;
  } & typeof bottomTabData[number]
> = ({ onPress, color, iconName, title, currentRoute, routeName }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(currentRoute === routeName ? 1 : 0.9) }],
  }));
  return (
    <View>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity onPress={onPress} style={styles.item}>
          <Ionicons name={iconName} color={color} size={24} />
          <Divider size="xs" />
          <BaseText size="small" color={color}>
            {title}
          </BaseText>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    width: "100%",
    maxWidth: sizes.maxScreen,
  },
  item: {
    alignItems: "center",
  },
});
