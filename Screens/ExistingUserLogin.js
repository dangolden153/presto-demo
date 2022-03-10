import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
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
  Image
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";
import { useDispatch } from "react-redux";
import { ModalComponent } from "../components/Modal";
import Log_in from "../images/Login.svg";
import { useToast } from "react-native-toast-notifications";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ExistingUserLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
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
    setAccessToken
  } = useContext(Context);

  let trimPassword = password.trim();
  const bgHeight = windowHeight * 0.28;

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
      animationType: "slide-in"
    });
  };

  const handleValidation = () => {
    if (!email) {
      setValidate("please use a valid email address!");
      alert("please use a valid email address!");
      return false;
    } else if (!password && password.length < 6) {
      setValidate("password too short!");
      alert("password too short!");
      return false;
    } else {
      return true;
    }
  };

  //  ************login function ***********
  const handleLogin = () => {
    if (!handleValidation()) {
      return null;
    }

    setLoading(true);
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", trimPassword);

    let myHeaders = new Headers();
    myHeaders.append();

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://api.prestohq.io/api/auth/login", requestOptions)
      .then(response => response.json())

      .then(result => {
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
      .catch(error => {
        console.log("catching login error", error);
        setLoading(false);
      });
  };

  //  ****************store user's token ***********
  const storeData = async value => {
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
        console.log("username fetched");
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

  // **************get email to the local storage*****************
  useEffect(() => {
    const setUserEmail = async () => {
      try {
        const value = await AsyncStorage.getItem("@email");
        setEmail(value);
        // console.log("username fetched");
      } catch (error) {
        console.log("username cant be updated", error);
      }
    };
    setUserEmail();
  }, [email]);

  const nullAvatar =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  // **********font*****************
  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    italic: require("../assets/fonts/raleway/Raleway-Italic.ttf")
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
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
            zIndex: 100
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 35,
            left: 20,
            zIndex: 100
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              marginBottom: 15
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.header}>Presto</Text>
        </View>

        <Log_in
          width={windowWidth}
          height={bgHeight}
          style={
            {
              // backgroundColor: "red" //#0B365B
              // top: -10
            }
          }
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner_container}>
            <View style={styles.input_container}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 30
                }}
              >
                <Image
                  source={{ uri: imgUrl || nullAvatar }}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 200,
                    marginRight: 10
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: "#0B365B",
                      fontSize: 20,
                      fontFamily: "italic"
                      //   fontFamily: "medium"
                    }}
                  >
                    Welcome back, {""}
                  </Text>
                  <Text
                    style={{
                      color: "#0B365B",
                      fontSize: 16,
                      textTransform: "capitalize",
                      //   fontFamily: "italic",
                      fontFamily: "medium"
                    }}
                  >
                    {name}
                  </Text>
                </View>
              </View>

              {/* ************* Password ***************************** */}
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
              {/* *************Forgot Password link***************************** */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                activeOpacity={0.5}
                style={{
                  marginVertical: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "right",
                    color: "#0B365B"
                  }}
                >
                  Forgot password?
                </Text>
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
                  <Text style={styles.btn_text}>Login</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
            {/* //CheckVerification */}
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalComponent />}
    </>
  );
};

export default ExistingUserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },
  header_container: {
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 90
  },

  header: {
    color: "white",
    fontSize: 30,
    letterSpacing: 1,
    zIndex: 100,
    fontFamily: "medium"
  },

  Sub_header: {
    color: "#999999",
    fontSize: 15,
    marginTop: 10
  },
  inner_container: {
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  input_container: {
    marginTop: 10
  },
  inputTextContainer: {
    marginTop: 5
  },
  input_text: {
    marginBottom: 5,
    paddingHorizontal: 10,
    zIndex: 200,
    color: "gray",
    fontSize: 14,
    fontWeight: "bold"
  },

  icon_input: {
    borderWidth: 1,
    borderColor: "#e8e6ea",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
