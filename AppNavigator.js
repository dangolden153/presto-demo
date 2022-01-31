import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import { Context } from "./AuthContext";
import ValidatePinSreen from "./Screens/ValidatePinScreen";
import ValidatePinScreen from "./Screens/ValidatePinScreen";
import UploadGiftcardScreen from "./Screens/UploadGiftcardScreen";
import CryptoScreen from "./Screens/CryptoScreen";
import SellUsdtScreen from "./Screens/SellUsdtScreen";
import PendingTransactionScreen from "./Screens/PendingTransactionScreen";

const AppNavigator = () => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  // *************user token check*********************************
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@prestoToken");
        // console.log("@userToken'", value);
        setToken(value);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [ isAuthenticated]);

  console.log("Apptoken", token);
  console.log("isAuthenticated", isAuthenticated);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Context.Provider value={{ setToken, token, setIsAuthenticated }}>
        <SafeAreaProvider>
          <Stack.Navigator
          // initialRouteName="PendingTransactionScreen"
          >
            {token !== null ? (
              <>
                {/* <Stack.Screen
    name="LoginScreen"
    component={LoginScreen}
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
   <Stack.Screen
    name="VerifiedScreen"
    component={VerifiedScreen}
    options={{ headerShown: false }}
  />  */}

                <Stack.Screen
                  name="ButtomTab"
                  component={ButtomTab}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
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
                  name="PendingTransactionScreen"
                  component={PendingTransactionScreen}
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
                  name="LoginScreen"
                  component={LoginScreen}
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
        </SafeAreaProvider>
      </Context.Provider>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  flex: 1,
});
