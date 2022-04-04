import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { updatePassword } from "../Redux/Actions/settings";
import { useDispatch } from "react-redux";
import { Context } from "../context";
import { ModalComponent } from "../components/Modal";
import LinearButton from "../components/LinearButton";
import NavBar from "../components/NavBar";
import { contactUs } from "../Redux/Actions/notification";

const EmailUsScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });
  const dispatch = useDispatch();
  const {
    openModal,
    setOpenModal,
    loading,
    setLoading,
    setModalMessage,
    token,
  } = useContext(Context);

  const handleMessage = () => {
    dispatch(
      contactUs(
        message,
        token,
        setModalMessage,
        setOpenModal,
        setLoading,
        setMessage
      )
    );
  };

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <View style={styles.container}>
        {/* up section container */}
        <NavBar />

        <View style={{ marginTop: 70 }}>
          <Text style={styles.text}>Send us a message</Text>
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholderTextColor="#e8e6ea"
            style={styles.input}
          />
        </View>

        <LinearButton title="Send" loading={loading} onPress={handleMessage} />
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalComponent navigate="ButtomTab" />}
    </>
  );
};

export default EmailUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 70,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "semiBold",
  },
  text: {
    fontFamily: "semiBold",
    marginTop: 10,
  },
  input: {
    borderColor: "#e8e6ea",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    // color: "red",
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  error_text: {
    color: "red",
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 100,
  },
  btn: {
    marginTop: 18,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});
