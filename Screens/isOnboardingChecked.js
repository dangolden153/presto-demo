import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import OnboardingScreen from "./OnboardingScreen";
import CheckIsLogin from "./CheckIsLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const isOnboardingChecked = () => {
  const { setOnboarding, onboarding } = useContext(Context);
  // ***************is onboarding  Check*********************
  useEffect(() => {
    isOnboardingCheck();
  }, [onboarding, setOnboarding]);

  // ***************is onboarding Check function**************
  const isOnboardingCheck = async () => {
    const value = await AsyncStorage.getItem("@setOnboardingCheck");
    if (value) {
      setOnboarding(value);
      // console.log(`check onboarding`, value);
      return;
    }
  };

  // ***************if onboarding is not false**************
  if (onboarding !== null) {
    return (
      <View style={{ flex: 1 }}>
        <CheckIsLogin />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
    </View>
  );
};

export default isOnboardingChecked;

const styles = StyleSheet.create({});
