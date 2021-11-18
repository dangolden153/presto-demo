import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import pics from "../images/shoe.jpg";

const VerifiedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HURRAY!!!</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/236x/ed/6a/aa/ed6aaa685737ad811ef42881507af4c1.jpg",
        }}
        style={{ height: 240, width: 240, resizeMode: "cover" }}
      />

      <View
        style={{
          height: 150,
          alignItems: "center",
          justifyContent: "space-between",
          overFlow: "hidden",
          marginBottom: 20,
        }}
      >
        <Text style={styles.text}>
          You have sucessfully validate your account
        </Text>

        <Button
          // containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            padding: 15,
            borderRadius: 10,
            width: 300,
            overFlow: "hidden",
          }}
          title="Contine"
          //   raised
          // loading={loading}
          onPress={() => navigation.navigate("CreatePin")}
        />
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
});
