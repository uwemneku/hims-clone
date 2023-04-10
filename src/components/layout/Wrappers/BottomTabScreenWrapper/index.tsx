import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ComponentProps, FC } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Color from "../../../../constants/colors";
import BaseText from "../../../text";
import ResponsiveWrapper from "../../ResponsiveWrapper";

type IconProps = Object & {
  scrollOffset: Animated.SharedValue<number>;
};
interface CommonProps {
  leftIcon?: (props: IconProps) => JSX.Element | null;
  rightIcon?: (props: IconProps) => JSX.Element | null;
  showHeading?: boolean;
  title: string;
}

interface ScrollViewProps
  extends CommonProps,
    ComponentProps<typeof ScrollView> {
  isFlatList?: false | undefined; // default value
}
interface FlatListProps extends CommonProps, ComponentProps<typeof FlatList> {
  isFlatList: true;
}
// interface Props {
//   children: React.ReactNode | React.ReactNode[];
//   title: string;
//   leftIcon?: (props: IconProps) => JSX.Element | null;
//   rightIcon?: (props: IconProps) => JSX.Element | null;
//   contentStyle?: ViewStyle;
//   showHeading?: boolean;
// }

type Props = FlatListProps | ScrollViewProps;
type onScroll = ComponentProps<typeof ScrollView>["onScroll"];

const HeadingScreenWrapper: FC<Props> = (props) => {
  const {
    children,
    title,
    leftIcon,
    rightIcon,
    contentContainerStyle,
    showHeading,
    isFlatList,
    ..._props
  } = props;
  const scrollOffset = useSharedValue(0);
  const { top: paddingTop } = useSafeAreaInsets();

  const handleScroll: onScroll = ({ nativeEvent }) => {
    scrollOffset.value = nativeEvent.contentOffset.y;
  };
  const animatedHeaderContentStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 100],
      ["rgba(248,248,248,0)", "rgba(229, 227, 224, 0.98)"]
    ),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [0, 100],
          [100, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <ResponsiveWrapper>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedHeader,
            animatedHeaderContentStyle,
            { paddingTop: paddingTop, paddingBottom: paddingTop * 0 },
          ]}
        >
          <View style={styles.headerContent}>
            <View style={styles.iconContainer}>
              {leftIcon && leftIcon({ scrollOffset })}
            </View>
            <View style={{ flex: 1 }} />
            <Animated.View
              style={[
                styles.header,
                showHeading ? undefined : animatedTextStyle,
              ]}
            >
              <BaseText align="center" fontWeight="sofia_bold">
                {title}
              </BaseText>
            </Animated.View>
            <View style={styles.iconContainer}>
              {rightIcon && rightIcon({ scrollOffset })}
            </View>
          </View>
        </Animated.View>
        {isFlatList ? (
          <FlatList
            onScroll={handleScroll}
            scrollEventThrottle={16}
            {...props}
            contentContainerStyle={[styles.content, contentContainerStyle]}
          />
        ) : (
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={[styles.content, contentContainerStyle]}
          >
            {children}
          </ScrollView>
        )}
      </View>
    </ResponsiveWrapper>
  );
};

export default HeadingScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Color.offWhite,
  },
  content: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    paddingBottom: 200,
    backgroundColor: Color.offWhite,
  },
  animatedHeader: {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    textAlignVertical: "center",
    position: "absolute",
    width: "100%",
    textAlign: "center",
  },
  iconContainer: {
    minHeight: 35,
    zIndex: 20,
    paddingVertical: 5,
  },
});
