import React, { useState, useEffect } from "react";

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
import AsyncStorage from '@react-native-async-storage/async-storage';                                               



export default function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@userToken')
        if(value !== null) {
          // value previously stored
          setToken(value)
          console.log("@userToken'", value)

        }
      } catch(e) {
        console.log(e)
      }
    }
    
      getData()
  }, [token])

  console.log("token", token)

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <NativeBaseProvider> */}
      <SafeAreaProvider>
        <Stack.Navigator>
          {/* /////////////// */}

          {/* <Stack.Screen
            name="dropdownScreen"
            component={dropdownScreen}
            options={{ headerShown: false }}
          /> */}
     

{
  token ?  (
     <>
     
    {/* <Stack.Screen
    name="Dashboard"
    component={Dashboard}
    options={{ headerShown: false }}
  /> */}
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
    name="ChangePasswordScreen"
    component={ChangePasswordScreen}
    options={{ headerShown: false }}
  />
  </>
  ):(
    <>
    <Stack.Screen
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
  />
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
  </>
  )
}
        
         
          {/* <Stack.Screen
            name="Demo"
            component={Demo}
            // options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </SafeAreaProvider>
      {/* </NativeBaseProvider> */}
    </NavigationContainer>
  );
}

/// checking the next js by 2pm



// authentication process;

// user registers and get an email
// for verification before user can navigate to dashboard

//  while loging in set the user's 
//  token on the apps and is navigated to the dashboard 
//  if token is true