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
import { Button } from "react-native-elements";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import pics from "../images/bg.png";
import { Context } from "../AuthContext";
import {ModalComponent} from '../components/Modal'

const Withdrawal = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [message, setModalMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const { token } = useContext(Context);



  const handleWithdraw = () => {
    if (!amount) {
      alert("please enter an amount"); 
      return null;
    }
    setLoading(true);

    let myHeaders = new Headers();
    console.log("token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("amount", amount);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/requestwithdrawal", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log("bank result", result);
        setModalMessage( result?.message ||result?.result )
        setOpenModal( true)
      })
      .catch((error) => {
        setLoading(false);
        // setValidate("unable to process transaction");
        console.log("error", error);
      });
  };

  return (
    <>

        <SafeAreaView style={styles.container}>

      {/* up section container */}
 
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Wallet</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Bank Account</Text>
        <View style={styles.img_title}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Polaris-Bank-Limited.png",
            }}
            style={{ height: 70, width: 70, borderRadius: 10 }}
          />
          <View style={styles.title_sub}>
            <Text style={{ fontSize: 14, width: "75%" }}>
              302563784779-Akinkunmi Micheal Polaris Bank
            </Text>
          </View>
        </View>

        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          style={styles.input}
          placeholder="Enter Amount"
        />

        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4", 
            padding: 20,
            borderRadius: 10,
            marginTop: 80,
          }}
          title="Withdraw"
          // raised
          loading={loading} 
          onPress={() => handleWithdraw()}  
        />
      </View>
      {openModal && <ModalComponent modalVisible={openModal} message={message}  />}

    </SafeAreaView>

    </>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    // position:"relative"
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "58%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 30,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },

  body: {
    backgroundColor: "#f4fafe",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 40,
  },
  sub_title: {
    fontSize: 18,
    color: "#999999",
    width: "90%",
    textAlign: "center",
    marginTop: 15,
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    padding: 15,
    // marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  title_sub: {
    marginLeft: 10,
  },

  input: {
    padding: 15,
    // paddingVertical:20,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: 17,
  },
});
