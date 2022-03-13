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
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Dropdown from "../components/Dropdown/Dropdown";
import { useSelector } from "react-redux";
// import { cardData } from "../utils/cardData";

const SellGiftCardScreen = ({ navigation }) => {
  const [country, setCountry] = useState(null);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("");
  const [countryArry, setCountryArry] = useState();
  const { getCardRate } = useSelector(state => state.TransactionReducer);
  let emptyArray = [];

  const countryIndex = type ? type.country.indexOf(country) : null;
  const cardtypeArr = type ? type.cardtype[countryIndex] : [];
  const cardtypeIndex = value ? cardtypeArr.indexOf(value) : null;
  const rateArr = type ? type.rate[countryIndex] : [];
  const rate = cardtypeArr ? rateArr[cardtypeIndex] : null;

  console.log(`type`, type);
  console.log(`country`, typeof type.country);
  // console.log(`countryArr`, countryArry[1]);

  useEffect(() => {
    if (type.country == null) {
      return;
    }
    setCountryArry(type?.country);
    return alert("  a card selected");
  }),
    [type];

  // const cArr = countryArry.map(rate => {
  //   return console.log(rate);
  // });

  // // console.log(`getCardRate`, getCardRate);
  // console.log(`country`, country);
  // // console.log(`country`, country);
  // console.log(`value`, value);
  // console.log(`cardtypeArr`, cardtypeArr);
  // console.log(`cardtypeIndex`, cardtypeIndex);
  // console.log(`rate`, rateArr);
  // console.log(`rate`, rate);
  const ctry = country?.countryName;
  const tpe = type?.cardName;

  const handleNavigation = () => {
    if (!ctry || !tpe || !value || !amount) {
      return alert("credentials required!");
    }

    navigation.navigate("UploadGiftcardScreen", {
      giftcardData: { ctry, tpe, value, amount }
    });
  };

  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf")
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  const cardData = [
    {
      id: 2,
      cardname: "Itunes",
      country: ["USA", "AUSTRALIA", "UK", "CANADA"],
      cardtype: [
        [
          "E-code $50",
          "E-code $100",
          "E-code $20-$49",
          "Itunes $51-$99",
          "Itunes $50",
          "Itunes $100",
          "Itunes $101-$200",
          "Itunes $201-$499"
        ],
        ["Itunes $20-$49", "Itunes $50-$100", "Itunes $25-$1000"],
        ["Itunes $50-$100", "Itunes $20-$49"],
        ["Itunes $25-$5000"]
      ],
      rate: [
        [200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200],
        [201, 200],
        [200]
      ]
    },

    {
      id: 1,
      cardname: "Apple store",
      country: ["USA", "AUSTRALIA", "UK", "CANADA"],
      cardtype: [
        [
          "E-code $50",
          "E-code $100",
          "E-code $20-$49",
          "Itunes $51-$99",
          "Itunes $50",
          "Itunes $100",
          "Itunes $101-$200",
          "Itunes $201-$499"
        ],
        ["Itunes $20-$49", "Itunes $50-$100", "Itunes $25-$1000"],
        ["Itunes $50-$100", "Itunes $20-$49"],
        ["Itunes $25-$5000"]
      ],
      rate: [
        [200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200],
        [200, 200],
        [200]
      ]
    }
  ];

  // const count = cArr.map(ctry => {
  //   return console.log(ctry[3]);
  // });
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
          data={cardData}
          setItem={setType}
          item={type}
        />

        {/* **********************dropdown Select Country ***********************/}
        <Dropdown
          label="Select Country"
          selectItemLabel="Select a card"
          // placeholder={country.countryName || "Select Country"}
          placeholder={"Select Country"}
          // data={countryArry}
          // setItem={setCountry}
          // item={country}
        />

        {/* **********************dropdown Select Giftcard Value ***********************/}
        <Dropdown
          label="Select a card"
          selectItemLabel="Select Country"
          placeholder="Select Giftcard Value"
          // data={type ? type.cardtype[countryIndex] : emptyArray}
          setItem={setValue}
          item={value}
        />

        <View style={styles.text_input}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "regular",
              marginBottom: 5,
              alignSelf: "flex-start"
            }}
          >
            Amount
          </Text>
          <TextInput
            value={amount}
            onChangeText={text => setAmount(text)}
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
            <Text style={styles.price}>N</Text>
          </View>
        </View>

        {/* <LinearGradient
          // Button Linear Gradient
          colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
          style={[styles.btn, { marginBottom: 30 }]}
        >
          <Text style={styles.text}>Prepaid card</Text>
        </LinearGradient> */}
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
    paddingHorizontal: 25,
    backgroundColor: "white",
    position: "relative"
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 30
  },

  header: {
    color: "black",
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "semiBold"
  },

  body: {
    backgroundColor: "#f4fafe",
    flex: 1,
    padding: 10,
    borderRadius: 20
  },
  text_input: {
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10
  },

  rate_container: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10
    // marginBottom: 10,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 5
  },
  rate_text: {
    fontSize: 16,
    fontFamily: "regular",
    marginRight: 10
  },
  price: {
    fontSize: 16,
    fontFamily: "regular"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10
  }
});
