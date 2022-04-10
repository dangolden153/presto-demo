import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import pics from "../images/Memoji.png";
import { LinearGradient } from "expo-linear-gradient";

const VerifiedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HURRAY!!!</Text>

      <Image
        source={pics}
        style={{ height: 240, width: 240, resizeMode: "cover" }}
      />

      <View
        style={{
          height: 150,
          alignItems: "center",
          justifyContent: "space-between",
          overFlow: "hidden",
          marginBottom: 20,
          width: "100%",
        }}
      >
        <Text style={styles.text}>
          You have sucessfully validated your account.
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("CreatePin")}
          style={{ width: "100%" }}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            <Text style={styles.btn_text}>Contine</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifiedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
  },
  text: {
    marginTop: 15,
    color: "#666666",
    textAlign: "center",
    fontSize: 16,
  },
  header: {
    textAlign: "left",
    color: "black",
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "600",
    marginTop: 20,
  },
  btn: {
    marginTop: 80,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});
