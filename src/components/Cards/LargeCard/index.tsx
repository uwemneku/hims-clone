import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React, { ComponentProps } from "react";
import BaseText from "../../../components/text";
import Divider from "../../../components/dividers";
import Color from "../../../constants/colors";
import { addOpacity } from "../../../utils";
import ZoomImageCard from "../../../components/Cards/ZoomImageCard";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

interface Props extends ComponentProps<typeof TouchableOpacity> {
  title: string;
  details: string;
  tag: string;
  image: ImageSourcePropType;
}

const LargeCard = ({ details, image, tag, title, ...props }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.largeBox} {...props}>
      <>
        <ZoomImageCard enable style={styles.image} source={image} />
        <View style={styles.overlay}>
          <BaseText
            size="small"
            style={[
              styles.pill,
              { backgroundColor: addOpacity(Color.brown, tag ? 1 : 0) },
            ]}
            color={Color.white}
          >
            {tag}
          </BaseText>
          <View>
            <BaseText
              lineHeight={35}
              color={Color.white}
              style={{ width: "70%" }}
              size="h1"
            >
              {title}
            </BaseText>
            <Divider size="m" />
            <BaseText color={Color.white} lineHeight={24}>
              {details}
            </BaseText>
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default LargeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeBox: {
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 500,
  },
  pill: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,

    alignSelf: "flex-start",
  },
  overlay: {
    padding: 15,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: addOpacity(Color.black, 0.4),
    top: 0,
    right: 0,
  },
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
});
