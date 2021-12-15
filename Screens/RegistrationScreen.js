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
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const RegistrationScreen = ({ navigation }) => {
  const [radioBtn, setRadioBtn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [loading, setLoading] = useState(false);
  const toggleRadio = () => setRadioBtn(!radioBtn);

  const handleSignup = () => {
    setLoading(true);
    let formdata = new FormData();
    formdata.append("firstname", firstName);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("password_confirmation", passwordConfirmation);
    formdata.append("lastname", lastName);
    formdata.append("phoneno", phoneno);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/register", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res?.status === "201") {
          return navigation.navigate("LoginScreen");
        }
        // console.log(res)
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };
  return (
    <View
      style={styles.container}
      // behavior="padding"
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.input_container}
        >
          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>First name</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Last name</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              type="text"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Email</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="email"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_textNumber}>Phone number</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={phoneno}
              onChangeText={(text) => setPhoneno(text)}
              type="number"
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_text}>Password</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              type="password"
              secureTextEntry
              autoFocus
            />
          </View>

          <View style={styles.inputTextContainer}>
            <Text style={styles.input_password}>Confirm Password</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={passwordConfirmation}
              onChangeText={(text) => setPasswordConfirmation(text)}
              type="password"
              secureTextEntry
              autoFocus
            />
          </View>
        </ScrollView>
        <View style={styles.terms}>
          <TouchableOpacity onPress={toggleRadio} style={styles.radioBtn}>
            {radioBtn && <View style={styles.onClicked} />}
          </TouchableOpacity>

          <Text style={styles.text}>
            By Signing up, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={() => handleSignup()}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.btn_text}>Next</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </View>
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
    // justifyContent: "center",
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
    flexGrow: 0.9,
    // backgroundColor: "green",
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

  input_password: {
    marginLeft: 30,
    top: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    zIndex: 200,
    width: 160,
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
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 10,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },
});
