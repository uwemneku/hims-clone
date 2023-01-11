import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
export const cardData: {
  iconName: ComponentProps<typeof Ionicons>["name"];
  title: string;
  details: string;
}[] = [
  {
    title: "Private online therapy sessions",
    details:
      "Confidential, secure 50 minutes conversations that priortize your needs",
    iconName: "lock-closed-outline",
  },
  {
    title: "Therapy whenever you need it",
    details: "Flexible scheduling at your pace, only $99/session",
    iconName: "card-outline",
  },
  {
    title: "Professionals who listens",
    details: "Your choice of licensed therapists",
    iconName: "md-person-outline",
  },
];
