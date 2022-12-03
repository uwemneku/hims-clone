import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
  GetStarted: undefined;
  SetState: undefined;
  SetDateOfBirth: undefined;
  BookAVisit: undefined;
  SignUp: undefined;
  Login: undefined;
  SetNotifications: undefined;
  Start: undefined;
};
export type AppParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};
