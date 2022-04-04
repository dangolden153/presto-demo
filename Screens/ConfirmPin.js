import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { Context } from "../context";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { resetPin } from "../Redux/Actions/settings";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ModalComponent } from "../components/Modal";

const ConfirmPin = ({ route }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, setModalMessage, setOpenModal, openModal, message } =
    useContext(Context);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const oldPin = route?.params;
  //   console.log("pin", pin);

  const handleValidation = () => {
    if (code.length < 4) {
      setOpenModal(true);
      setModalMessage({
        status: "fail",
        text: "pin must be at least 4 characters!",
      });
      return;
    }
    dispatch(
      resetPin(
        code,
        oldPin,
        token,
        setModalMessage,
        setOpenModal,
        setLoading,
        navigation
      )
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* ********nav************************ */}
        <NavBar title="change PIN" navigation={navigation} />

        <View style={styles.sub_container}>
          <View style={styles.pin_text}>
            <SmoothPinCodeInput
              password
              mask="﹡"
              value={code}
              onTextChange={(code) => setCode(code)}
              //   onFulfill={this._checkCode}
              //   onBackspace={this._focusePrevInput}
              cellStyle={{
                borderColor: "#0084f4",
                borderWidth: 1,
                marginHorizontal: 20,
              }}
              cellStyleFocused={{
                borderColor: "black",
              }}
              // containerStyle={{

              // }}
              cellSize={58}
            />
            <Text style={styles.Sub_header}>New Pin</Text>
          </View>
        </View>

        {/* ****************button******************** */}
        <LinearButton
          title="proceed"
          onPress={handleValidation}
          loading={loading}
        />
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalComponent />}
    </>
  );
};

export default ConfirmPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 60,
    marginLeft: 10,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  Sub_header: {
    color: "#999999",
    fontSize: 15,
    marginTop: 10,
  },
  sub_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginVertical: 50,
  },
  pin_text: {
    height: 200,
    marginTop: 40,
    alignItems: "center",
  },
  btn: {
    marginTop: 50,
    width: 250,
  },
});
