import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Dashboard from "../components/Dashboard";
import Transaction from "../components/Transaction";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
// import TransactionImage from "./TransactionImage";
import Wallet from "../components/Wallet";
// import Withdrawal from "./Withdrawal";
// import AddBankAccount from "./AddBankAccount";
import TransactionCheck from "../components/TransactionCheck";
// import SellBitcoin from "../components/SellBitcoin";
const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "space-between",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          elevation: 20,
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
        name="TransactionCheck"
        component={TransactionCheck}
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
