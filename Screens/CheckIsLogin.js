import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ExistingUserLogin from "./ExistingUserLogin";
import LoginScreen from "./LoginScreen";
import { Context } from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CheckIsLogin = () => {
  const { existinguser, setExistinguser, isAuthenticated } =
    useContext(Context);

  // ***************check for existing user*********************
  useEffect(() => {
    const getItems = async () => {
      try {
        const value = await AsyncStorage.getItem("@email");
        setExistinguser(value);
        // console.log("existing username fetched", value);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    getItems();
  }, [isAuthenticated]);
  //   console.log("existinguser existinguser", existinguser);

  return (
    <View style={{ flex: 1 }}>
      {existinguser !== null ? <ExistingUserLogin /> : <LoginScreen />}
    </View>
  );
};

export default CheckIsLogin;

const styles = StyleSheet.create({});
