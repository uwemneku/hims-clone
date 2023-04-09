import { ComponentProps } from "react";
import { HomeBottomTabsParamsList } from "../../../types/Navigation";
import { Ionicons } from "@expo/vector-icons";

type IconName = ComponentProps<typeof Ionicons>["name"];
export const bottomTabData: {
  title: string;
  routeName: keyof HomeBottomTabsParamsList;
  iconName: IconName;
}[] = [
  {
    title: "Home",
    routeName: "home",
    iconName: "home",
  },
  {
    title: "Care",
    routeName: "care",
    iconName: "chatbox-ellipses-sharp",
  },
  {
    title: "Programs",
    routeName: "programs",
    iconName: "reader-sharp",
  },
  {
    title: "Shop",
    routeName: "shop",
    iconName: "cart-sharp",
  },
];
