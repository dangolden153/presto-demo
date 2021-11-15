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

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // keyboardVerticalOffset={90}
    >
      <StatusBar style="dark" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.Sub_header}>
              Sign in with your Email and continue
            </Text>
          </View>

          <View style={styles.input_container}>
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
            <Text
              style={{
                fontSize: 15,
                textAlign: "right",
                color: "#0084F4",
                marginVertical: 10,
              }}
            >
              Forgot password?
            </Text>
          </View>

          <Button
            containerStyle={styles.btn}
            buttonStyle={{
              backgroundColor: "#0084F4",
              padding: 20,
              borderRadius: 10,
            }}
            title="Login"
            raised
            // loading={loading}
            onPress={() => navigation.navigate("CheckVerification")}
          />

          <TouchableOpacity>
            <Text style={{ paddingTop: 20, fontSize: 16, color: "#999999" }}>
              New user?{" "}
              <Text
                style={{ color: "#666666" }}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                Create account
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 20,
    // justifyContent: "center",
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 50,
  },

  header: {
    // textAlign: "left",
    color: "black",
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: "bold",
  },

  Sub_header: {
    color: "#999999",
    fontSize: 15,
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
    borderColor: "#e8e6ea",
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
