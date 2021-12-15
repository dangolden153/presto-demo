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
  ScrollView
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import DropdownGiftcard from "../components/Dropdown/DropdownGiftcard";
import DropdownCountry from "../components/Dropdown/DropdownCountry";
import DropdownCardType from "../components/Dropdown/DropdownCardType";
import GiftcardValue from "../components/Dropdown/GiftcardValue";

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

      <  ScrollView
      showsVerticalScrollIndicator={false}
 style={styles.body}>
        <DropdownGiftcard />
        <DropdownCountry />
        <DropdownCardType />
        <GiftcardValue />

        <View style={styles.text_input}>
          <Text style={{fontSize:16, fontFamily:"regular", marginBottom:5, alignSelf:"flex-start"}}>Amount</Text>
          <TextInput placeholder="$Enter the amount" style={styles.input} />
        </View>

        <View style={styles.rate_container}>
        <View style={styles.rate}>
        <Text style={styles.rate_text}>Rate:</Text>
        <Text style={styles.price}>330/$</Text>
        </View>

        <View style={styles.rate}>
        <Text style={styles.rate_text}>Total amount</Text>
        <Text style={styles.price}>N</Text>
        </View>
        </View>
      </  ScrollView>

      <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => navigation.navigate("ThirdOnboardingScreen")}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            <Text style={styles.text}>Proceed</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    marginBottom: 30,
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

  body:{
    backgroundColor: "#f4fafe",
    // marginVertical: 20,
    // flexGrow:.98,
    flex:1,
padding:10,
    borderRadius:20,
  },
  text_input:{
    alignItems:"center",
    marginVertical:15,
    paddingHorizontal:10,
  },
  input:{
    width:"100%",
    backgroundColor: "white",
    padding:15,
    borderRadius: 10,
  },

  rate_container:{
    margin:10,
    backgroundColor: "white",
    padding:15,
    borderRadius: 10,
    marginBottom:20
  },
  rate:{
flexDirection: "row",
alignItems: "center",

marginVertical:5
  },
  rate_text:{
    fontSize:16, 
    fontFamily: "regular",
    marginRight: 10
  },
  price:{
    fontSize:16, 
    fontFamily: "regular",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },

});
