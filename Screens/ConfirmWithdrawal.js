import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { Context } from "../context";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { validateCurrentPin } from "../Redux/Actions/settings";
import { useDispatch } from "react-redux";
import { ModalComponent } from "../components/Modal";
import WithdrawalContent from "../components/WithdrawalContent";
import { colors } from "../components/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const ConfirmWithdrawal = ({ navigation, route }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openModal, token, setModalMessage, setOpenModal, message } =
    useContext(Context);
  const dispatch = useDispatch();

  const transationDetails = route?.params?.details;
  // console.log("route?.params?.details", route?.params?.details);

  let withdraw = true;

  const handleValidation = () => {
    dispatch(
      validateCurrentPin(
        code,
        token,
        setModalMessage,
        setOpenModal,
        setLoading,
        navigation,
        withdraw
      )
    );
  };

  return (
    <>
      <View style={styles.container}>
        {error && (
          <TouchableOpacity onPress={() => setError(false)}>
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              {error}
            </Text>
          </TouchableOpacity>
        )}

        {/* ********nav************************ */}
        <NavBar title="Confirm Withdrawal" navigation={navigation} />

        <View style={styles.sub_container}>
          <WithdrawalContent transationDetails={transationDetails} />
          <View style={styles.pin_text}>
            <SmoothPinCodeInput
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
            <Text style={styles.Sub_header}>Enter PIN to Confirm</Text>
          </View>
        </View>

        {/* ****************button******************** */}
        <View style={styles.btn_container}>
          <LinearButton
            title="Withdraw"
            onPress={handleValidation}
            loading={loading}
          />
        </View>
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalComponent />}
    </>
  );
};

export default ConfirmWithdrawal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
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
    color: colors.primaryColor,
    fontSize: 15,
    marginTop: 10,
  },
  sub_container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  pin_text: {
    marginVertical: RFValue(50, 580),
    alignItems: "center",
  },

  btn_container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
