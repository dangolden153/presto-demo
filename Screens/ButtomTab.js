import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";
import { AntDesign } from "@expo/vector-icons";
import Wallet from "../components/Wallet";
import { Context } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { USER_DATA } from "../Redux/Types/type";
import {
  fetchCardTransactions,
  fetchBTCTransactions,
  fetchUSDTTransactions,
  fetchCardRate,
  fetchCyptoRate,
  fetchUBTCAddress,
  fetchUSDTAddress,
} from "../Redux/Actions/crptoTransaction";
import SelectTransaction from "../components/SelectTransaction";
import { getAllBanks } from "../Redux/Actions/user";
import { useNavigation } from "@react-navigation/native";
import registerNNPushToken, { getPushDataObject } from "native-notify";

const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  const dispatch = useDispatch();
  const {
    token,
    setModalMessage,
    refresh,
    setNotification,
    setNotifyMessage,
    isViewed,
  } = useContext(Context);
  console.log("isViewd", isViewed);
  let pushDataObject = getPushDataObject();
  useEffect(() => {
    console.log("bottom pushDataObject message", pushDataObject?.message);

    if (isViewed === "pending" && pushDataObject?.message) {
      setNotification(true);
      setNotifyMessage(pushDataObject?.message);
      console.log("bottom pushDataObject message", pushDataObject?.message);

      return;
    }
  });
  // *************get user's details  **************************
  useEffect(() => {
    fetchUserDetails();
    console.log("refresh");
  }, [refresh]);

  // *************fetch card transaction **************************
  useEffect(() => {
    dispatch(fetchCardTransactions(token, setModalMessage));
  }, []);

  // *************fetch BTC transaction **************************
  useEffect(() => {
    dispatch(fetchBTCTransactions(token, setModalMessage));
  }, []);

  // *************fetch USDT transaction **************************
  useEffect(() => {
    dispatch(fetchUSDTTransactions(token, setModalMessage));
  }, []);

  // *************user details function**************************
  const fetchUserDetails = () => {
    let myHeaders = new Headers();
    // console.log("fetchUserDetails token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("users details", result);
        if (result) {
          dispatch({ type: USER_DATA, payload: result });
          return;
        }
      })
      .catch((error) => {
        // setValidate("unable to process users details");
        console.log("users details error", error);
      });
  };

  // *************fetch USDT transaction **************************
  useEffect(() => {
    dispatch(fetchCardRate(token, setModalMessage));
  }, []);

  // *************fetch all banks **************************
  useEffect(() => {
    dispatch(getAllBanks());
  }, []);

  // *************fetch cypto rate **************************
  useEffect(() => {
    dispatch(fetchCyptoRate());
  }, []);

  // *************fetch usdt wallet adddress**************************
  useEffect(() => {
    dispatch(fetchUSDTAddress());
  }, []);

  // *************fetch btc wallet adddress **************************
  useEffect(() => {
    dispatch(fetchUBTCAddress());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Tab.Navigator
        // tabBarOptions={{
        //   showLabel: false,
        // }}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            alignItems: "center",
            justifyContent: "space-between",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <View>
                <AntDesign name="home" size={24} color="black" />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <AntDesign name="wallet" size={24} color="black" />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="SelectTransaction"
          component={SelectTransaction}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <AntDesign name="clockcircleo" size={24} color="black" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <AntDesign name="user" size={24} color="black" />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ButtomTab;

const styles = StyleSheet.create({
  icon_text: {
    marginHorizontal: 10,
  },
  icon_textfocused: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  iconFocused: { color: "#F4511E" },
  icon: { color: "black" },
  textFocused: { color: "#F4511E", marginLeft: 5 },
  text: { fontSize: 16 },
});
