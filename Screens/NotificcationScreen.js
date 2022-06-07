import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { RFValue } from "react-native-responsive-fontsize";
import NotificationItem from "../components/NotificationItem";
import { Context } from "../context";
import { RegularText } from "../components/Text";
import { getIndieNotificationInbox } from "native-notify";
import env from "../config";
import { useSelector } from "react-redux";

const NotificcationScreen = () => {
  const { notificationData, setNotificationData, handleRefresh } =
    useContext(Context);
  const { user } = useSelector((state) => state.UserReducer);

  // *****set notification data array to state on mount******
  useEffect(() => {
    const getNotification = async () => {
      // let notifications = await getNotificationInbox(
      let notifications = await getIndieNotificationInbox(
        `${user?.email}`,
        env.NATIVE_NOTIFY_ID,
        `${env.NATIVE_NOTIFY_TOKEN}`
      );
      // console.log("notifications: ");
      handleRefresh();
      setNotificationData(notifications);
    };

    getNotification();
  }, []);

  if (notificationData.length === 0) {
    return (
      <View style={styles.container}>
        <NavBar title="Notification" />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <RegularText center>
            Welcome to Presto-Your reliable and one-stop Platform for converting
            all your gift cards, digital assets such as Bitcoin, USDT and other
            digital assets to NAIRA.
          </RegularText>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <NavBar title="Notification" />

      <FlatList
        data={notificationData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default NotificcationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: RFValue(15, 580),
  },
  notify_container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: RFValue(10, 580),
    marginVertical: RFValue(10, 580),
    borderColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
  },
  text: {
    fontSize: RFValue(10, 580),
    color: "#686868",
  },
  header_text: {
    fontSize: RFValue(12, 580),
    marginVertical: RFValue(3, 580),
  },
});
