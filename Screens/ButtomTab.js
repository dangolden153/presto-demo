import React, { useContext , useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";
import {
  AntDesign,
} from "@expo/vector-icons";
import Wallet from "../components/Wallet";
import TransactionCheck from "../components/TransactionCheck";
import { Context } from "../AuthContext";
import { useDispatch,useSelector } from "react-redux";
import { USER_DATA } from "../Redux/Types/type";
const Tab = createBottomTabNavigator();




const ButtomTab = () => {
const dispatch = useDispatch()


  // ********************get user's details function *********************************
  const { token } = useContext(Context);

  useEffect(() => {
    fetchUserDetails();
  }, [token]);

  const fetchUserDetails = () => {
    let myHeaders = new Headers();
    console.log("token", token);

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
        if(result){
          dispatch({type:USER_DATA , payload: result})
          return
        }
      })
      .catch((error) => {
        setValidate("unable to process transaction");
        console.log("error", error);
      });
  };
  return (
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
