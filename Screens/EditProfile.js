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
  KeyboardAvoidingView,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import pics from "../images/Memoji.png";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const EditProfile = ({ navigation }) => {
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // keyboardVerticalOffset={90}
    >
      <View>
        {/* up section container */}
        <View style={styles.nav}>
          <TouchableOpacity
            //   style={{ position: "absolute", left: 10 }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back-ios"
              // style={{ marginLeft: 15 }}
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.header}>Edit Profile</Text>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 10,
            borderColor: "#f4fafe",
            alignSelf: "center",
            marginVertical: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={pics}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <View style={styles.body}>
          {/* <View> */}
          <View>
            <Text style={styles.input_text}>First Name</Text>
            <TextInput style={styles.input} placeholder="Adenike" />
          </View>

          <View style={styles.text_input}>
            <Text style={styles.input_text}>Last Name</Text>
            <TextInput style={styles.input} placeholder="Sola" />
          </View>

          <View style={styles.text_input}>
            <Text style={styles.input_text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="AdenikeSola@gmail.com"
            />
          </View>

          <View style={styles.text_input}>
            <Text style={styles.input_text}>Phone</Text>
            <TextInput style={styles.input} placeholder="08011223344" />
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
              <Text style={styles.text}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    justifyContent: "center",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
  },
  body: {
    backgroundColor: "#f4fafe",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 10,
    borderRadius: 20,
    // flex: 1,
    width: "100%",
    padding: 10,
  },
  input_text: {
    fontFamily: "semiBold",
    fontSize: 16,
  },
  text_input: {
    marginTop: 7,
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
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 7,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default EditProfile;
