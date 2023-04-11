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
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { addOpacity, debounce } from "../../../utils";
import Color from "../../../constants/colors";
import ResponsiveWrapper from "../../../components/layout/ResponsiveWrapper";
import AppFonts from "../../../constants/fonts";
import { heading } from "./components/data";

type Layout = Record<number | string, { x: number; width: number }>;

const Programs = () => {
  const { top } = useSafeAreaInsets();
  const { height: _h, width } = useWindowDimensions();
  const cardHeight = _h * 0.6;

  const contentScrollRef = useRef<Animated.ScrollView>(null);
  const headingScrollRef = useRef<Animated.ScrollView>(null);

  const contentScrollOffset = useSharedValue(0);
  const activeIndex = useSharedValue(0);

  const cachedLayout = useSharedValue<Layout>({});
  const _cachedLayout = useRef<Layout>({}); // used to copy objects to a shared value

  const cacheLayout = (i: number | string) => (e: LayoutChangeEvent) => {
    //a ref is used to copy object values because reanimated worklets do not support the spread operation
    _cachedLayout.current = {
      ..._cachedLayout.current,
      [i]: {
        x: e?.nativeEvent?.layout?.x || 0,
        width: e?.nativeEvent?.layout?.width || 0,
      },
    };
    cachedLayout.value = _cachedLayout.current;
  };

  const moveIndicator = debounce((contentScrollOffset: number) => {
    const headingIndex = Math.floor(
      (contentScrollOffset + cardHeight * 0.3) / cardHeight
    );
    scrollHeading(headingIndex);
    activeIndex.value = headingIndex;
  }, 50);

  const onContentScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    contentScrollOffset.value = e?.nativeEvent?.contentOffset?.y || 0;
    moveIndicator(contentScrollOffset.value);
  };

  const scrollHeading = (headingIndex: number) => {
    headingScrollRef.current?.scrollTo({
      x: cachedLayout.value?.[headingIndex]?.x || 0,
    });
  };

  const scrollContent = (headingIndex: number) => () => {
    contentScrollRef.current?.scrollTo({
      y: headingIndex * cardHeight,
      animated: true,
    });
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    width: withTiming(cachedLayout.value?.[activeIndex.value]?.width || 0),
    left: withTiming(cachedLayout.value?.[activeIndex.value]?.x || 0),
  }));
  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      contentScrollOffset.value,
      [0, 100],
      [addOpacity(Color.brown, 0.005), addOpacity(Color.brown, 0.15)]
    ),
  }));
  const animatedTitleStyle = useAnimatedStyle(() => {
    const _interpolate = (range: [number, number]) => {
      return interpolate(
        contentScrollOffset.value,
        [0, 100],
        range,
        Extrapolate.CLAMP
      );
    };
    const textCenter =
      (width - sizes.padding * 2 - (cachedLayout.value?.["text"]?.width || 0)) /
      2;

    return {
      fontSize: _interpolate([30, 20]),
      left: _interpolate([0, textCenter]),
    };
  });

  return (
    <ResponsiveWrapper>
      <View style={{ flex: 1, backgroundColor: addOpacity(Color.brown, 0.15) }}>
        <Animated.View
          style={[styles.top, { paddingTop: top }, animatedBackgroundStyle]}
        >
          <Animated.Text
            onLayout={cacheLayout("text")}
            style={[styles.animatedText, animatedTitleStyle]}
          >
            Programs
          </Animated.Text>
          <View style={{ backgroundColor: "transparent" }}>
            <Animated.ScrollView
              ref={headingScrollRef}
              style={{ position: "relative", backgroundColor: "transparent" }}
              contentContainerStyle={{
                paddingRight: 50,
                backgroundColor: "transparent",
              }}
              horizontal
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              <Animated.View
                style={[styles.indicator, animatedIndicatorStyle]}
              />
              {heading.map((item, index) => (
                <Pressable
                  onPress={scrollContent(index)}
                  key={item.title}
                  onLayout={cacheLayout(index)}
                >
                  <BaseText size={"small"} style={styles.headingText}>
                    {item.title}
                  </BaseText>
                </Pressable>
              ))}
            </Animated.ScrollView>
          </View>
        </Animated.View>
        <Animated.ScrollView
          ref={contentScrollRef}
          onScroll={onContentScroll}
          scrollEventThrottle={16}
          snapToInterval={cardHeight}
          snapToAlignment="center"
          decelerationRate={"fast"}
          style={styles.container}
          contentContainerStyle={{ paddingBottom: cardHeight * 0.25 }} // extra padding to ensure the last indicator is highted
        >
          {heading.map((item) => {
            return (
              <ProgramCard
                height={cardHeight}
                image={item.image}
                title={item.title}
                key={item.title}
              />
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
    padding: sizes.padding / 2,
  },
  indicator: {
    position: "absolute",
    backgroundColor: addOpacity(Color.black, 0.25),
    height: "100%",
    borderRadius: 20,
  },
  animatedText: {
    fontFamily: AppFonts.sofia_bold,
    paddingVertical: sizes.padding / 2,
    alignSelf: "flex-start",
  },
});
