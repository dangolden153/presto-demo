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
import { RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Transaction = ({ lastTransaction, card, datas, btc, usdt }) => {
  const navigation = useNavigation();

  const Address = "";
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log("datas :>> ", datas);
  const status =
    datas?.status === 0
      ? "pending"
      : datas?.status === 1
      ? "successful"
      : "failed";

  const failedImage = datas?.failure_pic;
  const colors =
    datas?.status === 0 ? "#ff9d3a" : datas?.status === 1 ? "green" : "#f9886c";
  const amount = card ? datas?.amount : datas?.amount;
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
              borderRadius: 15,
              paddingVertical: 10,
            }}
          >
            {card ? (
              <Image
                source={{ uri: datas?.image }}
                style={{
                  height: windowHeight * 0.19,
                  width: windowWidth * 0.6,
                  borderRadius: 15,
                }}
              />
            ) : (
              <Img height={windowHeight * 0.19} width={windowWidth * 0.7} />
            )}
          </TouchableOpacity>
          <View style={styles.gift_card}>
            {/* ******************status************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>status</Text>
              <Text style={{ color: colors }}>{status}</Text>
            </View>
            {/* ******************sub_title************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>date</Text>
              <Text style={styles.sub_title}>
                {moment(datas?.created_at).format("ll")}
              </Text>
            </View>
            {/* ******************Error detail************************ */}
            {datas?.failure ? (
              <View style={styles.img_title}>
                <Text style={styles.title}>Error detail</Text>
                <Text style={styles.sub_title}>{datas.failure}</Text>
              </View>
            ) : null}
            {/* ******************Address************************ */}
            {Address ? (
              <View style={styles.img_title}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.sub_title}>{Address}</Text>
              </View>
            ) : null}
            {/* ******************card value************************ */}
            {card && (
              <View style={styles.img_title}>
                <Text style={styles.title}>card value</Text>
                <Text style={styles.upload_text}>{datas?.value}</Text>
              </View>
            )}
            {/* ******************Amount************************ */}
            <View style={styles.img_title}>
              <Text style={styles.title}>Amount</Text>
              <Text style={styles.upload_text}>
                {/* {card && "$"} */}
                ${amount && numberWithCommas(amount)}
                {/* {prefix} */}
              </Text>
            </View>
            {/* ******************total Amount************************ */}
              <View style={styles.img_title}>
                <Text style={styles.title}>Total amount</Text>
                <Text style={styles.upload_text}>
                  N
                  {datas?.total_amount && numberWithCommas(datas?.total_amount)}
                </Text>
              </View>
            {datas?.failure_pic && (
              <View style={[styles.img_title, { alignItems: "flex-start" }]}>
                <Text style={styles.title}>Description image </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ViewImage", { failedImage })
                  }
                >
                  <Image
                    source={{ uri: datas?.failure_pic }}
                    style={{
                      height: RFValue(80, 580),
                      width: RFValue(80, 580),
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
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
    fontSize: RFValue(12, 580),
    color: "black",
    // fontWeight: "bold",
    textTransform: "capitalize",
  },

  sub_title: {
    fontSize: RFValue(10, 580),
    color: "#999999",
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
    fontSize: RFValue(10, 580),
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
