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
  ScrollView,
} from "react-native";
import { Context } from "../context";
import { ModalComponent } from "../components/Modal";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import NoAccountDetails from "../components/NoAccountDetails";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../components/Colors";
import { LinearGradient } from "expo-linear-gradient";

const Withdrawal = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState(null);
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

  const handleDetails = (detail) => {
    if (!amount) {
      return alert("Please enter amount");
    }

    if (!note) {
      return alert("Please kindly fill in a note");
    }
    setDetails(detail);
  };

  console.log("details :>> ", details);
  const banks = [
    {
      bankName: "First bank",
      accountno: "2063033889",
      accountname: "AGBAJE MUHAMMED AFOLABI",
    },

    {
      bankName: "Zenith bank",
      accountno: "2063033880",
      accountname: "OLANREWAJU DANIEL",
    },
    {
      bankName: "First bank",
      accountno: "2063033881",
      accountname: "AGBAJE MUHAMMED AFOLABI",
    },

    {
      bankName: "Zenith bank",
      accountno: "2063033882",
      accountname: "OLANREWAJU DANIEL",
    },
  ];
  const handleNavigation = () => {
    const accountNumber = details.accountno;
    const accountName = details.accountname;
    const bankName = details.bankName;
    navigation.navigate("ConfirmWithdrawal", {
      details: {
        amount,
        note,
        accountNumber,
        accountName,
        bankName,
      },
    });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar title="Wallet" navigation={navigation} />
        {user?.accountno ? (
          <View style={styles.body}>
            <Text style={styles.title}>Bank Account</Text>

            {/* ***********bank array*********************** */}
            <ScrollView
              contentContainerStyle={styles.banks}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {banks.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.bank_content,
                    {
                      borderWidth:
                        item.accountno === details?.accountno ? 2 : null,
                      borderColor:
                        item.accountno === details?.accountno
                          ? colors?.primaryColor
                          : null,
                      borderRadius: RFValue(10, 580),
                    },
                  ]}
                  onPress={() => handleDetails(item)}
                >
                  <Image
                    source={{
                      uri: "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg",
                    }}
                    style={{
                      height: 70,
                      width: 70,
                      // borderRadius: 10,
                      marginBottom: 5,
                    }}
                  />
                  <Text style={styles.title} numberOfLines={1}>
                    {item?.bankName}
                  </Text>
                  <Text style={styles.title} numberOfLines={1}>
                    {item?.accountname}
                  </Text>
                  <Text style={styles.time}>{item?.accountno}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* *************form container******************* */}
            <ScrollView
              contentContainerStyle={styles.form}
              showsVerticalScrollIndicator={false}
            >
              {/* *************amount******************* */}
              <TextInput
                value={amount}
                onChangeText={(text) => setAmount(text)}
                style={styles.input}
                placeholder="Enter Amount"
              />
              {/* *************bank name******************* */}
              {details && (
                <Text style={styles.border_text}>{details?.bankName}</Text>
              )}
              {/* *************account name******************* */}
              {details && (
                <Text style={styles.border_text}>{details?.accountname}</Text>
              )}
              {/* *************account number******************* */}
              {details && (
                <Text style={styles.border_text}>{details?.accountno}</Text>
              )}
              <TextInput
                value={note}
                onChangeText={(text) => setNote(text)}
                style={[styles.input, { paddingBottom: RFValue(10, 580) }]}
                placeholder="Note.."
                multiline={true}
              />
            </ScrollView>
            {/* <View style={styles.btn_container}>
              <LinearButton
                onPress={handleWithdraw}
                title="Withdraw"
                loading={loading}
              />
            </View> */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleNavigation()}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#0B365B", "#0B365B", "#124672"]}
                style={styles.btn}
              >
                <Text style={styles.text}>Withdraw</Text>
              </LinearGradient>
            </TouchableOpacity>
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

  body: {
    backgroundColor: "#f4fafe",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  banks: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: RFValue(10, 580),
    paddingVertical: RFValue(10, 580),
    borderRadius: RFValue(10, 580),
  },
  bank_content: {
    margin: RFValue(10, 580),
    padding: RFValue(10, 580),
    width: RFValue(120, 580),
    backgroundColor: "#f4fafe",
  },
  form: {},
  // wallet_title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
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
    alignItems: "flex-end",
    // backgroundColor: "pink",
    width: "65%",
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
  input: {
    padding: 15,
    // paddingVertical:20,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: RFValue(14, 580),
  },
  border_text: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: RFValue(2, 580),
    marginVertical: RFValue(5, 580),
    padding: RFValue(10, 580),
    fontSize: RFValue(14, 580),
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
  },
});
