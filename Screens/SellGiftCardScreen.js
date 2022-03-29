import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Dropdown from "../components/Dropdown/Dropdown";
import { useSelector } from "react-redux";

const SellGiftCardScreen = ({ navigation }) => {
  const [country, setCountry] = useState(null);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("");
  const { getCardRate } = useSelector((state) => state.TransactionReducer);
  let emptyArray = [];
  const countryIndex = type ? type.country.indexOf(country) : null;
  const cardtypeArr = type ? type.cardtype[countryIndex] : [];
  const cardtypeIndex = value ? cardtypeArr.indexOf(value) : null;
  const rateArr = type ? type.rate[countryIndex] : [];
  const rate = cardtypeArr ? rateArr[cardtypeIndex] : null;
  const countryData = type ? type.country : null;
  const tpe = type?.cardname;
  const image_big = type?.image_big;
  const image_small = type?.image_small;
  const total = amount * rate;
  // console.log("type :>> ", type);

  //******navigate to upload card screen with card prpos********
  const handleNavigation = () => {
    if (!country || !tpe || !value || !amount) {
      return alert("credentials required!");
    }

    navigation.navigate("UploadGiftcardScreen", {
      giftcardData: {
        country,
        tpe,
        value,
        amount,
        image_big,
        image_small,
        total,
        setType,
        setCountry,
        setValue,
        setAmount,
      },
    });
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

      {/* **********************dropdown Select Card type ***********************/}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <Dropdown
          label="Giftcard"
          placeholder={type.cardname || "Select a card"}
          data={getCardRate}
          setItem={setType}
          item={type}
        />

        {/* **********************dropdown Select Country ***********************/}
        <Dropdown
          label="Select Country"
          selectItemLabel="Select a card"
          placeholder={country || "Select Country"}
          data={countryData}
          setItem={setCountry}
          item={country}
        />

        {/* **********************dropdown Select Giftcard Value ***********************/}
        <Dropdown
          label="Select a card"
          selectItemLabel="Select Country"
          placeholder={value || "Select Giftcard Value"}
          data={type ? type.cardtype[countryIndex] : emptyArray}
          setItem={setValue}
          item={amount}
        />

        <View style={styles.text_input}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "regular",
              marginBottom: 5,
              alignSelf: "flex-start",
            }}
          >
            Amount
          </Text>
          <TextInput
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="$Enter the amount"
            style={styles.input}
          />
        </View>

        <View style={styles.rate_container}>
          <View style={styles.rate}>
            <Text style={styles.rate_text}>Rate:</Text>
            <Text style={styles.price}>{rate}/$</Text>
          </View>

          <View style={styles.rate}>
            <Text style={styles.rate_text}>Total amount</Text>
            <Text style={styles.price}>N{total || ""}</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.7} onPress={() => handleNavigation()}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#0B365B", "#0B365B", "#124672"]}
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
    // paddingHorizontal: 25,
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

  body: {
    backgroundColor: "#f4fafe",
    flex: 1,
    padding: 10,
    borderRadius: 20,
  },
  text_input: {
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },

  rate_container: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    // marginBottom: 10,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 5,
  },
  rate_text: {
    fontSize: 16,
    fontFamily: "regular",
    marginRight: 10,
  },
  price: {
    fontSize: 16,
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
