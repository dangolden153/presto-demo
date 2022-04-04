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
import { requestWithdraw } from "../Redux/Actions/bankTransactions";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

const ConfirmWithdrawal = ({ route }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openModal, token, setModalMessage, setOpenModal, handleRefresh } =
    useContext(Context);
  const dispatch = useDispatch();
  const toast = useToast();
  const transationDetails = route?.params?.details;
  const { amount, note, accountNumber, accountName, bankName, bankCode } =
    transationDetails;
  const navigation = useNavigation();
  let withdraw = true;
  let navigate = false;
  let name = "DANIEL";

  // ************notification ***********
  const handleToast = (message) => {
    toast.show(message, {
      type: "success",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  // ************withdrawal request************************
  const handleWithdrawal = () => {
    dispatch(
      requestWithdraw(
        token,
        amount,
        note,
        accountNumber,
        accountName,
        bankName,
        bankCode,
        setLoading,
        setModalMessage,
        setOpenModal,
        handleRefresh,
        handleToast,
        navigation
      )
    );
  };

  // ************check if pin is correct************************
  const handleValidation = () => {
    if (!code) {
      return alert("please Enter your PIN.");
    }
    dispatch(
      validateCurrentPin(
        code,
        token,
        setModalMessage,
        setOpenModal,
        setLoading,
        navigation,
        navigate,
        withdraw,
        handleWithdrawal
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
              password
              mask="﹡"
              value={code}
              onTextChange={(code) => setCode(code)}
              //   onFulfill={this._checkCode}
              //   onBackspace={this._focusePrevInput}
              cellStyle={{
                borderColor: colors?.primaryColor,
                borderBottomWidth: 2,
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
      {openModal && <ModalComponent navigate="ButtomTab" />}
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
