import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  );
}

// user registers and get an email
// for verification before user can navigate to dashboard

//  while loging in set the user's
//  token on the apps and is navigated to the dashboard
//  if token is true

//if token is true, lets some certairn screeen pass......else dont let them pass

// bitcoin transaction connection to the server
// usdt transaction connection to the server

/////having two different transaction screens .....one is inline on figma with bitcoin and amazon and the other is inline with widthdral..so whats the different --pelumi
/// have api that calls for bitcoin transactions and to update if its either successful or not without it specific screen
/// screen for all btc transaction (admin) -- pelumi
/// i dont have screen for btc transaction

// gift card value ==== sub-category

// post to btc endpoint
// post to usdt endpoints
// sell card revamping/ modification ../
// get bank details
//

// transaction  ..../
// update/create bank account ../
// get card  transactions ../
// withdraw api  --/
// native base to open modal ../
//set up redux ../
// download moment ../
// get users details and store to redux state ../
// date AND time on dashboard ../
// set up navvigation and context api and sign out ../
// tell boss that we dont have screen for widthdraw history

// usdt transaction
// btc transaction
// update pin and password 
// after connecting the transaction pending and add/get bank and widthdraw. login to test the endpoints
