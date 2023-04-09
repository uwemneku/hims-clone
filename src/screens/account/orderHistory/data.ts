import { ComponentProps } from "react";
import ProductItemLayout from "../../../components/Cards/ProductItemLayout";
import { images } from "../../../constants/images";

export const list: ComponentProps<typeof ProductItemLayout>[] = [
  {
    action: "1 item • $3",
    image: images.clean,
    title: "Preparing your shipment",
    subtitle: "Hims High Tide Hydrating Cleaner",
  },
  {
    action: "1 item • $50",
    image: images.skin,
    title: "Shipped",
    subtitle: "Skin High Tide Hydrating Cleaner",
  },
];
