import { View } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useSharedValue } from "react-native-reanimated";
import { StartingVisitStackParamList } from "../types/Navigation";
import {
  AddressDetailsScreen,
  AnxietyQuestionScreen,
  BiggerPictureScreen,
  ContactIntroScreen,
  ContactQuestionsScreen,
  EmergencyContactDetailsScreen,
  HistoryQuestionScreen,
  HowItWorksScreen,
  LifeStyleIntroScreen,
  LifeStyleQuestionsScreen,
  MedicalProfileIntroScreen,
  QuestionnaireIntroScreen,
  QuestionnaireResultScreen,
  QuestionnaireScreenHeader,
  StartVisitingWelcomeScreen,
  TreatmentPlanIntroScreen,
} from "../screens/StartingVisit";

const { Navigator, Screen, Group } =
  createStackNavigator<StartingVisitStackParamList>();

const StartVisitingNavigator = () => {
  const progress = useSharedValue(0);
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="welcome" component={StartVisitingWelcomeScreen} />
        <Group
          screenOptions={{
            header: (props) => (
              <QuestionnaireScreenHeader
                {...props}
                questionProgress={progress}
              />
            ),
            headerShown: true,
            headerMode: "float",
          }}
        >
          <Screen
            name="QuestionnaireIntro"
            component={QuestionnaireIntroScreen}
          />
          <Screen name="HowItWorks" component={HowItWorksScreen} />
          <Screen name="AnxietyQuestion" component={AnxietyQuestionScreen} />
          <Screen
            name="QuestionnaireResult"
            component={QuestionnaireResultScreen}
          />
          <Screen name="BiggerPicture" component={BiggerPictureScreen} />
          <Screen name="HistoryQuestion" component={HistoryQuestionScreen} />
          <Screen
            name="MedicalProfileIntro"
            component={MedicalProfileIntroScreen}
          />
          <Screen name="LifeStyleIntro" component={LifeStyleIntroScreen} />
          <Screen
            name="LifeStyleQuestion"
            component={LifeStyleQuestionsScreen}
          />
          <Screen name="ContactIntro" component={ContactIntroScreen} />
          <Screen name="ContactQuestion" component={ContactQuestionsScreen} />
          <Screen
            name="EmergencyContactDetailsScreen"
            component={EmergencyContactDetailsScreen}
          />
          <Screen name="TreatmentPlan" component={TreatmentPlanIntroScreen} />
          <Screen name="AddressDetails" component={AddressDetailsScreen} />
        </Group>
      </Navigator>
    </View>
  );
};

export default StartVisitingNavigator;
