import { StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import { LinearGradient } from "expo-linear-gradient";
// import MaskedView from "@react-native-masked-view/masked-view";
import BaseText from "../index";
import MaskedView from "@react-native-masked-view/masked-view";

interface Props {
  height: number | `${string}%`;
  children: String;
  colors: string[];
  textSize: ComponentProps<typeof BaseText>["size"];
}
const GradientText = ({ height, children, colors, textSize }: Props) => {
  return (
    <>
      <MaskedView
        style={{ width: "100%" }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: "transparent",
              // flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Todo: Find a way to stop gradient text from cutting off when font-scaling is disabled */}
            <BaseText allowFontScaling={false} size={textSize} align="center">
              {children}
            </BaseText>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <LinearGradient
          style={{ height }}
          colors={colors}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        />
      </MaskedView>
    </>
  );
};

export default GradientText;

const styles = StyleSheet.create({});
