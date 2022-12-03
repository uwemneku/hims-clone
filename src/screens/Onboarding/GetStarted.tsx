import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../components/Button";
import Color from "../../constants/colors";
import Divider from "../../components/Dividers";
import { OnboardingStackParamList } from "../../types/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import InfiniteScrollWrapper from "../../components/infiniteScroll/Wrapper";
import AppText from "../../components/Text";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { images } from "../../../assets";
type Props = NativeStackScreenProps<OnboardingStackParamList, "GetStarted">;
const GetStarted = ({ navigation, route }: Props) => {
  const opacity = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      backgroundColor: interpolateColor(
        opacity.value,
        [0, 1],
        ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]
      ),
    }),
    [opacity.value]
  );

  opacity.value = withDelay(2000, withTiming(1, { duration: 2000 }));
  const handleButtonPress = (screen: keyof OnboardingStackParamList) => () =>
    navigation.navigate(screen);
  return (
    <>
      <View style={styles.container}>
        <InfiniteScrollWrapper images={[images._3dDoctor, images.doctor]} />
        <Divider />
        <InfiniteScrollWrapper
          images={[images.doctor_burno, images._3dDoctor]}
          animationDirection="right"
        />
        <Divider />
        <InfiniteScrollWrapper images={[images.boy_doctor, images._3dDoctor]} />
      </View>
      <Animated.View style={[styles._container, animatedContainerStyle]}>
        <AppText
          fontWeight="sofia_curly"
          color={Color.white}
          align="center"
          style={{ fontSize: 50 }}
        >
          hims
        </AppText>
        <Animated.View>
          <AppText
            align="center"
            size="h1"
            fontWeight="sofia_medium"
            color={Color.white}
            style={styles.title}
          >
            Get your personalized treatment plan
          </AppText>
          <Divider size="l" />
          <Button
            label="Get Started"
            color="white"
            onPress={handleButtonPress("GetStarted")}
          />
          <Divider />
          <Button
            onPress={handleButtonPress("Login")}
            label="Login"
            variant="outlined"
            color="white"
          />
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
  },
  _container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    paddingVertical: "20%",
    paddingHorizontal: "5%",
    justifyContent: "space-around",
  },
  title: {
    marginHorizontal: 40,
  },
});
