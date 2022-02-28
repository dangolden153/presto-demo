import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import pics from "../images/bg.png";
import { useSelector } from "react-redux";

const Card = () => {
  const [hideBalance, setHideBalance] = useState(true);
  const { user } = useSelector((state) => state.UserReducer);

  const navigation = useNavigation();
  const handleToggle = () => setHideBalance(!hideBalance);
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
      {hideBalance &&  <Text style={styles.price}>{user?.balance} .00k</Text>}
        <TouchableOpacity onPress={() => handleToggle()} style={{alignItems:hideBalance ? "center" : 'center' ,width: '100%'}}>
          <Feather name="eye" size={24} color="black" />
        </TouchableOpacity>
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
  price_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    width: 130,
    marginBottom: 7,
    overflow: "hidden",
  },
  price: {
    fontFamily: "semibold",
    fontSize: 16,
  },
});
