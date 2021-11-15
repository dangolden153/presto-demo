import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
const RegistrationScreen = ({ navigation }) => {
  const [radioBtn, setRadioBtn] = useState(false);
  const toggleRadio = () => setRadioBtn(!radioBtn);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // keyboardVerticalOffset={90}
    >
      <StatusBar style="dark" />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.inner_container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            style={{ marginTop: 50, marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.header_container}>
          <Text style={styles.header}>Let's Get Started!</Text>
          <Text style={styles.Sub_header}>
            Sign up with Social of fill the form to continue
          </Text>
        </View>

        <View style={styles.input_container}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>First name</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Last name</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Email</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_textNumber}>Phone number</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Password</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              type="password"
              secureTextEntry
              autoFocus
            />
          </View>
        </View>
        <View style={styles.terms}>
          <TouchableOpacity onPress={toggleRadio} style={styles.radioBtn}>
            {radioBtn && <View style={styles.onClicked} />}
          </TouchableOpacity>

          <Text style={styles.text}>
            By Signing up, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>

        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            padding: 20,
            borderRadius: 10,
          }}
          title="SIGN UP"
          raised
          // loading={loading}
          // onPress={() => handleSignUp()}
        />
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // position: "absolute",
    // paddingTop: 20,
    paddingHorizontal: 20,
    // alignItems: "center",
    justifyContent: "center",
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 30,
  },

  header: {
    // textAlign: "left",
    color: "black",
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "bold",
  },

  Sub_header: {
    // textAlign: "left",
    color: "gray",
    fontSize: 15,
    // letterSpacing: 1,
    fontWeight: "bold",
    marginTop: 10,
  },

  input_container: {
    marginTop: 10,
  },
  inputTextContainer: {
    marginTop: 5,
  },
  input_text: {
    marginLeft: 30,
    top: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    zIndex: 200,
    width: 100,
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },
  input_textNumber: {
    marginLeft: 30,
    top: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    zIndex: 200,
    width: 140,
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },
  input: {
    // backgroundColor: "black",
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    borderRadius: 20,
  },

  terms: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    // backgroundColor: "pink",
    // width: "100%",
    // overflow: "hidden",
  },
  radioBtn: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  onClicked: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "black",
  },
  text: {
    color: "gray",
    fontSize: 13,
    fontWeight: "bold",
    width: "85%",
  },
  btn: {
    marginTop: 20,
    // padding: 20,
    // backgroundColor: "pink",
  },
});
