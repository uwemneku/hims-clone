import { StyleSheet, View } from "react-native";
import Divider from "../../../components/Dividers";
import BaseText from "../../../components/Text";
import ZoomImageCard from "../../../components/ZoomImageCard";
import Color from "../../../constants/colors";

interface Props {
  /**@default false */
  enableImageAnimation?: boolean;
  height?: number;
  image: string;
  title: string;
}

const BlogPost = ({
  enableImageAnimation = false,
  height,
  image,
  title,
}: Props) => {
  return (
    <View style={[styles.container, { height }]}>
      <ZoomImageCard
        enable={enableImageAnimation}
        style={{ flex: 1, borderRadius: 20 }}
        source={image}
      />
      <Divider size="l" />
      <BaseText size="h3">{title}</BaseText>
      <Divider size="xs" />
      <BaseText color={Color.gray}>5 mins reading</BaseText>
    </View>
  );
};

export default BlogPost;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    minHeight: 300,
  },
});
