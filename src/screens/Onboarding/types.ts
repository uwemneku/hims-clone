import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../../types/Navigation";

export type OnboardingScreenParams<
  T extends keyof AuthenticationStackParamList
> = NativeStackScreenProps<AuthenticationStackParamList, T>;
