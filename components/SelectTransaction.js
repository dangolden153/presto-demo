import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import Bitcoin from "../images/btc.svg";
import USDT from "../images/usdt.svg";
import Card from "../images/cards.svg";

import NavBar from "./NavBar";
import { useNavigation } from "@react-navigation/core";

const SelectTransaction = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavBar title="Select Transaction" />
      <View style={styles.body}>
        {/* *********************Bitcoin*************************** */}
        <TouchableOpacity
          style={styles.btn}
          // activeOpacity={0.7}
          onPress={() => navigation.navigate("BtcTransactions")}
        >
          <Bitcoin />
          <Text style={styles.text}> Bitcoin</Text>
        </TouchableOpacity>

        {/* *********************Gift card*************************** */}

        <TouchableOpacity
          style={styles.btn}
          // activeOpacity={0.7}
          onPress={() => navigation.navigate("TransactionHistory")}
        >
          <Card />
          <Text style={styles.text}> Gift card</Text>
        </TouchableOpacity>

        {/* *********************usdt*************************** */}

        <TouchableOpacity
          style={styles.btn}
          // activeOpacity={0.7}
          onPress={() => navigation.navigate("UsdtTransactions")}
        >
          <USDT />
          <Text style={styles.text}> USDT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  },
  body: {
    backgroundColor: "#f4fafe",
    flex: 1,
    // alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  btn: {
    // marginTop: 50,
    width: "100%",
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 5
  },
  text: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 17
  }
});
