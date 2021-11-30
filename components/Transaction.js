import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const Transaction = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Transaction</Text>
      </View>

      {/* the body of transaction screen */}
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.gift_card}>
            <View style={styles.img_title}>
              <Image
                source={{
                  uri: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
                }}
                style={{ height: 70, width: 70 }}
              />
              <View style={styles.title_time}>
                <Text style={styles.title}>Gift card</Text>
                <Text style={styles.time}>2:30pm</Text>
              </View>
            </View>

            <View style={styles.price_del}>
              <Text style={styles.price}>#33,000.00</Text>
              <Text style={styles.del}>Need clear image</Text>
            </View>
          </View>

          {/* upload container */}
          <View style={styles.upload_container}>
            <Text style={styles.upload_textI}>Kindly upload clear image</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TransactionImage")}
            >
              <View style={styles.upload_btn}>
                <Feather name="upload" size={24} color="black" />
                <Text style={styles.upload_text}>
                  Kindly upload clear picture
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

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
    width: "65%",
    marginTop: 20,
    marginLeft: 10,
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
    // height: ,
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
  },
  card: {
    // width: "80%",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  upload_container: {
    margin: 10,
  },
  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 30,
    // borderStyle:"do"
  },
  upload_textI: {
    fontSize: 18,
    fontWeight: "500",
  },
  del: {
    color: "red",
    // opacity
  },
});
