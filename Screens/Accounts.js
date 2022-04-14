import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { ModalComponent } from "../components/Modal";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Context } from "../context";
import NoAccountDetails from "../components/NoAccountDetails";
import DropdownCardType from "../components/Dropdown/DropdownCardType";
import { useNavigation } from "@react-navigation/native";
import { AddBankAccountDetails } from "../Redux/Actions/bankTransactions";
import { bankData } from "../utils/selectBankData";
import BankData from "../components/BankData";
import ModalCom from "../components/ModalCom";

const Accounts = ({}) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [validate, setValidate] = useState("");
  const { user, allBanks } = useSelector((state) => state.UserReducer);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    token,
    setModalMessage,
    openModal,
    setOpenModal,
    setLoading,
    loading,
    handleRefresh,
  } = useContext(Context);
  const navigation = useNavigation();
  // console.log('deviceHeight', deviceHeight/20);

  const dispatch = useDispatch();

  // ***********Add Bank Account Details***************
  useEffect(() => {
    if (accountNumber.length > 1 && accountNumber.length < 10) {
      setValidate("account number must be at least 10 digits");
    } else {
      setValidate("");
    }
  }, [accountNumber]);

  // ***********handle bank img***************
  const filterBank = bankData.filter((bankItem) => {
    return bankItem.id === bank?.id;
  });

  // ***********handle Submit account detail***************
  const handleSubmit = () => {
    setValidate("");
    if (!accountNumber) {
      return alert("Please enter a bank account");
    }
    dispatch(
      AddBankAccountDetails(
        token,
        bank?.code,
        accountNumber,
        setLoading,
        setModalMessage,
        setOpenModal,
        navigation,
        handleRefresh,
        bank?.name,
        filterBank[0]?.imgURL
      )
    );
  };

  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  // console.log(" bank", bank?.name);
  // console.log("filterBank :>> ", filterBank[0]?.imgURL);

  const handleDetails = () => {
    console.log("handleDetails :>> ");
  };

  let details = null;
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/****************** NavBar*******************/}
        <NavBar title="Account" navigation={navigation} />

        {!user?.accountno && (
          <Text style={styles.noAcctText}>
            {user?.firstname}, you don't have a bank account on Presto, please
            kindly add a bank account and proceed with your transactions
          </Text>
        )}

        {/****************** form body*******************/}
        <ScrollView style={styles.body}>
          <Text style={styles.input_text}>Add Account</Text>

          <BankData handleDetails={handleDetails} details={details} />

          <DropdownCardType
            placeholder={bank?.name || "Select bank"}
            data={allBanks}
            setItem={setBank}
            item={bank}
          />

          <TextInput
            value={accountNumber}
            onChangeText={(text) => setAccountNumber(text)}
            style={[
              styles.input,
              {
                borderColor: validate ? "red" : "white",
                borderWidth: validate ? 1 : 0,
              },
            ]}
            placeholder="Acount number"
          />
          <Text
            style={{
              color: "red",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            {validate}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              // backgroundColor: "plum",
            }}
          >
            <LinearButton
              title="Add Account"
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        </ScrollView>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </SafeAreaView>
      {openModal && <ModalComponent />}
      {modalVisible && (
        <ModalCom
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    // justifyContent: "center",
  },

  body: {
    // marginTop: 100,
    backgroundColor: "#f4fafe",
    flex: 1,

    borderRadius: 20,
    width: "100%",
    // paddingBottom: 70,
    paddingHorizontal: 10,
  },
  title_time: {
    // backgroundColor: "pink",
    width: "65%",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 14,
    color: "#666666",
    // fontFamily: "semiBold",
  },
  time: {
    fontFamily: "regular",
    color: "#999999",
  },
  input_text: {
    fontFamily: "semiBold",
    fontSize: 16,
    marginTop: 20,
  },

  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "regular",
  },

  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4fafe",
    marginVertical: 5,
    borderRadius: 20,
    padding: 7,
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  trash: {
    backgroundColor: "#F3002E",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 18,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },

  noAcctText: {
    fontSize: 17,
    fontFamily: "regular",
    textAlign: "center",
    marginTop: 20,
  },
});
