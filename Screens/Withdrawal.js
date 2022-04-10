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
import NavBar from "../components/NavBar";
import NoAccountDetails from "../components/NoAccountDetails";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../components/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { RegularText, SmallText } from "../components/Text";

const Withdrawal = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [validate, setValidate] = useState("");
  const [details, setDetails] = useState(null);
  // const {width, height} = useWindowDimensions();
  const { bankDetails } = useSelector((state) => state.BankTransactionReducer);

  // console.log("bankDetails :>> ", bankDetails);

  const { message, openModal, setOpenModal, loading } = useContext(Context);

  // **************validate form***********************
  const handleDetails = (detail) => {
    if (!amount) {
      return alert("Please enter amount");
    }

    if (!note) {
      return alert("Please kindly fill in a note");
    }
    setDetails(detail);
  };

  // **************handle navigation*****************
  const handleNavigation = () => {
    if (!details) {
      return alert("Please select a bank");
    }

    if (amount < 2000) {
      return setValidate("Minimium Withdrawal must be 2,000");
    }
    const accountNumber = details.accountno;
    const accountName = details.accountname;
    const bankName = details.bank;
    const bankCode = details.bankcode;
    navigation.navigate("ConfirmWithdrawal", {
      details: {
        amount,
        note,
        accountNumber,
        accountName,
        bankName,
        bankCode,
      },
    });
  };

  // console.log("details :>> ", details);

  const pics =
    "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg";
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar title="Withdraw" navigation={navigation} />
        {bankDetails?.length > 0 ? (
          <View style={styles.body}>
            <Text style={styles.title}>Bank Account</Text>

            {/* ***********bank array*********************** */}
            <ScrollView
              contentContainerStyle={styles.banks}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {bankDetails.map((item, index) => (
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
                      uri: item?.image || pics,
                    }}
                    style={{
                      height: 100,
                      width: "100%",
                      marginBottom: 5,
                      resizeMode: "contain",
                    }}
                  />

                  <RegularText>{item?.bank || "no bank name"}</RegularText>
                  <RegularText>{item?.accountname}</RegularText>
                  <SmallText lightTextColor>{item?.accountno}</SmallText>
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
              <Text style={{ color: "red", opacity: 0.5 }}>{validate}</Text>
              {/* *************bank name******************* */}
              {details && (
                <Text style={styles.border_text}>
                  {details?.bank || "no bank name"}
                </Text>
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

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleNavigation()}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#0B365B", "#0B365B", "#124672"]}
                style={styles.btn}
              >
                <RegularText whiteTextColor center>
                  Withdraw
                </RegularText>
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
    marginVertical: RFValue(10, 580),
    paddingVertical: RFValue(10, 580),
    borderRadius: RFValue(10, 580),
  },
  bank_content: {
    margin: RFValue(10, 580),
    padding: RFValue(10, 580),
    width: RFValue(120, 580),
    backgroundColor: "white",
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
    // fontSize: RFValue(14, 580),
    fontSize: 16,
  },
  border_text: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: RFValue(2, 580),
    marginVertical: RFValue(5, 580),
    padding: RFValue(10, 580),
    fontSize: 16,
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
