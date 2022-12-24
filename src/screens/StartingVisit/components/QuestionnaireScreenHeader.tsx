import { useFocusEffect } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StartingVisitStackParamList } from "../../../types/Navigation";
import { Ionicons } from "@expo/vector-icons";
import { addOpacity } from "../../../utils/inex";
import Color from "../../../constants/colors";

type Props = StackHeaderProps & {
  questionProgress: SharedValue<number>;
};
const QuestionnaireScreenHeader = ({
  navigation,
  route,
  options,
  questionProgress,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const currentScreen = route.name as keyof StartingVisitStackParamList;

  useFocusEffect(() => {
    questionProgress.value = withTiming(screens[currentScreen] / totalScreens, {
      easing: Easing.linear,
    });
    return () => {};
  });

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${interpolate(
      questionProgress.value,
      [0, 1],
      [0, 100],
      Extrapolate.CLAMP
    )}%`,
  }));

  return (
    <View style={[{ paddingTop: top }, styles.container]}>
      <View style={styles.icons}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Ionicons name="close" size={24} color="black" />
      </View>
      <View style={{ backgroundColor: addOpacity(Color.black, 0.02) }}>
        <Animated.View style={[styles.animatedBar, animatedStyle]} />
      </View>
    </View>
  );
};

const screens: Record<keyof StartingVisitStackParamList, number> = {
  welcome: 0,
  QuestionnaireIntro: 1,
  HowItWorks: 2,
  AnxietyQuestion: 3,
  QuestionnaireResult: 4,
  BiggerPicture: 5,
  MedicalProfileIntro: 6,
  HistoryQuestion: 7,
  LifeStyleIntro: 8,
  LifeStyleQuestion: 9,
  ContactIntro: 10,
  ContactQuestion: 11,
  EmergencyContactDetailsScreen: 12,
  TreatmentPlan: 13,
};
const totalScreens = Object.keys(screens).length;

export default QuestionnaireScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
  },
  animatedBar: {
    backgroundColor: Color.black,
    padding: 5,
  },
  icons: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
});
