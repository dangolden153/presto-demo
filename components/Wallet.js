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

const Wallet = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Wallet</Text>
      </View>

      {/* up section container */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ButtomTab")}
        style={styles.up_section}
      >
        <Image
          source={pics}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
            position: "absolute",
          }}
        />
        <Text style={styles.up_section_text}>Your available balance</Text>
        <View style={styles.price_icon}>
          <Text style={styles.price}>150,000,00</Text>
          <Feather name="eye" size={24} color="black" />
        </View>
        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            paddingVertical: 10,
            width: 160,
            // paddingHorizontal: 30,
            borderRadius: 10,
            marginTop: 10,
          }}
          title="withdraw"
          // raised
          // loading={loading}
          onPress={() => navigation.navigate("Withdrawal")}
        />
      </TouchableOpacity>
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
    padding: 15,
    backgroundColor: "white",
  },

  text_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_text: {},

  up_section: {
    width: "100%",
    height: 170,
    backgroundColor: "#8CC3F2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "58%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 30,
  },

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
