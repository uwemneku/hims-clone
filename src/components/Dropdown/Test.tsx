import React, { useRef, useState } from "react";
import {
  ScrollView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ScrollViewProps, View } from "react-native";

const SCROLL_VIEW_HEIGHT = 300;
const MyScrollView = () => {
  const scrollView_ref = useRef<ScrollView>(null);
  const gesture_ref = useRef<PanGestureHandler>(null);
  const scrollOffset = useSharedValue(0);
  const marginTop = useSharedValue(0);
  const scrollViewContentHeight = useSharedValue(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { start: number; initX: number; prev: number }
  >(
    {
      onStart(_, e) {
        e.initX = marginTop.value;
      },
      onActive(_, e) {
        const isScrollingDownwards = e.start < _.y;
        const isDownGestureActive =
          isScrollingDownwards && scrollOffset.value === 0;
        const isUpGestureActive =
          !isScrollingDownwards &&
          Math.round(scrollOffset.value) ===
            Math.round(scrollViewContentHeight.value);

        if (isDownGestureActive || isUpGestureActive) {
          marginTop.value += _.translationY - e.prev || 0;
        } else {
          e.prev = _.translationY;
        }

        e.start = _.y;
      },
      onEnd(_, e) {
        e.prev = 0;
      },
    },
    [scrollOffset.value]
  );

  const scrollHandler: ScrollViewProps["onScroll"] = ({ nativeEvent }) => {
    scrollOffset.value = Math.round(nativeEvent.contentOffset.y);
  };
  const setContentSize: ScrollViewProps["onContentSizeChange"] = (_, h) => {
    scrollViewContentHeight.value = h - SCROLL_VIEW_HEIGHT;
  };

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: marginTop.value }],
  }));

  return (
    <PanGestureHandler
      onGestureEvent={gestureHandler}
      ref={gesture_ref}
      simultaneousHandlers={scrollView_ref}
    >
      <Animated.View
        style={[
          containerAnimatedStyle,
          { height: SCROLL_VIEW_HEIGHT, backgroundColor: "red" },
        ]}
      >
        <ScrollView
          onScroll={scrollHandler}
          onContentSizeChange={setContentSize}
          ref={scrollView_ref}
          simultaneousHandlers={gesture_ref}
          enabled={isScrollEnabled}
        >
          {new Array(15).fill(0).map((_, i) => (
            <View
              key={i}
              style={{
                overflow: "hidden",
                height: 50,
                margin: 10,
                backgroundColor: "purple",
              }}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default MyScrollView;
