import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import card from "../images/Payment.png";
import coin from "../images/Coin.png";
import gift from "../images/gift.png";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import Card from "./Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";

const Dashboard = ({ navigation }) => {
  const { user } = useSelector(state => state.UserReducer);
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
    "December"
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const alphaMonth = months[getMonth];
  const alphaDay = days[getDay];
  const { setIsAuthenticated, isAuthenticated, setExistinguser } = useContext(
    Context
  );

  // **************set username to the local storage*****************
  useEffect(() => {
    if (!user) return;

    const setUsername = async () => {
      try {
        await AsyncStorage.setItem("@username", user?.firstname);
        console.log("username updated");
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    setUsername();
  }, [user]);

  // **************set profile profile_pic to the local storage*****************
  useEffect(() => {
    if (!user) return;

    const setUsername = async () => {
      try {
        await AsyncStorage.setItem("@pics", user?.profile_pic);
        console.log("profile_pic updated");
      } catch (error) {
        // console.log("username cant be updated", error);
      }
    };
    setUsername();
  }, [user]);

  // **************set email to the local storage*****************
  useEffect(() => {
    if (!user) return;

    const EmailToStorage = async () => {
      try {
        await AsyncStorage.setItem("@email", user?.email);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    EmailToStorage();
  }, [user]);

  // ***************check for existing user*********************
  useEffect(() => {
    const getItems = async () => {
      try {
        const value = await AsyncStorage.getItem("@email");
        setExistinguser(value);
        console.log("existing username fetched", value);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    getItems();
  }, [isAuthenticated]);

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf")
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  // console.log("user", user);

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
      <Card />
      {/* *************middle section container*********************** */}
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
              transform: [{ rotate: "120deg" }]
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
              top: -100
            }}
          />
          <Text style={styles.section_text}>Sell{"\n"}Crypto</Text>
        </TouchableOpacity>
      </View>

      {/* ************ Refer a friend down section container *******************/}
      <TouchableOpacity
        style={styles.bottom_section}
        // onPress={() => navigation.navigate("TransactionDetail")} //MediaScreen PendingTransactionScreen
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
            resizeMode: "contain",
            right: 70
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
    backgroundColor: "white"
    // justifyContent: "center",
  },

  nav_container: {
    marginVertical: 20,
    width: "100%"
  },
  text_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nav_text: {
    fontFamily: "regular",
    textTransform: "capitalize"
  },
  boldVav_text: {
    fontFamily: "semibold",
    textTransform: "capitalize"
  },

  up_section_text: {
    fontFamily: "regular"
  },

  price: {
    fontFamily: "semibold",
    fontSize: 16
  },
  mid_section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexGrow: 1,
    marginVertical: 10
  },
  section_text: {
    fontSize: 22,
    letterSpacing: 0.5,
    marginTop: 80,
    textAlign: "center",
    fontFamily: "medium"
  },
  right_section: {
    backgroundColor: "#FFCBD3",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 15,
    paddingVertical: 40,
    flex: 1
  },
  left_section: {
    backgroundColor: "#FBDDC3",
    marginRight: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flex: 1,

    paddingVertical: 40
  },
  bottom_section: {
    width: "100%",
    // height: 160,
    flexGrow: 1,
    backgroundColor: "#DDD6ED",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  bttm_txt_container: {
    alignItems: "flex-start",
    margin: 20,
    width: "50%"
  },
  bottom_bold_text: {
    fontSize: 18,
    fontFamily: "bold"
  },
  bottom_text: {
    fontSize: 12,
    fontFamily: "medium"
  }
});
