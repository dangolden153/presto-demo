import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import pics from "../images/bg.png";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MediumText, RegularText } from "./Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Context } from "../context";

const Card = () => {
  const [hideBalance, setHideBalance] = useState(true);
  const [balance, setBalance] = useState(null);
  const { user } = useSelector((state) => state.UserReducer);
  const navigation = useNavigation();
  const { handleRefresh, refresh, setRefresh } = useContext(Context);
  const handleToggle = () => {
    setHideBalance(!hideBalance);
    storeData();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRefresh(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [refresh]);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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

  return (
    <TouchableOpacity
      onPress={() => handleRefresh()}
      style={styles.up_section}
      activeOpacity={0.9}
    >
      <TouchableOpacity
        onPress={() => handleRefresh()}
        style={{ position: "absolute", opacity: 10, right: 10, top: 10 }}
      >
        {refresh ? (
          <ActivityIndicator color="black" size="small" />
        ) : (
          <Ionicons name="ios-refresh-outline" size={24} color="black" />
        )}
      </TouchableOpacity>
      <Image
        source={pics}
        style={{
          width: 250,
          height: 250,
          resizeMode: "contain",
          position: "absolute",
        }}
      />
      <RegularText blackTextColor>Your available balance</RegularText>
      <View style={styles.price_icon}>
        {balance === "true" ? (
          <View style={styles.icon_price}>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={24}
              color="black"
            />
            <MediumText blackTextColor bold>
              {numberWithCommas(user?.balance)} .00
            </MediumText>
          </View>
        ) : (
          <MediumText blackTextColor bold>
            ****
          </MediumText>
        )}
        <TouchableOpacity onPress={() => handleToggle()}>
          {balance === "true" ? (
            <FontAwesome
              name="eye"
              size={24}
              color="black"
              style={{ marginLeft: RFValue(5, 580) }}
            />
          ) : (
            <FontAwesome
              name="eye-slash"
              size={24}
              color="black"
              style={{ marginLeft: RFValue(5, 580) }}
            />
          )}
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
    marginBottom: 7,
    alignSelf: "center",
  },
});
