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
  ScrollView
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import NavBar from "../components/NavBar";
import { Context } from "../AuthContext";
import LinearButton from "../components/LinearButton";
import { ModalComponent } from "../components/Modal";
import { Dimensions } from "react-native";
const deviceHeight = Dimensions.get('window').height

const Accounts = ({ navigation }) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [validate, setValidate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setModalMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { token } = useContext(Context);
// console.log('deviceHeight', deviceHeight/20);
  console.log(" add bank token", token);

  const handleValidation = () => {
    if (!bank) {
      // setValidate("please select a bank!");
      alert("please select a bank!");
      return true;
    }
    if (!accountNumber) {
      setValidate("please enter your account number!");
      alert("please enter your account number!");
      return true;
    }
    if (!accountName) { 
      setValidate("please enter your account name!");
      alert("please enter your account name!");
      return true;
    }
    if (!token) {
      setValidate("invalid token!"); 
      alert("invalid token!");
      return true;
    }
  };
  const AddBankAccountDetails = () => {
    if (handleValidation()) {
      return null;
    }
    setLoading(true);

    let myHeaders = new Headers();
    console.log("token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("bank", bank);
    formdata.append("accountname", accountName);
    formdata.append("accountno", accountNumber);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/updateaccount", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setModalMessage(result?.message)
        setOpenModal( true)
        // console.log("bank result", result);
      })
      .catch((error) => {
        setLoading(false);
        setValidate("unable to process transaction");
        console.log("error", error);
      });
  };
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <>
    <SafeAreaView style={styles.container}>
      {/* up section container */}
      <NavBar title="Account" navigation={navigation} />

      <View style={styles.gift_card}>
        <View style={styles.img_title}>
          <Image
            source={{
              uri: "https://startcredits.com/wp-content/uploads/2019/04/Access-bank.png",
            }}
            style={{
              height: 90,
              width: 70,
              borderRadius: 20,
              marginRight: 20,
            }}
          />
          <View style={styles.title_time}>
            <Text style={styles.title}>Adenike Sola</Text>
            <Text style={styles.time}>1234567890</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.trash}>
          <Feather name="trash-2" size={27} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
          <Text style={styles.input_text}>Add Account</Text>
          <TextInput
            value={bank}
            onChangeText={(text) => setBank(text)}
            style={styles.input}
            placeholder="Enter bank"
          />

          <TextInput
          value={accountNumber}
          onChangeText={(text) => setAccountNumber(text)}
           style={styles.input} placeholder="Acount number" />

          <TextInput
          value={accountName}
          onChangeText={(text) => setAccountName(text)}
          style={styles.input} placeholder="Afeez Olamide" />

      </ScrollView>
      <LinearButton title="Add Account" onPress={AddBankAccountDetails} loading={loading} />

    </SafeAreaView>
    {openModal && (
        <ModalComponent modalVisible={openModal} message={message} />
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
    marginTop: 150,
    backgroundColor: "#f4fafe",

    borderRadius: 20,
    width: "100%",
    paddingBottom: 70,
    paddingHorizontal: 10, 
  },
  title: {
    fontSize: 17,
    fontFamily: "semiBold",
  },
  time: {
    fontFamily: "regular",

    color: "#999999",
  },
  input_text: {
    fontFamily: "semiBold",
    fontSize: 16,
    marginTop:20
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
    justifyContent: "center",
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
});
