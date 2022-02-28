import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavBar from "../components/NavBar";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

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
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            <Text style={styles.text}>Sell Bitcoin</Text>

            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        {/* **************** sell bitcoin *************************** */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SellUsdtScreen")}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            <Text style={styles.text}>Sell USDT</Text>

            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </LinearGradient>
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
    marginTop: 40,
  },
  btn: {
    // marginTop: 50,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "semibold",
  },
});
