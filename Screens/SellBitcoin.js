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
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const SellBitcoin = ({ navigation }) => {
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

        <Text style={styles.header}>Sell Bitcoin</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity>
          <AntDesign
            style={styles.code}
            name="qrcode"
            size={200}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.btc_address}>BTC Wallet Details</Text>
        <Text style={styles.btc_address}>3nofvnodslrdt67yuyullgfdXd</Text>
        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            padding: 15,
            borderRadius: 10,
            width: 350,
            fontSize: 17,
            marginTop: 5,
          }}
          title="Click to copy"
          // raised
          // loading={loading}
          //   onPress={() => navigation.navigate("CheckVerification")}
        />
        <Text style={styles.btc_text}>
          the address and the barcode are yours you can recieve bitcoin and
          please provide proof
        </Text>
        <View style={styles.upload_container}>
          <Text style={styles.upload_textI}>Kindly upload Proof</Text>
          <TouchableOpacity style={styles.upload_btn}>
            <Feather name="upload" size={24} color="black" />
            <Text style={styles.upload_text}> Upload Proof</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btc_table}>
          <Text style={styles.rate_header}>Sell Bitcoin</Text>

          <View style={styles.value_table}>
            <View style={styles.value_rates}>
              <Text style={styles.value_header}>Value</Text>
              <Text style={styles.value_header}>Rate </Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>less that 100</Text>
              <Text style={styles.value}>520</Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>100+ to 1,000</Text>
              <Text style={styles.value}>535</Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>Above 1,000</Text>
              <Text style={styles.value}>550</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SellBitcoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "68%",
    marginTop: 20,
    marginLeft: 10,
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    // textAlign: "center",
    // alignItems: "center",
  },

  body: {
    backgroundColor: "#f4fafe",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    // paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
  },
  time: {
    // fontSize: 18,
    color: "#999999",
  },

  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 20,
    padding: 7,
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  status_fail: {
    color: "red",
    opacity: 0.4,
  },
  status_success: {
    color: "#00C48C",
    // opacity: 0.4,
  },
  price_status: {
    width: "40%",
  },
  btc_address: {
    fontSize: 18,
    fontWeight: "100",
    marginVertical: 2,
    color: "#666666",
  },
  btc_text: {
    fontSize: 14,
    color: "#999999",
    textAlign: "center",
    marginTop: 10,
  },
  upload_container: {
    marginTop: 20,
    width: "100%",
  },
  upload_textI: {
    fontSize: 18,
    fontWeight: "500",
  },
  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
    borderColor: "#999999",
    // borderStyle:"do"
  },
  upload_text: {
    fontSize: 18,
    color: "#999999",
    marginLeft: 10,
    fontWeight: "100",
  },

  btc_table: {
    padding: 10,
    // paddingHorizontal: 70,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
  },
  rate_header: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  value_table: {
    width: "70%",
    marginTop: 7,
  },
  value_rates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value_header: {
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "flex-start",
    minWidth: 80,
  },
  value: {
    minWidth: 80,
    marginTop: 10,
    color: "#999999",
    fontSize: 16,
  },
});
