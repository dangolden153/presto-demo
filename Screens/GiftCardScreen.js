import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import CARD from "../images/cards.svg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const GiftCardScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  console.log("height :>> ", height);
  return (
    <View style={styles.container}>
      <NavBar title="Sell Giftcard" />

      {/* ***********postpaid****************** */}
      <TouchableOpacity
        style={[styles.btn]}
        activeOpacity={0.7}
        onPress={() => {
          Linking.openURL("http://api.whatsapp.com/send?phone=+2347033201529");
        }}
      >
        <View style={styles.icon_text}>
          <TouchableOpacity
            style={[
              styles.whatsapp_icon,
              { height: RFValue(45, height), width: RFValue(38, width) },
            ]}
          >
            <FontAwesome name="whatsapp" size={40} color="#0B365B" />
          </TouchableOpacity>

          <Text style={[styles.text, { color: "#0B365B" }]}>postpaid</Text>
        </View>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </TouchableOpacity>

      {/* ***********sell Giftcard****************** */}
      <TouchableOpacity
        style={[styles.btn]}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("SellGiftCardScreen")}
      >
        <View style={styles.icon_text}>
          <TouchableOpacity
            style={[
              styles.whatsapp_icon,
              { height: RFValue(45, height), width: RFValue(38, width) },
            ]}
          >
            <CARD />
          </TouchableOpacity>

          <Text style={[styles.text, { color: "#0B365B" }]}>sell Giftcard</Text>
        </View>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    // backgroundColor: "pink",
    backgroundColor: "#f4fafe",
    padding: 15,
    borderRadius: 5,
  },
  icon_text: {
    flexDirection: "row",
  },
  text: {
    fontSize: 17,
    fontFamily: "bold",
    marginLeft: 15,
  },
  whatsapp_icon: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default GiftCardScreen;
