import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/core";
import { BigText } from "./Text";
import config from "../config";

const NavBar = ({ title, navigate, full }) => {
  // console.log("process.PRESTO_API :>> ", config.PRESTO_API_URL);

  const navigation = useNavigation();
  const handleNavigation = () => {
    if (!navigate) {
      navigation.goBack();
    } else {
      navigation.navigate(navigate);
    }
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", left: 0 }}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

      <BigText blackTextColor>{title}</BigText>
      {full && (
        <TouchableOpacity
          onPress={() => handleNavigation()}
          style={{ position: "absolute", right: 0 }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    position: "relative",
    // paddingHorizontal:20
  },
});
