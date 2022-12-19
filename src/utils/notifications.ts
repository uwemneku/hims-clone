import * as Notifications from "expo-notifications";

export async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    android: {},
    ios: {
      allowAlert: true,
      allowAnnouncements: true,
    },
  });
}
