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
import { handleNotification } from "../Redux/Actions/notification";
import { useDispatch, useSelector } from "react-redux";

const NotificcationScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notificationReducer);
  const { setNotification, notifyMessage, setIsViewed, token, notification } =
    useContext(Context);
  console.log("notifications", notifications.sort());
  //   *********set notification to false on screeen is mounted and pass the message************
  useEffect(() => {
    setNotification(false);
    setIsViewed("seen");
    // console.log("isViewd useEffect notification", isViewed);
  }, []);

  useEffect(() => {
    if (notification) {
      const title = "";
      dispatch(handleNotification(token, notifyMessage, title));
      return;
    }
  }, []);

  const notif = [
    {
      time: "1:00",
      message:
        "we are one stop shop to sell your giftcards and bitcoin. fast, secured & swift payment.",
    },
    {
      time: "1:00",
      message: "Sell Your Gift Cards for Instant Cash and Naira!.",
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
          data={notif}
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
