import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import pics from "../images/shoe.jpg";
const CheckVerification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.collinsdictionary.com/images/thumb/envelope_107579642_250.jpg",
        }}
        style={{ height: 170, width: 170, resizeMode: "cover" }}
      />
      <Text style={styles.text}>check your email for verification link</Text>
      <TouchableOpacity onPress={() => navigation.navigate("VerifiedScreen")}>
        <Text style={styles.link}>Resend email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 15,
    color: "#999999",
    width: 270,
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    color: "#0084F4",
    marginTop: 10,
  },
  //   header_container: {
  //     alignItems: "flex-start",
  //     marginLeft: 15,
  //     marginTop: 50,
  //   },
});
