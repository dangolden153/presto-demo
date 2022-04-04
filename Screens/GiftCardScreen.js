import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import CARD from "../images/cards.svg";
import Funds from "../images/share.svg";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const GiftCardScreen = ({ navigation }) => {
  // console.log("height :>> ", height);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar title="Sell Giftcard" />

      <View style={styles.btn_container}>
        {/* ***********postpaid****************** */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            Linking.openURL(
              "http://api.whatsapp.com/send?phone=+2347033201529"
            );
          }}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            <Funds style={{ marginBottom: RFValue(10, 580) }} />
            <Text style={styles.text}>Funds</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* **************** sell Giftcard *************************** */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SellGiftCardScreen")}
        >
          <View style={[styles.btn, styles.usdt]}>
            <CARD height={80} width={80} />

            <Text style={[styles.text, { color: "#0B365B" }]}>
              Sell Giftcard
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  btn_container: {
    width: "100%",
    marginTop: 20,
  },
  btn: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon_text: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(12, 580),
    fontFamily: "bold",
  },
  whatsapp_icon: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
  },
  usdt: {
    borderColor: "#0B365B",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 40,
  },
});

export default GiftCardScreen;
