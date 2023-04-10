import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useRef } from "react";
import { sizes } from "../../../constants/sizes";
import ProgramCard from "./components/ProgramCard";
import BaseText from "../../../components/text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { addOpacity, debounce } from "../../../utils";
import Color from "../../../constants/colors";
import ResponsiveWrapper from "../../../components/layout/ResponsiveWrapper";
import AppFonts from "../../../constants/fonts";
import { images } from "../../../constants/images";

const heading = [
  { title: "Sexual Health", image: images.men },
  { title: "Mental Health", image: images.smileman },
  { title: "Hair", image: images.blog3 },
  { title: "Skin", image: images.blog1 },
  { title: "Extra", image: images.happyCouple },
];

const Programs = () => {
  const aref = useAnimatedRef<Animated.ScrollView>();
  const aref1 = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useSharedValue(0);
  const activeIndex = useSharedValue(0);
  const { top } = useSafeAreaInsets();
  const { height: _h, width } = useWindowDimensions();
  const height = _h * 0.6;
  const textLayout = useSharedValue<
    Record<number | string, { x: number; width: number }>
  >({});
  const _textLayout = useRef<typeof textLayout.value>({});
  const move = debounce((i: number) => {
    const index = Math.floor((i + height * 0.3) / height);
    scr(index);
    activeIndex.value = index;
  }, 50);
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.value = e?.nativeEvent?.contentOffset?.y;
    move(scrollOffset.value);
  };

  const handleLayout = (i: number | string) => (e: LayoutChangeEvent) => {
    _textLayout.current = {
      ..._textLayout.current,
      [i]: {
        x: e?.nativeEvent?.layout?.x || 0,
        width: e?.nativeEvent?.layout?.width || 0,
      },
    };
    textLayout.value = _textLayout.current;
  };
  const scr = (i: number) => {
    aref1.current?.scrollTo({ x: textLayout.value?.[i]?.x });
  };

  const handleClick = (i: number) => () => {
    aref.current?.scrollTo({ y: i * height, animated: true });
  };

  const animatedView = useAnimatedStyle(() => ({
    width: withTiming(textLayout.value?.[activeIndex.value]?.width || 0),
    left: withTiming(textLayout.value?.[activeIndex.value]?.x || 0),
  }));
  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, 100],
      [addOpacity(Color.brown, 0.005), addOpacity(Color.brown, 0.15)]
    ),
  }));
  const animatedTitle = useAnimatedStyle(() => {
    const textCenter =
      (width - 40 - (textLayout.value?.["text"]?.width || 0)) / 2;
    const _interpolate = (range: [number, number]) => {
      return interpolate(
        scrollOffset.value,
        [0, 100],
        range,
        Extrapolate.CLAMP
      );
    };
    return {
      fontSize: _interpolate([30, 20]),
      left: _interpolate([0, textCenter]),
    };
  });

  return (
    <ResponsiveWrapper>
      <View style={{ flex: 1, backgroundColor: addOpacity(Color.brown, 0.15) }}>
        <Animated.View
          style={[styles.top, { paddingTop: top }, animatedBackground]}
        >
          <Animated.Text
            onLayout={handleLayout("text")}
            style={[styles.animatedText, animatedTitle]}
          >
            Programs
          </Animated.Text>
          <View style={{ backgroundColor: "transparent" }}>
            <Animated.ScrollView
              ref={aref1}
              style={{ position: "relative", backgroundColor: "transparent" }}
              contentContainerStyle={{
                paddingRight: 50,
                backgroundColor: "transparent",
              }}
              horizontal
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              <Animated.View style={[styles.indicator, animatedView]} />
              {heading.map((i, _i) => (
                <Pressable
                  onPress={handleClick(_i)}
                  key={i.title}
                  onLayout={handleLayout(_i)}
                >
                  <BaseText size={"small"} style={styles.headingText}>
                    {i.title}
                  </BaseText>
                </Pressable>
              ))}
            </Animated.ScrollView>
          </View>
        </Animated.View>
        <Animated.ScrollView
          ref={aref}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          snapToInterval={height}
          snapToAlignment="center"
          decelerationRate={"fast"}
          style={styles.container}
          contentContainerStyle={{ paddingBottom: height * 0.25 }}
        >
          {heading.map((i, _i) => {
            return (
              <ProgramCard image={i.image} title={i.title} key={i.title} />
            );
          })}
        </Animated.ScrollView>
      </View>
    </ResponsiveWrapper>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.padding,
    flex: 1,
  },
  top: {
    padding: sizes.padding,
    backgroundColor: "transparent",
  },
  headingText: {
    padding: 10,
  },
  indicator: {
    position: "absolute",
    backgroundColor: addOpacity(Color.black, 0.25),
    height: "100%",
    borderRadius: 20,
  },
  animatedText: {
    fontFamily: AppFonts.sofia_bold,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
});
