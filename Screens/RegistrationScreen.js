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
  Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Log_in from "../images/Login.svg";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegistrationScreen = ({ navigation }) => {
  const [radioBtn, setRadioBtn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const toggleRadio = () => setRadioBtn(!radioBtn);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = () => {
    if (!radioBtn) {
      return null;
    }
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
      redirect: "follow"
    };

    fetch("https://api.prestohq.io/api/auth/register", requestOptions)
      .then(response => response.json())
      .then(res => {
        // console.log("res", res)
        setLoading(false);
        if (res?.status === "201") {
          return navigation.navigate("CheckVerification");
        }
        console.log("res", res);
      })
      .catch(error => {
        console.log("error", error);
        setLoading(false);
      });
  };

  const bgHeight = windowHeight * 0.28;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf")
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={styles.container}
      // behavior="padding"
      // keyboardVerticalOffset={90}
    >
      <StatusBar style="light" />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              style={{
                marginTop: 30,
                marginLeft: 15,
                zIndex: 100
              }}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.header_container}>
            <Text style={styles.header}>Let's Get Started!</Text>
            {/* <Text style={styles.Sub_header}>
                Sign up with Social of fill the form to continue
              </Text>  */}
          </View>
        </View>

        <Log_in
          width={windowWidth}
          height={bgHeight}
          style={{
            position: "absolute",
            top: -10,
            zIndex: -1
          }}
        />
      </View>
      <View style={styles.inner_container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.input_container}
        >
          <View style={{ justifyContent: "center" }}>
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>First name</Text>
              <TextInput
                placeholderTextColor={"black"}
                style={styles.input}
                value={firstName}
                onChangeText={text => setFirstName(text)}
                type="text"
                autoFocus
              />
            </View>

            {/* ************* Last name ***************************** */}
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>Last name</Text>
              <TextInput
                placeholderTextColor={"black"}
                style={styles.input}
                value={lastName}
                onChangeText={text => setLastName(text)}
                type="text"
                autoFocus
              />
            </View>

            {/* *************Email***************************** */}
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>Email</Text>
              <TextInput
                placeholderTextColor={"black"}
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                type="email"
                autoFocus
              />
            </View>

            {/* *************Phone number***************************** */}
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>Phone number</Text>
              <TextInput
                placeholderTextColor={"black"}
                style={styles.input}
                value={phoneno}
                onChangeText={text => setPhoneno(text)}
                type="number"
                autoFocus
              />
            </View>

            {/* *************Password***************************** */}
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>Password</Text>
              <View style={styles.icon_input}>
                <TextInput
                  placeholderTextColor={"black"}
                  style={{ flex: 1 }}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  type="password"
                  secureTextEntry={showPassword}
                  autoFocus
                />
                <TouchableOpacity onPress={() => handleShowPassword()}>
                  {showPassword ? (
                    <FontAwesome name="eye-slash" size={24} color="black" />
                  ) : (
                    <FontAwesome name="eye" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* *************Confirm Password***************************** */}
            <View style={styles.inputTextContainer}>
              <Text style={styles.input_text}>Confirm Password</Text>
              <View style={styles.icon_input}>
                <TextInput
                  placeholderTextColor={"black"}
                  style={{ flex: 1 }}
                  value={passwordConfirmation}
                  onChangeText={text => setPasswordConfirmation(text)}
                  type="password"
                  secureTextEntry={showConfirmPassword}
                  autoFocus
                />
                <TouchableOpacity onPress={() => handleShowConfirmPassword()}>
                  {showConfirmPassword ? (
                    <FontAwesome name="eye-slash" size={24} color="black" />
                  ) : (
                    <FontAwesome name="eye" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
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
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.btn_text}>REGISTER</Text>
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
    backgroundColor: "#ffff"

    // paddingHorizontal: 20,
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 50
  },

  header: {
    // textAlign: "left",
    color: "white",
    fontSize: 24,
    letterSpacing: 1,
    fontFamily: "medium",
    zIndex: 100
  },

  Sub_header: {
    // textAlign: "left",
    color: "gray",
    fontSize: 15,
    // letterSpacing: 1,
    fontWeight: "bold",
    marginTop: 10
  },
  inner_container: {
    paddingHorizontal: 20
  },
  input_container: {
    marginTop: 20,
    // marginBottom:40,
    // flexGrow: 0.8,
    // flex: 1,
    height: "55%"
    // backgroundColor: "green",
    //  justifyContent: "center",
    //  paddingTop:10
  },
  inputTextContainer: {
    marginTop: 7
  },
  input_text: {
    marginBottom: 5,
    // top: 10,
    paddingHorizontal: 10,
    // backgroundColor: "pink",
    zIndex: 200,
    // width: 100,
    // textAlign: "center",
    color: "gray",
    fontSize: 14,
    fontWeight: "bold"
  },
  // input_textNumber: {
  //   marginLeft: 30,
  //   top: 10,
  //   paddingHorizontal: 10,
  //   backgroundColor: "#ffff",
  //   zIndex: 200,
  //   width: 140,
  //   textAlign: "center",
  //   color: "gray",
  //   fontSize: 15,
  // },

  // input_password: {
  //   marginLeft: 30,
  //   top: 10,
  //   paddingHorizontal: 10,
  //   backgroundColor: "#ffff",
  //   zIndex: 200,
  //   width: 160,
  //   textAlign: "center",
  //   color: "gray",
  //   fontSize: 15,
  // },
  icon_input: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    // backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#e8e6ea",
    padding: 15,
    borderRadius: 20
  },

  terms: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15

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
    justifyContent: "center"
  },

  onClicked: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "black"
  },
  text: {
    color: "gray",
    fontSize: 13,
    fontWeight: "bold",
    width: "85%"
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17
  },
  btn: {
    marginTop: 10,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10
  }
});

// messsage : {firsname :"please insert "}, {lastnme:""},{email:""}
