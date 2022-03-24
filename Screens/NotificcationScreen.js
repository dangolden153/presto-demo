import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import NotificationItem from "../components/NotificationItem";
import { Context } from "../context";
import { getPushDataObject } from "native-notify";

const NotificcationScreen = ({ route }) => {
  // ********push notification message**************
  //   const { message } = route.params;
  //   console.log("message :>> ", message);
  const { setNotification, notifyMessage, setIsViewed } = useContext(Context);
  let pushDataObject = getPushDataObject();

  //   *********set notification to false on screeen is mounted and pass the message************
  useEffect(() => {
    setNotification(false);
    setIsViewed("seen");
    console.log("notification pushDataObject message");
  }, []);

  const notifications = [
    {
      time: "1:00",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "6:00",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "3:20",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "3:00",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "8:02",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "8:02",
      body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
    {
      time: "8:02",
      body: " In vitaeeleifend nulla. Sed rhoncus est ac aliquam cursus. Suspendisse enimneque, ultrices vel neque ut, finibus cursus libero.",
    },
  ];

  const body = " ipsum dolor sit amet, consectetur adipiscing elit. ";
  const time = "now";

  return (
    <View style={styles.container}>
      <NavBar title="Notification" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {notifyMessage !== "" ? (
          <NotificationItem body={notifyMessage} time={time} />
        ) : null}
        <FlatList
          data={notifications}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      </ScrollView>
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
