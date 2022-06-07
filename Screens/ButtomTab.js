import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";
import Wallet from "../components/Wallet";
import { Context } from "../context";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchUserDetails, getAllBanks } from "../Redux/Actions/user";
import { getNotification } from "../Redux/Actions/notification";
import HomeIcon from "../images/home.svg";
import WalletIcon from "../images/wallet.svg";
import HistoryIcon from "../images/history.svg";
import AccountIcon from "../images/account.svg";
import HomeFocus from "../images/home-focus.svg";
import WalletFocus from "../images/wallet-focus.svg";
import HistoryFocus from "../images/history-focus.svg";
import AccountFocus from "../images/account-focus.svg";
import {
  fetchBankDetails,
  fetchWithdrawals,
} from "../Redux/Actions/bankTransactions";
import { getUnreadIndieNotificationInboxCount } from "native-notify";
import env from "../config";

const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  const { user } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const { token, setModalMessage, refresh, setUnreadNotificationCount } =
    useContext(Context);

  // *****get Unread Notification Inbox Count******
  useEffect(() => {
    const getNotificationCount = async () => {
      // let unreadCount = await getUnreadNotificationInboxCount(
      let unreadCount = await getUnreadIndieNotificationInboxCount(
        `${user?.email}`,
        env.NATIVE_NOTIFY_ID,
        `${env.NATIVE_NOTIFY_TOKEN}`
      );
      // console.log("unreadCount: ", unreadCount);
      setUnreadNotificationCount(unreadCount);
    };

    getNotificationCount();
  }, [refresh]);
  // *************get user's details  **************************
  useEffect(() => {
    dispatch(fetchUserDetails(token));
  }, [refresh]);

  // *************fetch card transaction **************************
  useEffect(() => {
    dispatch(fetchCardTransactions(token, setModalMessage));
  }, [refresh]);

  // *************fetch BTC transaction **************************
  useEffect(() => {
    dispatch(fetchBTCTransactions(token, setModalMessage));
  }, [refresh]);

  // *************fetch USDT transaction **************************
  useEffect(() => {
    dispatch(fetchUSDTTransactions(token, setModalMessage));
  }, [refresh]);

  // *************fetch CardRate **************************
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

  // *************fetch notification **************************
  useEffect(() => {
    dispatch(getNotification(token));
  }, []);

  // *************fetch BankDetails **************************
  useEffect(() => {
    dispatch(fetchBankDetails(token));
  }, [refresh]);

  // *************fetch Withdrawals **************************
  useEffect(() => {
    dispatch(fetchWithdrawals(token));
  }, [refresh]);

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
            // borderTopStartRadius: 20,
            // borderTopEndRadius: 20,
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
              <View>{focused ? <HomeFocus /> : <HomeIcon />}</View>
            ),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <WalletFocus /> : <WalletIcon />}</View>
            ),
          }}
        />

        <Tab.Screen
          name="SelectTransaction"
          component={SelectTransaction}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <HistoryFocus /> : <HistoryIcon />}</View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>{focused ? <AccountFocus /> : <AccountIcon />}</View>
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
