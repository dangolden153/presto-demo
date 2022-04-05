import React from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Board from "../images/board_3.svg";
import { BigText, RegularText } from "../components/Text";
import { RFValue } from "react-native-responsive-fontsize";

const ThirdOnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img_bg}>
        <Board />
      </View>

      <View style={styles.text_container}>
        <BigText blackTextColor bold>
          Swift Payment and Amazing rates{" "}
        </BigText>
        <View style={{ marginVertical: RFValue(2, 580) }} />

        <RegularText>
          we've got amazing rates for all your gift cards and crypto assets and
          our payment is very fast!
        </RegularText>
      </View>

      <View style={styles.btn_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            <RegularText center whiteTextColor bold>
              Next
            </RegularText>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.dots}>
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
          <View
            style={{
              width: 30,
              height: 7,
              backgroundColor: "#0B365B",
              borderRadius: 50,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_bg: {
    width: "85%",
    backgroundColor: "#FEF6E9",
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
    width: "100%",
    marginBottom: 40,
  },

  btn: {
    width: 200,
    paddingVertical: 15,
    borderRadius: 10,
  },
  dots: {
    flexDirection: "row",
    width: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
