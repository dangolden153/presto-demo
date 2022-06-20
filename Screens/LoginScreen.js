import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";
import { useSelector, useDispatch } from "react-redux";
import Log_in from "../images/Login.svg";
import { useToast } from "react-native-toast-notifications";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ModalCom from "../components/ModalCom";
import { registerIndieID } from "native-notify";
import env from "../config";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    openModal,
    setOpenModal,
    loading,
    setLoading,
    setModalMessage,
    setIsAuthenticated,
    setToken,
    setAccessToken,
    handleRefresh,
  } = useContext(Context);

  let trimEmail = email.trim();
  let trimPassword = password.trim();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // console.log("user", user);

  // *****notification ****
  const handleToast = () => {
    toast.show("Login successfully", {
      type: "custom",
      placement: "bottom",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  //  ****set Validation****
  const handleValidation = () => {
    if (!email) {
      alert("please use a valid email address!");
      return false;
    } else if (!password && password.length < 6) {
      alert("password too short!");
      return false;
    } else {
      return true;
    }
  };

  // *****set password to the local storage******
  useEffect(() => {
    if (trimPassword === "") return;
    const passwordToStorage = async () => {
      // console.log("trimPassword", trimPassword);
      try {
        await AsyncStorage.setItem("@password", trimPassword);
        handleRefresh();
      } catch (error) {
        console.log("password cant be updated", error);
      }
    };
    passwordToStorage();
  }, [trimPassword]);

  //  *****login function ****
  const handleLoginSubmit = () => {
    if (!handleValidation()) {
      return null;
    }

    setLoading(true);
    var formdata = new FormData();
    formdata.append("email", trimEmail);
    formdata.append("password", trimPassword);
    var config = {
      method: "post",
      url: `${env.PRESTO_API}/api/auth/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formdata,
    };

    axios(config)
      .then(function (result) {
        setLoading(false);
        // console.log("result :>> ", result.data);
        // console.log("result :>> ", result.data.status);
        if (result?.data?.status == "200") {
          if (!result?.data?.user?.pin) {
            // console.log("null pin");
            setAccessToken(result?.data?.access_token);
            navigation.navigate("VerifiedScreen");
            registerIndieID(
              `${result?.data?.user?.email}`,
              env.NATIVE_NOTIFY_ID,
              `${env.NATIVE_NOTIFY_TOKEN}`
            );
            return;
          }
          // console.log("pin pin");
          registerIndieID(
            `${result?.data?.user?.email}`,
            env.NATIVE_NOTIFY_ID,
            `${env.NATIVE_NOTIFY_TOKEN}`
          );
          // console.log("result?.access_token && result?.user?.pin");
          storeData(result?.data?.access_token);
          setIsAuthenticated(true);
          setLoading(false);
          handleToast();
        } else {
          setOpenModal(true);
          setLoading(false);
          setModalMessage({
            status: "fail",
            text: result?.data?.error || "Invalid credentials",
          });
        }
      })
      .catch((error) => {
        alert(error);
        console.log("catching login error", error);
        setLoading(false);
      });
  };

  //  *****store user's token ****
  const storeData = async (value) => {
    try {
      const jsonValue = value;
      await AsyncStorage.setItem("@prestoToken", jsonValue);
      setToken(jsonValue);
    } catch (e) {
      console.log("token error", e);
    }
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
      <View style={styles.container}>
        <StatusBar style="light" />

        <Text style={styles.header}>Welcome</Text>
        {/* ******top backgroundColor****** */}
        <View
          style={{
            backgroundColor: "#0B365B",
            width: "100%",
            height: windowHeight * 0.08,
            position: "absolute",
            zIndex: 100,
          }}
        />

        <Log_in
          width={windowWidth}
          height={bgHeight}
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner_container}>
            {/* ***** Email *********** */}
            <View style={styles.input_container}>
              <View style={styles.inputTextContainer}>
                <Text style={styles.input_text}>Email</Text>
                <TextInput
                  placeholderTextColor={"black"}
                  style={styles.input}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  type="text"
                  autoFocus
                />
              </View>

              {/* ***** Password *********** */}
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
              {/* ****Forgot Password link********** */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                activeOpacity={0.5}
                style={{
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "right",
                    color: "#0B365B",
                  }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleLoginSubmit()}
            >
              {/* // handleLoginSubmit handleLogin */}
              <LinearGradient
                // Button Linear Gradient
                colors={["#0B365B", "#0B365B", "#124672"]}
                style={styles.btn}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={styles.btn_text}>Login</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
            {/* //CheckVerification */}

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
      </View>

      {/* ****response modal********* */}
      {openModal && <ModalCom />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 90,
  },

  header: {
    // textAlign: "left",
    color: "white",
    fontSize: 24,
    letterSpacing: 1,
    zIndex: 100,
    position: "absolute",
    top: 50,
    left: 20,
    fontFamily: "medium",
  },

  Sub_header: {
    color: "#999999",
    fontSize: 15,
    marginTop: 10,
  },
  inner_container: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input_container: {
    marginTop: 10,
  },
  inputTextContainer: {
    marginTop: 5,
  },
  input_text: {
    marginBottom: 5,
    paddingHorizontal: 10,
    zIndex: 200,
    color: "gray",
    fontSize: 14,
    fontWeight: "bold",
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