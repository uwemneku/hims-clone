import Color from "../constants/colors";

export const getAccessibleColor = (color: string) => {
  const rgbaColor = getRGBAobject(color);

  return getBrightness(rgbaColor) > 128 || rgbaColor.a < 0.5
    ? "black"
    : "white";
};

const getBrightness = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return (r * 299 + g * 587 + b * 114) / 1000;
};

const getRGBAobject = (color: string) => {
  const [rgbaValue] = /\(.*\)/g.exec(color) as RegExpExecArray;
  const colorArray = rgbaValue
    .replace(/\(|\)| /g, "")
    .split(",")
    .map((item) => parseInt(item));
  const colorObject = {
    r: colorArray[0],
    g: colorArray[1],
    b: colorArray[2],
    a: 1,
  };
  return colorObject;
};

export const addOpacity = (color: Color, opacity: number) => {
  "worklet"; // so it can be called in the UI thread
  return color.replace(/(rgb)([^)]*)([)])/g, (_, p1, p2, p3) => {
    return `${p1}a${p2},${opacity}${p3}`; //returns rgba format
  });
};

export function shuffleArray<T>(array: T[]) {
  const _arr = [...array];
  for (let i = _arr.length - 1; i > 0; i--) {
    const j = parseInt(
      Date.now().toString()[Math.floor(Math.random() * (i + 1))]
    );
    [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
  }
  return _arr;
}
