import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Button } from "react-native-elements";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import pics from "../images/bg.png";
import Card from "./Card";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import WalletItems from "./WalletItems";

const Wallet = () => {
  const { withdrawHistory } = useSelector(
    (state) => state.BankTransactionReducer
  );

  // console.log("withdrawHistory", withdrawHistory);
  return (
    <SafeAreaView style={styles.container}>
      {/* **********NavBar********************* */}
      <NavBar title="Wallet" />

      {/* *********card wallet********************* */}
      <View style={styles.up_section}>
        <Card />
      </View>

      <View style={styles.body}>
        {withdrawHistory?.length === 0 ? (
          <View style={{ width: "90%", alignItems: "center" }}>
            <Text style={styles.title}>No Transaction yet</Text>
            <Text style={styles.sub_title}>
              Any transaction you make will appear here. let's start trading!
            </Text>
          </View>
        ) : (
          <View style={{ width: "100%", paddingBottom: 60 }}>
            <Text style={styles.title}>Transaction History</Text>
            <FlatList
              data={withdrawHistory}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({ item }) => <WalletItems item={item} />}
            />
          </View>
        )}
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

  up_section: {
    flexGrow: 0.08,
    marginTop: 20,
  },

  body: {
    backgroundColor: "#f4fafe",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
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
