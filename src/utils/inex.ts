import Color from "../constants/colors";

export const getAccessibleColor = (color: string) => {
  const splitted = getRGBAobject(color);

  return getBrightness(splitted) > 128 || splitted.a < 0.5 ? "black" : "white";
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
  return color.replace(/(rgb)([^)]*)([)])/g, (_, p1, p2, p3) => {
    return `${p1}a${p2},${opacity}${p3}`;
  });
};
