import React, { useRef, forwardRef, useImperativeHandle } from "react";
import {
  ScrollView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  ScrollViewProps,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
  Pressable,
  Modal,
  useWindowDimensions,
} from "react-native";
import Color from "../../constants/colors";
import { addOpacity } from "../../utils";

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  open: boolean;
  onRequestClose(): void;
}
const minHeight = 100;
export type BottomSheetRef = {
  /**This calls the requestOnClose function after animation */
  close(): void;
};
const BottomSheet = forwardRef<BottomSheetRef, Props>(
  ({ children, style, onRequestClose, open }, ref) => {
    const scrollView_ref = useRef<ScrollView>(null);
    const gesture_ref = useRef<PanGestureHandler>(null);
    const scrollOffset = useSharedValue(0);
    const marginTop = useSharedValue(200);
    const viewHeight = useSharedValue(0);
    const contentHeight = useSharedValue(0);

    const isDraggingBar = useSharedValue(false);

    // animated to position on load
    if (open && marginTop.value > 150) {
      marginTop.value = withTiming(minHeight, {
        duration: 250,
        easing: Easing.ease,
      });
    }

    const gestureHandler = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      {
        moveY: number;
        prev: number;
        isDownGestureActive: boolean;
        initY: number;
      }
    >(
      {
        onStart(_, e) {
          e.initY = marginTop.value;
        },
        onActive(_, e) {
          const isScrollingDownwards = e?.moveY < _.y;
          e.isDownGestureActive =
            isScrollingDownwards && scrollOffset.value === 0;

          if (isDraggingBar.value) {
            marginTop.value = _.translationY + e.initY;
          } else if (e.isDownGestureActive) {
            marginTop.value += _.translationY - e.prev || 0;
          } else {
            e.prev = _.translationY; // save how far user has scrolled
          }

          e.moveY = _.y;
        },
        onEnd(_, e) {
          e.prev = 0;
          isDraggingBar.value = false;
          if (marginTop.value > minHeight) {
            runOnJS(close)();
          } else {
            marginTop.value = withSpring(0, { overshootClamping: true });
          }
        },
      },
      [scrollOffset.value]
    );

    const scrollHandler: ScrollViewProps["onScroll"] = ({ nativeEvent }) => {
      scrollOffset.value = Math.round(nativeEvent.contentOffset.y);
      const spaceToScroll = contentHeight.value - viewHeight.value;
      const progress = Number(
        Math.abs(scrollOffset.value / spaceToScroll).toFixed(2)
      );
      if (progress > 0.5) {
        marginTop.value = withTiming(0, {
          duration: 250,
          easing: Easing.ease,
        });
      }
    };
    const setContentSize: ScrollViewProps["onContentSizeChange"] = (_, h) => {
      contentHeight.value = h;
    };
    const onTouchStart = (e: GestureResponderEvent) => e.stopPropagation();

    const containerAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: Math.max(marginTop.value, 0) }], // prevent bottom sheet from moving upwards,
      flex: 1,
    }));
    function close() {
      marginTop.value = withTiming(
        viewHeight.value + 200,
        {
          duration: 250,
          easing: Easing.ease,
        },
        () => {
          runOnJS(onRequestClose)();
        }
      );
    }

    useImperativeHandle(ref, () => ({
      close,
    }));

    return (
      <Modal
        visible={open}
        animationType="slide"
        style={{ position: "absolute" }}
        transparent
        onRequestClose={close}
      >
        <Pressable
          onPress={close}
          style={{
            flex: 1,
            backgroundColor: addOpacity(Color.black, 0.25),
          }}
        />
        <GestureHandlerRootView
          style={{
            height: "50%",
            backgroundColor: addOpacity(Color.black, 0.25),
          }}
          onTouchStart={close}
        >
          <PanGestureHandler
            onGestureEvent={gestureHandler}
            ref={gesture_ref}
            simultaneousHandlers={scrollView_ref}
          >
            <Animated.View
              style={[
                styles.bottomSheetContainer,
                containerAnimatedStyle,
                style,
              ]}
              onLayout={({ nativeEvent }) => {
                viewHeight.value = nativeEvent.layout.height;
                viewHeight.value = nativeEvent.layout.height;
              }}
              onTouchStart={onTouchStart}
            >
              <View
                onTouchStart={() => {
                  isDraggingBar.value = true;
                }}
                onTouchEnd={() => {
                  isDraggingBar.value = false;
                }}
                style={styles.bar}
              >
                <View style={styles.bar_inner} />
              </View>
              <ScrollView
                onScroll={scrollHandler}
                onContentSizeChange={setContentSize}
                ref={scrollView_ref}
                style={styles.scrollView}
                simultaneousHandlers={gesture_ref}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: minHeight }}
              >
                {children}
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    overflow: "hidden",
  },
  scrollView: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 20,
    backgroundColor: Color.white,
  },
  bar: {
    padding: 10,
  },
  bar_inner: {
    alignSelf: "center",
    width: "20%",
    backgroundColor: Color.white,
    height: 5,
    borderRadius: 20,
  },
});
export default BottomSheet;
