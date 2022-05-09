import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";
import { useDispatch } from "react-redux";
import Log_in from "../images/Login.svg";
import { useToast } from "react-native-toast-notifications";
import { SvgUri } from "react-native-svg";
import { BigText, MediumText, RegularText } from "../components/Text";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import ModalCom from "../components/ModalCom";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import * as LocalAuthentication from "expo-local-authentication";
import { colors } from "../components/Colors";

const ExistingUserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [storedPassword, setStoredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

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
    fingerprint,
    setFingerprint,
    refresh,
  } = useContext(Context);
  const navigation = useNavigation();
  let trimPassword = password.trim();
  const bgHeight = windowHeight * 0.28;

  // **************set password to the local storage*****************
  useEffect(() => {
    if (trimPassword === "") return;
    const passwordToStorage = async () => {
      // console.log("trimPassword", trimPassword);
      try {
        await AsyncStorage.setItem("@password", trimPassword);
      } catch (error) {
        console.log("password cant be updated", error);
      }
    };
    passwordToStorage();
  }, [trimPassword]);

  // **************get password from the local storage*****************
  useEffect(() => {
    const getStoredPassword = async () => {
      try {
        const value = await AsyncStorage.getItem("@password");
        // console.log("value :>> ", value);
        setStoredPassword(value);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    getStoredPassword();
  }, [trimPassword, refresh]);

  // To check whether biometrics are saved on the user’s device
  useEffect(() => {
    const handleBiometricAuth = async () => {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics)
        return Alert.alert(
          "Biometric record not found",
          "Please verify your identity with your password",
          "OK"
          // () => fallBackToDefaultAuth()
        );
    };

    handleBiometricAuth();
  }, []);

  // To check whether biometrics is compatible on the user’s device
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  // ************handle BiometricAuth function ***********
  const handleBiometricAuth = async () => {
    await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      disableDeviceFallback: true,
      cancelLabel: "Cancel",
    })
      .then((response) => {
        console.log("response", response);
        if (response?.success) {
          handleLogin(response?.success);
        } else {
          setOpenModal(true);
          setModalMessage({
            status: "fail",
            text: "please use your passcode!",
          });
        }
        //
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // console.log("user", user);

  // ************notification ***********
  const handleToast = () => {
    toast.show("Login successfully", {
      type: "custom",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  const handleValidation = () => {
    if (!password && password.length < 6) {
      alert("password too short!");
      return false;
    } else {
      return true;
    }
  };

  //  ************login function ***********
  const handleLogin = (BiometricAuth) => {
    if (!BiometricAuth) {
      if (!handleValidation()) {
        return null;
      }
    }

    setLoading(true);
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", trimPassword || storedPassword);

    let myHeaders = new Headers();
    myHeaders.append();

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/login", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        // console.log("login result", result);
        setLoading(false);

        if (result?.status == "200") {
          if (!result?.user?.pin) {
            console.log("null pin");
            setAccessToken(result?.access_token);
            // setToken(result?.access_token)
            navigation.navigate("VerifiedScreen");
            return;
          }
          console.log("result?.access_token && result?.user?.pin");
          storeData(result?.access_token);
          setIsAuthenticated(true);
          setLoading(false);
          handleToast();
        } else {
          setOpenModal(true);
          console.log("login error", result?.error);
          setLoading(false);
          setModalMessage({ status: "fail", text: result?.error });
        }
      })
      .catch((error) => {
        console.log("catching login error", error);
        setLoading(false);
      });
  };

  //  ****************store user's token ***********
  const storeData = async (value) => {
    try {
      const jsonValue = value;
      await AsyncStorage.setItem("@prestoToken", jsonValue);
      setToken(jsonValue);
    } catch (e) {
      console.log("token error", e);
    }
  };

  // **************get username to the local storage*****************
  useEffect(() => {
    const setUsername = async () => {
      try {
        const value = await AsyncStorage.getItem("@username");
        setName(value);
        // console.log("username fetched");
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    setUsername();
  }, [name]);

  // **************get picture to the local storage*****************
  useEffect(() => {
    const setUsername = async () => {
      try {
        const value = await AsyncStorage.getItem("@pics");
        setImgUrl(value);
        // console.log("username fetched");
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    setUsername();
  }, [imgUrl]);

  // **************get email from the local storage*****************
  useEffect(() => {
    const setUserEmail = async () => {
      try {
        const value = await AsyncStorage.getItem("@email");
        setEmail(value);
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    setUserEmail();
  }, [email]);

  // *************get finger print boolean value  value from storage*************
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@fingerprint");
        // console.log("@fingerprint AsyncStorage login", value);
        if (value === "true") {
          setFingerprint(true);
        } else {
          setFingerprint(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [fingerprint]);

  const nullAvatar =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  // console.log("fingerprint :>> ", fingerprint);
  // console.log("storedPassword :>> ", storedPassword);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* ***************top backgroundColor*************** */}
        <View
          style={{
            backgroundColor: "#0B365B", //#0B365B
            width: "100%",
            height: windowHeight * 0.08,
            position: "absolute",
            zIndex: 100,
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 35,
            left: 20,
            zIndex: 100,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              marginBottom: 15,
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <BigText whiteTextColor>Presto</BigText>
        </View>

        <Log_in width={windowWidth} height={bgHeight} />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner_container}>
            <View style={styles.input_container}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                  }}
                  // onPress={() => removeToken()}
                >
                  <SvgUri uri={imgUrl || nullAvatar} />
                </TouchableOpacity>
                <View>
                  <MediumText blackTextColor>Welcome back,</MediumText>
                  <RegularText capitalize>{name}</RegularText>
                </View>
              </View>

              {/* ************* Password ***************************** */}
              <View style={styles.inputTextContainer}>
                <RegularText>Password</RegularText>
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

              {/* *************Forgot Password link***************************** */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                activeOpacity={0.5}
                style={{
                  marginVertical: 10,
                }}
              >
                <RegularText right primaryColor medium>
                  Forgot password?
                </RegularText>
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={() => handleLogin()}>
              <LinearGradient
                // Button Linear Gradient
                colors={["#0B365B", "#0B365B", "#124672"]}
                style={styles.btn}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <RegularText whiteTextColor center>
                    Login
                  </RegularText>
                )}
              </LinearGradient>
            </TouchableOpacity>
            {/* //CheckVerification */}

            {/* ***********fingerprint*********** */}
            {fingerprint ? (
              <TouchableOpacity
                onPress={() => handleBiometricAuth()}
                style={styles.fingerprint}
              >
                <Ionicons
                  name="finger-print-outline"
                  size={50}
                  color={colors.primaryColor}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalCom />}
    </>
  );
};

export default ExistingUserLogin;

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

  // header: {
  //   color: "white",
  //   fontSize: 30,
  //   letterSpacing: 1,
  //   zIndex: 100,
  //   fontFamily: "medium",
  // },

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

  icon_input: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(5, 580),
  },

  btn: {
    marginTop: 10,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },

  fingerprint: {
    borderWidth: 2,
    height: RFValue(60, 580),
    width: RFValue(60, 580),
    borderRadius: 200,
    marginTop: RFValue(50, 580),
    borderColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
