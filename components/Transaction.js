import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import moment from "moment";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Bitcoin from "../images/btc.svg";
import USDT from "../images/usdt.svg";
import CARD from "../images/cards.svg";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Transaction = ({ lastTransaction, card, datas, btc, usdt }) => {
  const Address = "";

  const status =
    datas?.status === 0
      ? "pending"
      : datas?.status === 1
      ? "successful"
      : "failed";

  const colors =
    datas?.status === 0 ? "#ff9d3a" : datas?.status === 1 ? "green" : "#f9886c";
  const amount = card ? datas?.value : datas?.amount;
  const Img = btc ? Bitcoin : USDT;

  const [fontLoaded, error] = useFonts({
    Italic: require("../assets/fonts/raleway/Raleway-Italic.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  // *********check if data is available**************
  if (!datas) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 20, fontFamily: "Italic" }}>
          no pending transaction...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* *************************the body of transaction screen ************************* */}
      <View style={styles.body}>
        <View style={styles.card}>
          <TouchableOpacity
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
              backgroundColor: "white",
              marginBottom: 10,
            }}
          >
            {card ? (
              <Image
                source={{ uri: datas?.image }}
                style={{
                  height: windowHeight * 0.19,
                  width: windowWidth * 0.6,
                  borderRadius: 10,
                }}
              />
            ) : (
              <Img height={windowHeight * 0.19} width={windowWidth * 0.7} />
            )}
          </TouchableOpacity>
          <View style={styles.gift_card}>
            {/* ******************Amount************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>Amount</Text>
              <Text style={styles.upload_text}>${amount}</Text>
            </View>

            {/* ******************status************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>status</Text>
              <Text style={{ color: colors }}>{status}</Text>
            </View>

            {/* ******************Time************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>Time</Text>
              <Text style={styles.time}>
                {moment(datas?.created_at).format("ll")}
              </Text>
            </View>

            {/* ******************Error detail************************ */}
            {datas?.failure ? (
              <View style={styles.img_title}>
                <Text style={styles.title}> Error detail</Text>
                <Text style={styles.time}>{datas.failure}</Text>
              </View>
            ) : null}

            {/* ******************Address************************ */}
            {Address ? (
              <View style={styles.img_title}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.time}>{Address}</Text>
              </View>
            ) : null}
          </View>

          {/* ****************************Card container ************************* */}

          {/* {uploadCard ? (
            <View style={styles.upload_container}>
              <Text style={styles.upload_textI}>Kindly upload clear image</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("TransactionImage")} //SellGiftCardScreen
              >
                <View style={styles.upload_btn}>
                  <Feather name="upload" size={24} color="#999999" />
                  <Text style={styles.upload_text}>
                    Kindly upload clear picture
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
              <View
                style={{
                  // width: "100%",
                  position: "relative",
                  alignItems: "center"

                }}
              >
                <Image
                  source={{
                    uri: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
                  }}
                  style={{ height: 100, width: 200, marginVertical: 10 }}
                />
                <TouchableOpacity
                  onPress={() => togglePickCard()}
                  style={{ alignSelf: "flex-end" }}
                >
                  <Ionicons name="ios-download-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 18,
    color: "black",
    // fontWeight: "bold",
    textTransform: "capitalize",
  },
  card: {
    // width: "80%",
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    // backgroundColor: "white",
    borderRadius: 20,
  },
  gift_card: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
  },
  upload_container: {
    margin: 10,
  },
  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#999999",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
    // borderStyle:"do"
  },
  upload_text: {
    fontSize: 18,
    color: "#999999",
  },
  status_fail: {
    color: "red",
    opacity: 0.4,
  },
  status_success: {
    color: "#00C48C",
    // opacity: 0.4,
  },
  price_del: {
    alignItems: "flex-end",
  },
});
