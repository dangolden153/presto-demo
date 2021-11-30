import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import pics from "../images/Group-2.png";
import { Button } from "react-native-elements";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const OnboardingScreen = ({ navigation }) => {
  let [firstLoaded, error] = useFonts({
    JosefinSans: require("../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf"),
    JosefinSansBold: require("../assets/fonts/JosefinSans-VariableFont_wght.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img_bg}>
        <Image
          source={pics}
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />
      </View>

      <View style={styles.text_container}>
        <Text style={[styles.header]}>
          The best wey to trade your gift cards{" "}
        </Text>
        <Text style={styles.Sub_header}>
          presto allows you trade your gift cards with ease, fast and reliable
        </Text>
      </View>

      <View style={styles.btn_container}>
        {/* <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            paddingVertical: 15,
            borderRadius: 10,
          }}
          title="Next"
          // raised
          // loading={loading}
          onPress={() => navigation.navigate("ButtomTab")}
        /> */}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SecondOnboardingScreen")}
          //  ButtomTab
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            <Text style={styles.text}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.dots}>
          <View
            style={{
              width: 30,
              height: 7,
              backgroundColor: "#0084F4",
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "gray",
              borderRadius: 100,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "gray",
              borderRadius: 100,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_bg: {
    width: "85%",
    backgroundColor: "#F4FAFE",
    alignItems: "center",
    height: 400,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
    paddingTop: 80,
  },
  text_container: {
    width: "90%",
  },
  btn_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "gray",
    width: "100%",
    marginBottom: 40,
  },
  header: {
    color: "black",
    fontSize: 25,
    letterSpacing: 1,
    fontWeight: "bold",
    // fontFamily: "JosefinSans",
  },
  Sub_header: {
    color: "#999999",
    fontSize: 15,
    marginTop: 10,
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    // marginTop: 50,
    width: 200,
    paddingVertical: 15,
    borderRadius: 10,
  },

  dots: {
    flexDirection: "row",
    width: 60,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "pink",
  },
});

export default OnboardingScreen;
