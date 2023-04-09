import { useNavigation } from "@react-navigation/native";
import { ComponentProps } from "react";
import AnimatedHeaderIcon from "../../AnimatedHeaderIcon/AnimatedHeaderIcon";
interface Props {
  scrollOffset: ComponentProps<typeof AnimatedHeaderIcon>["scrollOffset"];
  iconName?: ComponentProps<typeof AnimatedHeaderIcon>["iconName"];
}

const BackIcon = ({ scrollOffset, iconName = "close" }: Props): JSX.Element => {
  const navigation = useNavigation();
  const onPress = () => navigation.goBack();

  return (
    <AnimatedHeaderIcon
      scrollOffset={scrollOffset}
      iconName={iconName}
      onPress={onPress}
    />
  );
};

export default BackIcon;
