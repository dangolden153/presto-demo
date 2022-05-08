import React, { useEffect, useContext } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import CheckVerification from "./Screens/CheckVerification";
import VerifiedScreen from "./Screens/VerifiedScreen";
import CreatePin from "./Screens/CreatePin";
import HomeScreen from "./Screens/HomeScreen";
import ButtomTab from "./Screens/ButtomTab";
import EditProfile from "./Screens/EditProfile";
import Accounts from "./Screens/Accounts";
import SellBitcoin from "./Screens/SellBitcoin";
import TransactionImage from "./Screens/TransactionImage";
import Withdrawal from "./Screens/Withdrawal";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import OtpScreen from "./Screens/OtpScreen";
import SellGiftCardScreen from "./Screens/SellGiftCardScreen";
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
import NotificcationScreen from "./Screens/NotificcationScreen";
import ReferScreen from "./Screens/ReferScreen";
import { getPushDataObject } from "native-notify";
import ReceiptScreen from "./Screens/ReceiptScreen";
import ConfirmWithdrawal from "./Screens/ConfirmWithdrawal";
import EmailUsScreen from "./Screens/EmailUsScreen";
import OnboardingScreen from "./Screens/OnboardingScreen";
import SecondOnboardingScreen from "./Screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./Screens/ThirdOnboardingScreen";
import CheckIsLogin from "./Screens/CheckIsLogin";
import isOnboardingChecked from "./Screens/isOnboardingChecked";
import walletRecieptScreen from "./Screens/walletRecieptScreen";
import ViewImage from "./Screens/ViewImage";
import AboutUsScreen from "./Screens/AboutUsScreen";

const AppNavigator = () => {
  const { token, setNotification, setNotifyMessage, isViewed, setIsViewed } =
    useContext(Context);
  // console.log("isViewed App:>> ", isViewed);

  let pushDataObject = getPushDataObject();
  // ***************checking for notification*********************
  useEffect(() => {
    setIsViewed("pending");
  }, [pushDataObject?.message]);

  // ***************checking for notification*********************
  useEffect(() => {
    // console.log("Appnavigator pushDataObject message", pushDataObject?.message);
    if (isViewed === "pending" && pushDataObject?.message) {
      setNotification(true);
      setNotifyMessage(pushDataObject?.message);
      console.log(
        "Appnavigator pushDataObject message",
        pushDataObject?.message
      );

      return;
    }
  });

  const Stack = createStackNavigator();

  // **********screen animation function************
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
      // initialRouteName="ConfirmWithdrawal"
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
          <Stack.Screen
            name="NotificcationScreen"
            component={NotificcationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReferScreen"
            component={ReferScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ReceiptScreen"
            component={ReceiptScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmWithdrawal"
            component={ConfirmWithdrawal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmailUsScreen"
            component={EmailUsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="walletRecieptScreen"
            component={walletRecieptScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ViewImage"
            component={ViewImage}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          <Stack.Screen
            name="AboutUsScreen"
            component={AboutUsScreen}
            options={{
              headerShown: false,
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="isOnboardingChecked"
            component={isOnboardingChecked}
            options={{ headerShown: false }}
          />
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
            name="CheckIsLogin"
            component={CheckIsLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExistingUserLogin"
            component={ExistingUserLogin}
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
