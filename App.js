import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { ContextProvider } from "./context";
import { ToastProvider } from "react-native-toast-notifications";
import registerNNPushToken from "native-notify";
// general padding for all container is 20 pixels

export default function App() {
  registerNNPushToken(2267, "MyP35yWdfoWlM79sdA0wG3");
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <ToastProvider>
          <ContextProvider>
            <Provider store={store}>
              <AppNavigator />
            </Provider>
          </ContextProvider>
        </ToastProvider>
      </NavigationContainer>
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
// set up navigation and context api and sign out ../ ✅✅
// tell boss that we dont have screen for withdraw history

// usdt transaction and modal ✅
// btc transaction and modal ✅
// update pin and password
// update time and date ✅
// check the login and logout for smooth process ✅
// work on the transactions ✅
//start --- 7:30
//  finish up the screens setting .. [
//  account, ✅ a dropdown is required to unable the user to choose a specific back with respect to the back image, a json file should be create for bank name and picture
//  change password ✅
//  rate us ..✅
//  help us support,✅
// copy text  ✅
// refresh app ..30min - make a check-transaction icon at the top of the transaction component tht leads to check-transaction screen at where user can refresh, and if failed ...you should be taken back to the start screen process and a function to delete a transaction should be available.
//  and should filter out the or empty the page if we dont have any pending transaction available ✅
//  change pin ✅ ask ahmed the login behind updating the pin 30min ..✅
// reset password ..✅
// make the dashboard/bottom-tab sliding ..✅
// populate the user account details to withdraw screen ..✅
// get btc and usdt transactions
// download cards images 30min
// use yup 30min   before 2pm
// bvn : i dont think its detailed from the design and its necessary for now
// check verify screen, ChangePin and ValidatePinScreen

// after connecting the transaction pending and add/get bank and withdraw. login to test the endpoints

// stop ----- ?

// agbaje
// updating the card transaction endpoint to receive the card image url
// hes also updating the transaction status to send a failure message and a number of 2.

// check the login after error and registration screen ✅
// the back arrow to the btc and sell usdt ✅

// check the endpoint for image url
// validation on the sell card before going to the other screen  ✅
// - hide balance ✅
// - add images url ..
// need bank images and a dropDown for add banks--talk to boss
// - multiple selected images ..✅
// - recipes should be hidden for cards thats not required  ✅

// -  auth token flow ✅ temporarily saved to state
// select trasaction screen..✅
//  trasaction details screens ✅
// navigate to trasaction screens after trasactions ✅
// find another memoji for trasaction failed ..✅
// -covert and add card images url -- ahamed✅
// change user avatar by covertig to url-- ahamed✅
// setting icons ... ✅
// select avatar screen ..✅
// setting icons ... ✅
// work on svg ...✅
// login screen ✅
// toast notification install
//avatar to the server -- ahamed ✅

// show pass ..✅
// login message modal ..✅
// edit user profile ..✅
// transaction modal ✅
// send multiple images to the server
// and why the card transaction fails
// the eye icon ✅✅
// passing card url ahamed
// btc transaction history not showing price ..ahamed✅

// change the btc picture and usdt to svg including details transactionscreeen ✅
// usdt different wallet address in a modal..✅
// check the add account screen, the emppty space  when the user dont have an account yet✅ test
// inputting of email existing user ✅
// splash screen ✅
// bank verification through flutter wave ✅
// check notification ...
// change the settings icon to svg
// check the modal after transaction on the profile screen
// the modal after the tranaction fails
// tell bosss that the app should have had a prototype.
// registration process
// push to gitlab
