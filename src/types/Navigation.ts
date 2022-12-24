import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  StartingVisit: NavigatorScreenParams<StartingVisitStackParamList>;
};

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
export type StartingVisitStackParamList = {
  welcome: undefined;
  QuestionnaireIntro: undefined;
  HowItWorks: undefined;
  AnxietyQuestion: undefined;
  QuestionnaireResult: undefined;
  UnderstandingResults: undefined;
  BiggerPicture: undefined;
  MedicalProfileIntro: undefined;
  HistoryQuestion: undefined;
  LifeStyleIntro: undefined;
  LifeStyleQuestion: undefined;
  ContactIntro: undefined;
};

//TODO: delete this if not used
export type HistoryQuestionsStackParamList = {
  question_1: undefined;
  question_2: undefined;
  question_3: undefined;
  question_4: undefined;
  question_5: undefined;
  question_6: undefined;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type OnboardingStackScreenProps<
  T extends keyof OnboardingStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<OnboardingStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type StartingVisitStackScreenProps<
  T extends keyof StartingVisitStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<StartingVisitStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
