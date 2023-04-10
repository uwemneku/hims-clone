import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../components/button";
import Color from "../../constants/colors";
import Divider from "../../components/dividers";
import InfiniteScrollWrapper from "../../components/infiniteScroll/Wrapper";
import BaseText from "../../components/text";
import Animated, {
  FadeInDown,
  FadeInUp,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { images } from "../../constants/images";
import {
  AuthenticationStackParamList,
  OnboardingStackScreenProps,
} from "../../types/Navigation";
type Props = OnboardingStackScreenProps<"GetStarted">;

const GetStarted = ({ navigation }: Props) => {
  const opacity = useSharedValue(0);

  opacity.value = withDelay(500, withTiming(1, { duration: 2000 }));
  const handleButtonPress =
    (screen: keyof AuthenticationStackParamList) => () =>
      opacity.value > 0.25 && navigation.navigate(screen); // only navigate when buttons are visible
  return (
    <>
      <View style={styles.container}>
        <InfiniteScrollWrapper images={[images.announcement, images.gummies]} />
        <Divider />
        <InfiniteScrollWrapper
          images={[images.happyCouple, images.himsPack]}
          animationDirection="right"
        />
        <Divider />
        <InfiniteScrollWrapper images={[images.tropical, images.skin]} />
      </View>
      <Animated.View
        entering={FadeInDown.delay(500).duration(500)}
        style={[styles._container]}
      >
        <BaseText
          fontWeight="sofia_curly"
          color={Color.white}
          align="center"
          style={{ fontSize: 50 }}
        >
          hims
        </BaseText>
        <Animated.View>
          <BaseText
            align="center"
            size="h2"
            fontWeight="sofia_medium"
            color={Color.white}
            style={styles.title}
          >
            Get your personalized treatment plan
          </BaseText>
          <Divider size="l" />
          <View style={{ alignItems: "center" }}>
            <Button
              label="Get Started"
              color={Color.white}
              onPress={handleButtonPress("SetState")}
            />
            <Divider />
            <Button
              onPress={handleButtonPress("Login")}
              label="Login"
              variant="outlined"
              color={Color.white}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.black,
    justifyContent: "center",
    height: "100%",
    overflow: "hidden",
  },
  _container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    paddingVertical: "20%",
    paddingHorizontal: "5%",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    marginHorizontal: 40,
  },
});
