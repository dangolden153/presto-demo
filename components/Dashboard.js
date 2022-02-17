import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import pics from "../images/bg.png";
import card from "../images/Payment.png";
import coin from "../images/Coin.png";
import gift from "../images/gift.png";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

const Dashboard = ({ navigation }) => {
  const { user } = useSelector((state) => state.UserReducer);
  // console.log('user', user);
  const date = new Date();
  const getMonth = date.getMonth();
  const getDay = date.getDay();
  const getDate = date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const alphaMonth = months[getMonth];
  const alphaDay = days[getDay];

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <View style={styles.nav_container}>
        <Text style={styles.boldVav_text}>Hello {user?.firstname},</Text>
        <View style={styles.text_icon}>
          <Text style={styles.nav_text}>
            Today {alphaDay}, {getDate} {alphaMonth},
          </Text>
          <TouchableOpacity
          // onPress={()=> logout()}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ******************* up section container******************************* */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ButtomTab")}
        style={styles.up_section}
      >
        <Image
          source={pics}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
            position: "absolute",
          }}
        />
        <Text style={styles.up_section_text}>Your available balance</Text>
        <View style={styles.price_icon}>
          <Text style={styles.price}>{user?.balance} .00k</Text>
          <Feather name="eye" size={24} color="black" />
        </View>
        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            paddingVertical: 10,
            width: 160,
            fontFamily: "semibold",

            borderRadius: 10,
            marginTop: 10,
          }}
          title="withdraw"
          // raised
          // loading={loading}
          onPress={() => navigation.navigate("Withdrawal")} // this button should navigate to AddBankAccount or Withdrawal
        />
      </TouchableOpacity>
      {/* middle section container */}
      <View style={styles.mid_section}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SellGiftCardScreen")}
          style={styles.left_section}
        >
          <Image
            source={card}
            style={{
              width: 250,
              height: 250,
              position: "absolute",
              resizeMode: "contain",
              top: -100,
              transform: [{ rotate: "120deg" }],
            }}
          />
          <Text style={styles.section_text}>Sell{"\n"}Giftcard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CryptoScreen")} //SellBitcoin
          style={styles.right_section}
        >
          <Image
            source={coin}
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
              position: "absolute",
              resizeMode: "contain",
              top: -100,
            }}
          />
          <Text style={styles.section_text}>Sell{"\n"}Crypto</Text>
        </TouchableOpacity>
      </View>

      {/* down section container */}
      <TouchableOpacity
        style={styles.bottom_section}
        // onPress={() => navigation.navigate("PendingTransactionScreen")}
      >
        <View style={styles.bttm_txt_container}>
          <Text style={styles.bottom_bold_text}>Refer and earn</Text>
          <Text style={styles.bottom_text}>
            Refer a friend today and earn N5000 to N10,000 weekly
          </Text>
        </View>
        <Image
          source={gift}
          style={{
            width: 250,
            height: 150,
            resizeMode: "contain",
            // position: "absolute",
            resizeMode: "contain",
            // top: 20,
            right: 70,
          }}
        />
      </TouchableOpacity>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    alignItems: "center",
    backgroundColor: "white",
    // justifyContent: "center",
  },

  nav_container: {
    marginVertical: 20,
    width: "100%",
  },
  text_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_text: {
    fontFamily: "regular",
    textTransform: "capitalize",
  },
  boldVav_text: {
    fontFamily: "semibold",
    textTransform: "capitalize",
  },
  up_section: {
    width: "100%",
    height: 170,
    backgroundColor: "#8CC3F2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  up_section_text: {
    fontFamily: "regular",
  },
  price_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    width: 130,
    marginBottom: 7,
  },
  price: {
    fontFamily: "semibold",
    fontSize: 16,
  },
  mid_section: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 40,
    marginTop: 40,

    paddingHorizontal: 5,
  },
  section_text: {
    fontSize: 22,
    letterSpacing: 0.5,
    marginTop: 80,
    textAlign: "center",
    fontFamily: "medium",
  },
  right_section: {
    backgroundColor: "#FFCBD3",
    marginHorizontal: 5,
    height: 220,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 15,
    // marginRight: 10,
  },
  left_section: {
    backgroundColor: "#FBDDC3",
    marginHorizontal: 5,
    width: "50%",
    height: 220,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // marginLeft: 10,
  },
  bottom_section: {
    width: "100%",
    height: 180,
    backgroundColor: "#DDD6ED",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
  },
  bttm_txt_container: {
    alignItems: "flex-start",
    margin: 20,
    width: "50%",
  },
  bottom_bold_text: {
    fontSize: 18,
    fontFamily: "bold",
  },
  bottom_text: {
    fontSize: 12,
    fontFamily: "medium",
  },
});
