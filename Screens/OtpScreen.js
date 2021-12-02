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
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";

const OtpScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showComfirmPass, setShowComfirmPass] = useState(true);

  const handleToglgle = () => {
    setShowPass(!showPass);
  };

  const handleToggle = () => {
    setShowComfirmPass(!showComfirmPass);
  };

  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <View style={styles.nav}>
        <TouchableOpacity
          style={{ position: "absolute", left: 0, top: 8 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Change Password</Text>
      </View>

      <Text style={styles.text_validation}>
        Minimum of 8 characters with at least 1 uppercase 1 lowwercase and 1
        digit
      </Text>

      <View style={styles.text_input}>
        <Text style={styles.text}>Enter OTP</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.text_input}>
        <Text style={styles.text}>New password</Text>
        <View style={styles.input_icon}>
          <TextInput
            placeholderTextColor="#999999"
            placeholder="create a new password"
            style={{ flex: 1 }}
            secureTextEntry={showPass}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <TouchableOpacity onPress={handleToglgle} style={{ marginRight: 10 }}>
            {showPass ? (
              <Ionicons name="ios-eye-off-outline" size={24} color="black" />
            ) : (
              <Ionicons name="ios-eye-outline" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/*//////////////////////// re-type password */}
      <View style={styles.text_input}>
        <Text style={styles.text}>Comfirm password</Text>
        <View style={styles.input_icon}>
          <TextInput
            placeholderTextColor="#999999"
            placeholder="create a new password"
            style={{ flex: 1 }}
            secureTextEntry={showComfirmPass}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <TouchableOpacity onPress={handleToggle} style={{ marginRight: 10 }}>
            {showPass ? (
              <Ionicons name="ios-eye-off-outline" size={24} color="black" />
            ) : (
              <Ionicons name="ios-eye-outline" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* /////////////button container */}
      <View style={styles.btnContainer}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text>Didn't recieve a code?</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: "red", marginLeft: 5 }}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SellGiftCardScreen")}
          //SecondOnboardingScreen
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#86c6fd", "#2e9bf7", "#2998f7"]}
            style={styles.btn}
          >
            <Text style={styles.btn_text}>Send code</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "white",
    position: "relative",
    // justifyContent: "center",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 70,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "semiBold",
  },

  text_validation: {
    fontFamily: "regular",
    marginBottom: 40,
    color: "#666666",
    fontWeight: "600",
    // backgroundColor: "pink",
  },
  text: {
    fontFamily: "semiBold",
    marginTop: 10,
  },
  input_icon: {
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginVertical: 10,
    borderRadius: 10,
  },

  input: {
    backgroundColor: "#f9f9f9",
    // flex: 1,
    padding: 13,
    marginVertical: 10,
    borderRadius: 10,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  error_text: {
    color: "red",
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 100,
  },
  btn: {
    marginTop: 18,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
  btnContainer: {
    // position: "absolute",
    // bottom: 30,
    width: "100%",
    alignSelf: "center",
    marginTop: 150,
  },
});
