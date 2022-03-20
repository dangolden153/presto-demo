import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import NavBar from "../components/NavBar";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Bitcoin from "../images/Bitcoin.svg";
import USDT from "../images/usdt.svg";

const CryptoScreen = ({ navigation }) => {
  const [fontLoaded, error] = useFonts({
    // regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <View style={styles.btn_container}>
        {/* **************** sell bitcoin *************************** */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SellBitcoin")}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            {/* <MaterialIcons name="arrow-forward-ios" size={24} color="white" /> */}
            <Bitcoin height={80} width={80} />
            <Text style={styles.text}>Sell Bitcoin</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* **************** sell usdt *************************** */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SellUsdtScreen")}
        >
          <View style={[styles.btn, styles.usdt]}>
            <USDT height={80} width={80} />

            <Text style={[styles.text, { color: "#0B365B" }]}>Sell USDT</Text>

            {/* <MaterialIcons name="arrow-forward-ios" size={24} color="white" /> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CryptoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    position: "relative",
  },
  btn_container: {
    width: "100%",
    marginTop: 20,
  },
  btn: {
    // marginTop: 50,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginVertical: 10,
  },
  usdt: {
    borderColor: "#0B365B",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 40,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "bold",
  },
});
