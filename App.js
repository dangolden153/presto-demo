import React from "react";

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
// import SellGiftCard from "./Screens/SellGiftCard";
import ButtomTab from "./Screens/ButtomTab";
import EditProfile from "./Screens/EditProfile";
import Accounts from "./Screens/Accounts";
import SellBitcoin from "./Screens/SellBitcoin";
import TransactionImage from "./Screens/TransactionImage";
import Withdrawal from "./Screens/Withdrawal";
import AddBankAccount from "./Screens/AddBankAccount";
// import TransactionCheck from "./components/TransactionCheck";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
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

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ButtomTab"
            component={ButtomTab}
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

          {/* <Stack.Screen
            name="TransactionCheck"
            component={TransactionCheck}
            options={{ headerShown: false }}
          /> */}
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

          {/* <Stack.Screen
            name="Demo"
            component={Demo}
            // options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

/// checking the next js by 2pm
