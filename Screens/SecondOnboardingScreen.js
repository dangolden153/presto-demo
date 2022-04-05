import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Board from "../images/board_2.svg";
import { BigText, RegularText } from "../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SecondOnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    isOnboardingChecked();
  }, []);

  const isOnboardingChecked = async () => {
    try {
      await AsyncStorage.setItem("@setOnboardingCheck", "true");
      console.log(`onboarding setItem`);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img_bg}>
        <Board />
      </View>

      <View style={styles.text_container}>
        <BigText blackTextColor bold>
          The best wey to trade your crypto assets{" "}
        </BigText>
        <View style={{ marginVertical: RFValue(2, 580) }} />

        <RegularText>
          presto allows you trade your crypto assets without hassle
        </RegularText>
      </View>

      <View style={styles.btn_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("ThirdOnboardingScreen")}
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
              width: 30,
              height: 7,
              backgroundColor: "#0B365B",
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondOnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_bg: {
    width: "85%",
    backgroundColor: "#FFF0F0",
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
