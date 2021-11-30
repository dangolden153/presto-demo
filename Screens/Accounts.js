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
import { Feather, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const Accounts = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Transaction</Text>
      </View>

      <View style={styles.gift_card}>
        <View style={styles.img_title}>
          <Image
            source={{
              uri: "https://startcredits.com/wp-content/uploads/2019/04/Access-bank.png",
            }}
            style={{
              height: 90,
              width: 70,
              borderRadius: 20,
              marginRight: 20,
            }}
          />
          <View style={styles.title_time}>
            <Text style={styles.title}>Adenike Sola</Text>
            <Text style={styles.time}>1234567890</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.trash}>
          <Feather name="trash-2" size={27} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {/* <View> */}
        <View>
          <Text style={styles.input_text}>First Name</Text>
          <TextInput style={styles.input} placeholder="Choose bank" />
        </View>

        <View style={styles.text_input}>
          <TextInput style={styles.input} placeholder="Acount number" />
        </View>

        <View style={styles.text_input}>
          <TextInput style={styles.input} placeholder="Afeez Olamide" />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          //   onPress={() => navigation.navigate("ButtomTab")}
          //SecondOnboardingScreen
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#86c6fd", "#2e9bf7", "#2998f7"]}
            style={styles.btn}
          >
            <Text style={styles.text}>Add acount</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    // justifyContent: "space-between",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "68%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 30,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    // textAlign: "center",
    // alignItems: "center",
  },

  body: {
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
    backgroundColor: "#f4fafe",

    borderRadius: 20,
    // flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "semiBold",
  },
  time: {
    fontFamily: "regular",

    color: "#999999",
  },
  input_text: {
    fontFamily: "semiBold",
    fontSize: 16,
  },

  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "regular",
  },

  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4fafe",
    marginVertical: 5,
    borderRadius: 20,
    padding: 7,
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  trash: {
    backgroundColor: "#F3002E",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 18,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});
