import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<AuthenticationStackParamList>;
  StartingConsultation: NavigatorScreenParams<StartingConsultationStackParamList>;
  HomeBottomTabs: NavigatorScreenParams<HomeBottomTabsParamsList>;
};

export type AuthenticationStackParamList = {
  GetStarted: undefined;
  SetState: undefined;
  SetDateOfBirth: undefined;
  BookAVisit: undefined;
  SignUp: undefined;
  Login: undefined;
  SetNotifications: undefined;
  Start: undefined;
};
export type StartingConsultationStackParamList = {
  welcome: undefined;
  QuestionnaireIntro: undefined;
  HowItWorks: undefined;
  AnxietyQuestion: undefined;
  QuestionnaireResult: undefined;
  BiggerPicture: undefined;
  MedicalProfileIntro: undefined;
  HistoryQuestion: undefined;
  LifeStyleIntro: undefined;
  LifeStyleQuestion: undefined;
  ContactIntro: undefined;
  ContactQuestion: undefined;
  EmergencyContactDetailsScreen: undefined;
  TreatmentPlan: undefined;
  AddressDetails: undefined;
  ConfirmAddressDetails: undefined;
  PaymentDetails: undefined;
};

export type HomeBottomTabsParamsList = {
  home: undefined;
  care: undefined;
  programs: undefined;
  shop: undefined;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type OnboardingStackScreenProps<
  T extends keyof AuthenticationStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type StartingVisitStackScreenProps<
  T extends keyof StartingConsultationStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<StartingConsultationStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
