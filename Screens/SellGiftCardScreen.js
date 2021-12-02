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

const SellGiftCardScreen = ({ navigation }) => {
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

        <Text style={styles.header}>Sell Giftcard</Text>
      </View>
    </SafeAreaView>
  );
};

export default SellGiftCardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "white",
    position: "relative",
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
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "semiBold",
  },
});
