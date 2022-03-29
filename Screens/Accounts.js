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
import { AddBankAccountDetails } from "../Redux/Actions/user";
import { useNavigation } from "@react-navigation/native";

const Accounts = ({}) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [validate, setValidate] = useState("");
  const { user, allBanks } = useSelector((state) => state.UserReducer);
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

  // ***********handle Submit account detail***************
  const handleSubmit = () => {
    setValidate("");
    dispatch(
      AddBankAccountDetails(
        token,
        bank?.code,
        accountNumber,
        setLoading,
        setModalMessage,
        setOpenModal,
        navigation,
        handleRefresh
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

  // console.log(" bank", bank);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/****************** NavBar*******************/}
        <NavBar title="Account" navigation={navigation} />

        {user?.accountno ? (
          <View style={styles.gift_card}>
            <View style={styles.img_title}>
              <Image
                source={{
                  uri: "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg",
                }}
                style={{
                  height: 90,
                  width: 70,
                  borderRadius: 20,
                  marginRight: 40,
                }}
              />
              <View style={styles.title_time}>
                <Text style={styles.title} numberOfLines={1}>
                  {user?.accountname}
                </Text>
                <Text style={styles.time}>{user?.accountno}</Text>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.noAcctText}>
            {user?.firstname}, you don't have a bank account on Presto, please
            kindly add a bank account and proceed with your transactions
          </Text>
        )}

        {/****************** form body*******************/}
        <ScrollView style={styles.body}>
          <Text style={styles.input_text}>Add Account</Text>
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
          {/* <TextInput
            value={accountName}
            onChangeText={text => setAccountName(text)}
            style={styles.input}
            placeholder="Afeez Olamide"
          /> */}
        </ScrollView>
        <Text
          style={{
            color: "red",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          {validate}
        </Text>
        <LinearButton
          title="Add Account"
          onPress={handleSubmit}
          loading={loading}
        />
      </SafeAreaView>
      {openModal && <ModalComponent />}
    </>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    justifyContent: "center",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "68%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 30,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    // textAlign: "center",
    // alignItems: "center",
  },

  body: {
    marginTop: 100,
    backgroundColor: "#f4fafe",

    borderRadius: 20,
    width: "100%",
    paddingBottom: 70,
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
