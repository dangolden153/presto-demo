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
import { Context } from "../context";
import { ModalComponent } from "../components/Modal";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import NoAccountDetails from "../components/NoAccountDetails";

const Withdrawal = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const { user } = useSelector((state) => state.UserReducer);

  const {
    token,
    message,
    setModalMessage,
    openModal,
    setOpenModal,
    setLoading,
    loading,
  } = useContext(Context);
  // console.log("user", user);

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
        setModalMessage(result?.message || result?.result);
        setOpenModal(true);
      })
      .catch((error) => {
        setLoading(false);
        // setValidate("unable to process transaction");
        console.log("error", error);
      });
  };

  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  // if (!user?.accountno) {
  //   return <NoAccountDetails />;
  // }

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar title="Wallet" navigation={navigation} />
        {user?.accountno ? (
          <View style={styles.body}>
            <Text style={styles.title}>Bank Account</Text>
            <View style={styles.img_title}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{
                    uri: "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg",
                  }}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                    marginBottom: 5,
                  }}
                />
                {/* <Text>{user?.bank}</Text> */}
              </View>

              <View style={styles.title_sub}>
                <Text style={styles.title}>{user?.accountname}</Text>
                <Text style={styles.time}>{user?.accountno}</Text>
              </View>
            </View>

            <TextInput
              value={amount}
              onChangeText={(text) => setAmount(text)}
              style={styles.input}
              placeholder="Enter Amount"
            />

            <LinearButton
              onPress={handleWithdraw}
              title="Withdraw"
              loading={loading}
            />
          </View>
        ) : (
          <NoAccountDetails wallet />
        )}

        {openModal && (
          <ModalComponent
            modalVisible={openModal}
            message={message}
            setModalVisible={setOpenModal}
            loading={loading}
          />
        )}
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
    fontFamily: "bold",
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
    justifyContent: "space-between",
    padding: 15,
    // marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  title_sub: {
    // marginLeft: 15,
    backgroundColor: "pink",
    width: "50%",
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
  title: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: "#666666",
    // backgroundColor: "pink",
    width: "99%",
  },
  time: {
    fontFamily: "regular",
    color: "#999999",
  },
});
