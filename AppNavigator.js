import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Demo from "./Screens/DemoScreen";
import RegisterScreen from "./Screens/RegistrationScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import CheckVerification from "./Screens/CheckVerification";
import VerifiedScreen from "./Screens/VerifiedScreen";
import CreatePin from "./Screens/CreatePin";
import HomeScreen from "./Screens/HomeScreen";
import OnboardingScreen from "./Screens/OnboardingScreen";
import SecondOnboardingScreen from "./Screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./Screens/ThirdOnboardingScreen";
import Dashboard from "./components/Dashboard";
// import SellGiftCard from "./Screens/SellGiftCardScreen";
import ButtomTab from "./Screens/ButtomTab";
import EditProfile from "./Screens/EditProfile";
import Accounts from "./Screens/Accounts";
import SellBitcoin from "./Screens/SellBitcoin";
import TransactionImage from "./Screens/TransactionImage";
import Withdrawal from "./Screens/Withdrawal";
import AddBankAccount from "./Screens/AddBankAccount";
import dropdownScreen from "./Screens/dropdownScreen";
import { NativeBaseProvider } from "native-base";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import OtpScreen from "./Screens/OtpScreen";
import SellGiftCardScreen from "./Screens/SellGiftCardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ValidatePinSreen from "./Screens/ValidatePinScreen";
import ValidatePinScreen from "./Screens/ValidatePinScreen";
import UploadGiftcardScreen from "./Screens/UploadGiftcardScreen";
import CryptoScreen from "./Screens/CryptoScreen";
import SellUsdtScreen from "./Screens/SellUsdtScreen";
import { Context } from "./context";
import RateUsScreen from "./Screens/RateUsScreen";
import SupportScreen from "./Screens/SupportScreen";
import ChangePin from "./Screens/ChangePin";
import ConfirmPin from "./Screens/ConfirmPin";
import ForgotPassword from "./Screens/ForgotPassword";
import MediaScreen from "./Screens/MediaScreen";
import TransactionHistory from "./Screens/TransactionHistory";
import BtcTransactions from "./Screens/BtcTransactions";
import UsdtTransactions from "./Screens/UsdtTransactions";
import TransactionDetail from "./Screens/TransactionDetail";
import SelectAvatar from "./Screens/SelectAvatar";
import ExistingUserLogin from "./Screens/ExistingUserLogin";
import AccountVerScreen from "./Screens/AccountVerScreen";
import GiftCardScreen from "./Screens/GiftCardScreen";

// import TransactionsTopTab from "./Screens/TransactionsTopTab";

const AppNavigator = () => {
  const { token, existinguser, setExistinguser, isAuthenticated } =
    useContext(Context);

  // *************user token check*********************************
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("@prestoToken");
  //       // console.log("@userToken'", value);
  //       setToken(value);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getData();
  // }, [isAuthenticated, token]);
  // ***************check for existing user*********************
  useEffect(() => {
    const getItems = async () => {
      try {
        const value = await AsyncStorage.getItem("@email");
        setExistinguser(value);
        // console.log("existing username fetched", value);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    getItems();
  }, [isAuthenticated]);
  // console.log("existinguser existinguser", existinguser);

  const Stack = createStackNavigator();

  const config = {
    animation: "spring",
    config: {
      stiffness: 500,
      damping: 50,
      mass: 3,
      overShootingClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const closeConfig = {
    animation: "timing",
    config: {
      duration: 500,
      // easing: Easing.linear,
    },
  };

  return (
    <Stack.Navigator
      // initialRouteName="CreatePin"
      // mode="modal"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {token !== null ? (
        <>
          <Stack.Screen
            name="ButtomTab"
            component={ButtomTab}
            options={{
              headerShown: false,
              // gestureDirection: "vertical",
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChangePin"
            component={ChangePin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ConfirmPin"
            component={ConfirmPin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MediaScreen"
            component={MediaScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BtcTransactions"
            component={BtcTransactions}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UsdtTransactions"
            component={UsdtTransactions}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetail}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TransactionImage"
            component={TransactionImage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Withdrawal"
            component={Withdrawal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddBankAccount"
            component={AddBankAccount}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SellBitcoin"
            component={SellBitcoin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SellGiftCardScreen"
            component={SellGiftCardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadGiftcardScreen"
            component={UploadGiftcardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CryptoScreen"
            component={CryptoScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SellUsdtScreen"
            component={SellUsdtScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SelectAvatar"
            component={SelectAvatar}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RateUsScreen"
            component={RateUsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SupportScreen"
            component={SupportScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AccountVerScreen"
            component={AccountVerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GiftCardScreen"
            component={GiftCardScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen
                  name="OnboardingScreen"
                  component={OnboardingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SecondOnboardingScreen"
                  component={SecondOnboardingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ThirdOnboardingScreen"
                  component={ThirdOnboardingScreen}
                  options={{ headerShown: false }}
                /> */}

          <Stack.Screen
            name="ExistingUserLogin"
            component={existinguser !== null ? ExistingUserLogin : LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckVerification"
            component={CheckVerification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifiedScreen"
            component={VerifiedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreatePin"
            component={CreatePin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ValidatePinScreen"
            component={ValidatePinScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
