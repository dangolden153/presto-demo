import { StatusBar } from "expo-status-bar";
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
            name="HomeScreen"
            component={HomeScreen}
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
