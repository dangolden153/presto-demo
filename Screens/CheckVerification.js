import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity,  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import pics from "../images/envelop.png";
const CheckVerification = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{alignSelf:"center"}}>
      <Image
        source={pics}
        style={{ height: 250, width: 250, resizeMode: "cover" }}
      />
      <Text style={styles.text}>check your email for verification link</Text>
      <TouchableOpacity onPress={() => navigation.navigate("VerifiedScreen")}>
        <Text style={styles.link}>Resend email</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("LoginScreen")}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
        
              <Text style={styles.btn_text}>Next</Text>
         
          </LinearGradient>
        </TouchableOpacity>
    </View>
  );
};

export default CheckVerification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 20,
    justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    marginTop: 15,
    color: "#999999",
    width: 270,
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    color: "#0084F4",
    marginTop: 10,
    textAlign: "center",

  },

  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 80,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },

});
