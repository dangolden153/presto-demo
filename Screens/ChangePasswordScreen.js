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

const ChangePasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });
  const dispatch = useDispatch();
  const {
    token,
    openModal,
    setOpenModal,
    loading,
    setLoading,
    message,
    setModalMessage,
  } = useContext(Context);

  const handlePasswordUpdate = () => {
    dispatch(
      updatePassword(email, token, setModalMessage, setOpenModal, setLoading)
    );
  };

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <View style={styles.nav}>
          <TouchableOpacity
            style={{ position: "absolute", left: 0, top: 8 }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back-ios"
              // style={{ marginLeft: 15 }}
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.header}>Change Password</Text>
        </View>

        {/* <Text style={styles.text}>how do you want to recieve a reset code?</Text> */}

        <View>
          <Text style={styles.text}>Enter your email address</Text>
          <TextInput
            value={setEmail}
            onChangeText={(text) => setEmail(text)}
            // placeholderTextColor="red"
            // placeholder="adenikeSola@gmail.com"
            style={styles.input}
          />
        </View>

        <LinearButton
          title="Reset password"
          loading={loading}
          onPress={handlePasswordUpdate}
        />
      </SafeAreaView>

      {/* *********response modal************************** */}
      {openModal && (
        <ModalComponent
          modalVisible={openModal}
          setModalVisible={setOpenModal}
          message={message}
        />
      )}
    </>
  );
};

export default ChangePasswordScreen;

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
    // borderColor: "red",
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
