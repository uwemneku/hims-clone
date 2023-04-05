import { StyleSheet } from "react-native";
import React, { FC, PropsWithChildren, useCallback, useContext } from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

const MaterialTopScrollContext = React.createContext<
  [scrollOffset: Animated.SharedValue<number>, setOffset: (i: number) => void]
>([{ value: 0 }, () => {}]);
export const useMaterialTopScrollContext = () =>
  useContext(MaterialTopScrollContext);

const MaterialTopScrollContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const scrollOffset = useSharedValue(0);
  const updateScrollOffset = useCallback((i: number) => {
    console.log(i);

    scrollOffset.value = i;
  }, []);
  return (
    <MaterialTopScrollContext.Provider
      value={[scrollOffset, updateScrollOffset]}
    >
      {children}
    </MaterialTopScrollContext.Provider>
  );
};

export default MaterialTopScrollContextProvider;

const styles = StyleSheet.create({});
