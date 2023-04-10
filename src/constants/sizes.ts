import { Dimensions, Platform } from "react-native";

const padding = 20;
const maxScreen = 900;

export const sizes = {
  padding: padding,
  productCard: { ...calcCardSize() },
  maxScreen: maxScreen,
};

export function calcCardSize(width: number = Dimensions.get("screen").width) {
  const HEIGHT = 300;
  const minMargin = 5;
  const defaultSize = 180;

  const availableSpace = Math.min(width, maxScreen) - padding * 2;
  const maxInRow = Math.max(2, Math.floor(availableSpace / defaultSize));
  const overflow = availableSpace - defaultSize * maxInRow;

  if (Math.abs(overflow) < minMargin * maxInRow) {
    return {
      width: defaultSize - minMargin,
      height: HEIGHT,
      spacing: minMargin * maxInRow,
    };
  }

  return {
    width: defaultSize + (overflow < 0 ? overflow : 0),
    height: HEIGHT,
    spacing: Math.abs(overflow),
  };
}
