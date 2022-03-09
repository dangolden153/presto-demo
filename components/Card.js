import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import pics from "../images/bg.png";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Card = () => {
  const [hideBalance, setHideBalance] = useState(true);
  const [balance, setBalance] = useState(null)
  const { user } = useSelector((state) => state.UserReducer);
  const navigation = useNavigation();

  const handleToggle = () => {
    setHideBalance(!hideBalance)
    storeData()
  };
  // console.log("user hideBalance", hideBalance);

  // *************set hide balance value from storage*********************************
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@prestoBalance", JSON.stringify(hideBalance));
    } catch (e) {
      console.log("token error", e);
    }
  };

  // *************get hide balance value from storage*********************************
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@prestoBalance");
        console.log("@prestoBalance", value);

        setBalance(value);
      } catch (e) {
        console.log(e);
      }
    };


    getData();
  }, [hideBalance]);

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
    <TouchableOpacity
      // onPress={() => navigation.navigate("ButtomTab")} 
      style={styles.up_section}
      activeOpacity={0.9}
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
        {balance === "true" ?
          <View style={styles.icon_price}>
            <MaterialCommunityIcons name="currency-ngn" size={24} color="black" />
            <Text style={styles.price}>{user?.balance} .00</Text>
          </View> :
          <Text style={{
            fontSize: 18,
            color: "black"
          }}>****</Text>
        }
        <TouchableOpacity onPress={() => handleToggle()} >
          {balance === "true" ? <FontAwesome name="eye" size={24} color="black" /> : <FontAwesome name="eye-slash" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      <Button
        containerStyle={styles.btn}
        buttonStyle={{
          backgroundColor: "#0B365B",
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

  );
};

export default Card;

const styles = StyleSheet.create({

  up_section: {
    width: "100%",
    // height: 170,
    flexGrow: 1,
    backgroundColor: "#8CC3F2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  up_section_text: {
    fontFamily: "regular",
  },
  icon_price: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  price_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    width: 120,
    marginBottom: 7,
    // overflow: "hidden",
    alignSelf: "center",
  },
  price: {
    // fontFamily: "medium",
    fontSize: 18,
    color: "black"
  },
});
