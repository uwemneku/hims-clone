import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React, { ComponentProps } from "react";
import Color from "../../../../constants/colors";
import { images } from "../../../../constants/images";
import BaseText from "../../../../components/text";
import Divider from "../../../../components/dividers";
import { sizes } from "../../../../constants/sizes";
import { addOpacity } from "../../../../utils";

interface Props {
  title: string;
  image: ComponentProps<typeof ImageBackground>["source"];
  height: number;
}

const ProgramCard = ({ title, image, height }: Props) => {
  return (
    <View style={{ height }}>
      <BaseText size={"h2"} fontWeight="sofia_bold">
        {title}
      </BaseText>
      <Divider />
      <ImageBackground
        style={[
          { flex: 1, position: "relative", overflow: "hidden" },
          styles.container,
        ]}
        source={image}
      >
        <View style={styles.miniCard}>
          <BaseText size={"small"} fontWeight="sofia_bold" color={Color.white}>
            {title}
          </BaseText>
          <Divider size={20} />
          <BaseText
            size={"small"}
            fontWeight="sofia_curly"
            color={addOpacity(Color.white, 0.5)}
          >
            hims
          </BaseText>
        </View>
        <View>
          <BaseText size={"h1"} color={Color.white} fontWeight="sofia_bold">
            {title}
          </BaseText>
          <View style={styles.subText}>
            <BaseText
              fontWeight="SofiaSans-Light"
              size={"small"}
              color={Color.white}
              style={{ letterSpacing: 2 }}
            >
              4 weeks
            </BaseText>
            <BaseText>{"   "}</BaseText>
            <BaseText
              fontWeight="SofiaSans-Light"
              size={"small"}
              color={Color.white}
              style={{ letterSpacing: 2 }}
            >
              Dr Winks & Jones
            </BaseText>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 0.15 }} />
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    padding: sizes.padding,
    justifyContent: "space-between",
  },
  subText: {
    flexDirection: "row",
  },
  zoom: {
    position: "absolute",
    // width: "100%",
    // height: "100%",
    left: 0,
    top: 0,
  },
  miniCard: {
    width: "30%",
    minWidth: 100,
    maxWidth: 300,
    padding: sizes.padding / 2,
    backgroundColor: addOpacity(Color.white, 0.15),
    alignSelf: "flex-end",
    borderRadius: 10,
  },
});
