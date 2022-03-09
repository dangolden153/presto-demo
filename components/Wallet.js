import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-elements";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import pics from "../images/bg.png";
import Card from "./Card";
import NavBar from "./NavBar";

const Wallet = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* **********NavBar********************* */}
      <NavBar title="Wallet" />

      {/* *********card wallet********************* */}
      <View style={styles.up_section}>
        <Card />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>No Transaction yet</Text>
        <Text style={styles.sub_title}>
          Any transaction you make will appear here. let's start trading!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  text_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_text: {},

  up_section: {
    // width: "100%",
    // height: 170,
    // backgroundColor: "#8CC3F2",
    // // borderRadius: 20,
    // justifyContent: "center",
    // alignItems: "center",
    flexGrow: .08,
    marginTop: 20
  },

  up_section_text: {
    fontWeight: "100",
  },
  price_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    width: 130,
    marginVertical: 7,
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
  },

  // nav: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   width: "58%",
  //   marginTop: 20,
  //   marginLeft: 10,
  //   marginBottom: 30,
  // },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },

  body: {
    backgroundColor: "#f4fafe",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 70,
  },
  sub_title: {
    fontSize: 18,
    color: "#999999",
    width: "90%",
    textAlign: "center",
    marginTop: 15,
  },
});
