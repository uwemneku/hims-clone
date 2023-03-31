import { StyleSheet, useWindowDimensions, View } from "react-native";
import React, { useEffect } from "react";
import Button from "../../../components/Button";
import Color from "../../../constants/colors";
import Divider from "../../../components/Dividers";
import BaseText from "../../../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { addOpacity } from "../../../utils";
import NotificationAnimation from "./NotificationAnimation";
import { requestPermissionsAsync } from "../../../utils/notifications";
import { OnboardingStackScreenProps } from "../../../types/Navigation";
import { ScrollView } from "react-native-gesture-handler";

type Props = OnboardingStackScreenProps<"SetNotifications">;

const SetNotifications = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const navigateToStartVisit = () =>
    navigation.navigate("StartingConsultation", { screen: "welcome" });
  const handleAllowNotification = () => {
    requestPermissionsAsync().then(() => {
      navigateToStartVisit();
    });
  };

  useEffect(() => {
    const preventBackButton = (e: { preventDefault(): void }) => {
      e.preventDefault();
    };
    navigation.addListener("beforeRemove", preventBackButton);
    return () => {
      navigation.removeListener("beforeRemove", preventBackButton);
    };
  }, []);

  return (
    <ScrollView style={styles.container} scrollEventThrottle={16}>
      <View
        style={{
          height: Math.max(height * 0.65, 400),
          position: "relative",
          minHeight: 500,
        }}
      >
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(192,212,210,1)", "transparent"]}
        />
        <View style={styles.frame} />
        <LinearGradient
          style={styles.gradient}
          colors={["transparent", "white"]}
        />
        <View style={styles.notifications}>
          <NotificationAnimation delay={0} />
          <NotificationAnimation endScale={0.9} delay={500} />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.textContainer}>
          <BaseText size="h1">Don't miss anything</BaseText>
          <Divider size="m" />
          <BaseText color={Color.gray}>
            Allow notifications from us to stay on top of communications with
            your DOC, or receive shipping updates
          </BaseText>
        </View>
        <Button
          onPress={handleAllowNotification}
          label={"Allow notifications"}
        />
        <Divider size="m" />
        <Button
          onPress={navigateToStartVisit}
          color={Color.lightGray}
          label={"Not right now"}
        />
      </View>
    </ScrollView>
  );
};

export default SetNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginBottom: "10%",
    flex: 1,
  },
  gradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  frame: {
    flex: 1,
    marginHorizontal: "10%",
    marginTop: 60,
    borderWidth: 12,
    borderBottomWidth: 0,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderColor: addOpacity(Color.black, 0.25),
    backgroundColor: Color.white,
  },
  notifications: {
    position: "absolute",
    width: "100%",
    top: "30%",
    marginHorizontal: "8%",
    alignSelf: "center",
  },
});
