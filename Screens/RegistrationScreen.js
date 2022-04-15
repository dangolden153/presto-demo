import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Log_in from "../images/Login.svg";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { ModalComponent } from "../components/Modal";
import { Context } from "../context";
import ModalCom from "../components/ModalCom";

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
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [referralCode, setReferralCode] = useState("");
  const toggleRadio = () => setRadioBtn(!radioBtn);
  const { openModal, setOpenModal, loading, setLoading, setModalMessage } =
    useContext(Context);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //  ***********set Validation***********
  const handleValidation = () => {
    if (!firstName) {
      alert("first name canot be empty!");
      return false;
    } else if (!lastName) {
      alert("last name canot be empty!");
      return false;
    } else if (!email) {
      alert("please use a valid email address!");
      return false;
    } else if (!phoneno) {
      alert("phone number canot be empty!");
      return false;
    } else if (!password || password.length < 6) {
      alert("password too short!");
      return false;
    } else if (passwordConfirmation !== password) {
      alert("password must match!");
      return false;
    } else if (!radioBtn) {
      alert("please accept terms and condition.");
      return false;
    } else {
      return true;
    }
  };

  const handleSignup = () => {
    if (!handleValidation()) {
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
    formdata.append("reference", referralCode);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/register", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        if (res?.status === "201") {
          return navigation.navigate("CheckVerification");
        }
        // console.log("res", JSON.parse(res).password);
        console.log("response", res);
        setOpenModal(true);
        setModalMessage({
          status: "fail",
          text: JSON.parse(res).email
            ? JSON.parse(res).email[0]
            : JSON.parse(res).password
            ? JSON.parse(res).password[0]
            : "invalid credentials given.",
        });
      })
      .catch((error) => {
        console.log("error", error);
        setModalMessage({ status: "fail", text: error });
        setLoading(false);
      });
  };

  const bgHeight = windowHeight * 0.28;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <View
        style={styles.container}
        // behavior="padding"
        // keyboardVerticalOffset={90}
      >
        <StatusBar style="light" />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View>
          {/* ***************top backgroundColor*************** */}
          <View
            style={{
              backgroundColor: "#0B365B", //#0B365B
              width: "100%",
              height: windowHeight * 0.08,
              position: "absolute",
              // zIndex: 5
            }}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                style={{
                  marginTop: 30,
                  marginLeft: 15,
                  zIndex: 100,
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
              // top: -10,
              zIndex: -1,
              // backgroundColor: "pink"
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
                  onChangeText={(text) => setFirstName(text)}
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
                  onChangeText={(text) => setLastName(text)}
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
                  onChangeText={(text) => setEmail(text)}
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
                  onChangeText={(text) => setPhoneno(text)}
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
                    onChangeText={(text) => setPassword(text)}
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
                    onChangeText={(text) => setPasswordConfirmation(text)}
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

              {/* *************referral code***************************** */}
              <View style={styles.inputTextContainer}>
                <Text style={styles.input_text}>referral code (optional)</Text>
                <TextInput
                  placeholderTextColor={"black"}
                  style={styles.input}
                  value={referralCode}
                  onChangeText={(text) => setReferralCode(text)}
                  // type="number"
                  autoFocus
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.terms}>
            <TouchableOpacity onPress={toggleRadio} style={styles.radioBtn}>
              {radioBtn && <View style={styles.onClicked} />}
            </TouchableOpacity>

            <Text style={styles.text}>
              By Signing up, you agree to the Terms of Service and Privacy
              Policy
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
      {/* *********response modal************************** */}
      {openModal && <ModalCom />}
    </>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",

    // paddingHorizontal: 20,
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 50,
  },

  header: {
    // textAlign: "left",
    color: "white",
    fontSize: 24,
    letterSpacing: 1,
    fontFamily: "medium",
    zIndex: 100,
  },

  Sub_header: {
    // textAlign: "left",
    color: "gray",
    fontSize: 15,
    // letterSpacing: 1,
    fontWeight: "bold",
    marginTop: 10,
  },
  inner_container: {
    paddingHorizontal: 20,
  },
  input_container: {
    marginTop: 20,
    height: "55%",
  },
  inputTextContainer: {
    marginTop: 7,
  },
  input_text: {
    marginBottom: 5,
    paddingHorizontal: 10,
    zIndex: 200,
    color: "gray",
    fontSize: 14,
    fontWeight: "bold",
  },

  icon_input: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
