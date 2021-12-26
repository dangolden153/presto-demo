import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TransactionCheck = ({ navigation }) => {
  const data = [
    {
      title: "Gift card",
      time: "2:30",
      img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
      price: "#33,000.00",
      status: "Failed",
      statusValue: "Failed",
    },
    {
      title: "Gift card",
      time: "2:30",
      img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
      price: "#33,000.00",
      status: "Sucessful",
      statusValue: "Sucessful",
    },
    {
      title: "Gift card",
      time: "2:30",
      img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
      price: "#33,000.00",
      status: "need a clear image",
      statusValue: "Failed",
    },
    {
      title: "Gift card",
      time: "2:30",
      img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
      price: "#33,000.00",
      status: "need a clear reciept",
      statusValue: "Failed",
    },
  ];
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

        <Text style={styles.header}>Transaction</Text>
      </View>
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder="Search Transaction" />

        {data.map((datas, i) => (
          <View key={i} style={styles.gift_card}>
            <View style={styles.img_title}>
              <Image
                source={{ uri: datas.img }}
                style={{
                  height: 90,
                  width: 70,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <View style={styles.title_time}>
                <Text style={styles.title}>{datas.title}</Text>
                <Text style={styles.time}>{datas.time}</Text>
              </View>
            </View>

            <View style={styles.price_status}>
              <Text style={{ fontSize: 19 }} style={styles.time}>
                {datas.price}
              </Text>
              <Text
                style={
                  datas.statusValue === "Failed"
                    ? styles.status_fail
                    : styles.status_success
                }
              >
                {datas.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TransactionCheck;

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
    marginBottom: 30,
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
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
  },
  time: {
    // fontSize: 18,
    color: "#999999",
  },

  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
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
});