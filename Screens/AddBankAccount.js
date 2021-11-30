import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const AddBankAccount = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // keyboardVerticalOffset={90}
    >
      <StatusBar style="dark" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* up section container */}

        <View style={styles.input_container}>
          <View style={styles.nav}>
            <TouchableOpacity
              style={{ position: "absolute", left: 10 }}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios"
                // style={{ marginLeft: 15 }}
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.header}>
              you currently have no account added kindly add your acount now
            </Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.head}>Add Bank Account</Text>

            <TextInput style={styles.input} placeholder="Select Bank" />
            <TextInput
              style={styles.input}
              placeholder="Enter account number"
            />
            <TextInput style={styles.input} placeholder="Enter account name" />

            <Button
              // containerStyle={styles.btn}
              buttonStyle={{
                backgroundColor: "#0084F4",
                padding: 15,
                borderRadius: 10,
                width: 350,
                fontSize: 17,
                marginTop: 100,
              }}
              title="Click to copy"
              // raised
              // loading={loading}
              //   onPress={() => navigation.navigate("CheckVerification")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddBankAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,

    backgroundColor: "white",
  },
  // input_container: {
  //   flex: 1,
  // },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 14,
    // letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    width: 280,
    // backgroundColor: "pink",
    alignSelf: "center",
    // alignItems: "center",
  },
  head: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  body: {
    backgroundColor: "#f4fafe",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    // flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: 17,
  },
});
