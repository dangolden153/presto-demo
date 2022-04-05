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
import { Ionicons } from "@expo/vector-icons";
import PaymentCard from "../images/card.svg";
import Coin from "../images/Coin.svg";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import Card from "./Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";
import { RFValue } from "react-native-responsive-fontsize";
import Refer from "../images/refer.svg";
import { MediumText, RegularText, SmallText } from "./Text";

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
  const { setIsAuthenticated, isAuthenticated, setExistinguser, notification } =
    useContext(Context);

  // **************set username to the local storage*****************
  useEffect(() => {
    if (!user) return;

    const setUsername = async () => {
      try {
        await AsyncStorage.setItem("@username", user?.firstname);
        // console.log("username updated");
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
        // console.log("profile_pic updated");
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
        // console.log("existing username fetched", value);
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
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  // console.log("user", user);

  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <View style={styles.nav_container}>
        <MediumText blackTextColor capitalize>
          Hello {user?.firstname},
        </MediumText>
        <View style={styles.text_icon}>
          <RegularText>
            Today {alphaDay}, {getDate} {alphaMonth},
          </RegularText>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificcationScreen")}
            style={{ position: "relative" }}
          >
            {notification && (
              <View
                style={{
                  backgroundColor: "red",
                  height: RFValue(11, 580),
                  width: RFValue(11, 580),
                  borderRadius: 100,
                  position: "absolute",
                  right: 3,
                  zIndex: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  // marginHorizontal: RFValue(5, 580),
                  // marginTop: RFValue(2, 580),
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: RFValue(7, 580),
                  }}
                >
                  1
                </Text>
              </View>
            )}
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ******************* up section container******************************* */}
      <Card />
      {/* *************middle section container*********************** */}
      <View style={styles.mid_section}>
        <TouchableOpacity
          onPress={() => navigation.navigate("GiftCardScreen")} // SellGiftCardScreen
          style={styles.left_section}
        >
          <PaymentCard
            style={{
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
          <Coin
            style={{
              position: "absolute",
              resizeMode: "contain",
              top: -100,
            }}
          />
          <Text style={styles.section_text}>Sell{"\n"}Crypto</Text>
        </TouchableOpacity>
      </View>

      {/* ************ Refer a friend down section container *******************/}
      <TouchableOpacity
        style={styles.bottom_section}
        onPress={() => navigation.navigate("ReferScreen")} //
      >
        <View style={styles.bttm_txt_container}>
          <MediumText blackTextColor bold>
            Refer and earn
          </MediumText>
          <SmallText>
            Refer a friend today and earn N5000 to N10,000 weekly
          </SmallText>
        </View>

        <Refer />
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

  up_section_text: {
    fontFamily: "regular",
  },

  price: {
    fontFamily: "semibold",
    fontSize: 16,
  },
  mid_section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexGrow: 1,
    marginVertical: 10,
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
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 15,
    paddingVertical: 40,
    flex: 1,
  },
  left_section: {
    backgroundColor: "#FBDDC3",
    marginRight: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flex: 1,

    paddingVertical: 40,
  },
  bottom_section: {
    width: "100%",
    // height: 160,
    flexGrow: 1,
    backgroundColor: "#DDD6ED",
    borderRadius: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bttm_txt_container: {
    alignItems: "flex-start",
    padding: 10,
    width: "50%",
    // backgroundColor: "pink",
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
