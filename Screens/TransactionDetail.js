import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "../components/NavBar";
import { Context } from "../context";
import Transaction from "../components/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardTransactions } from "../Redux/Actions/crptoTransaction";

const TransactionDetail = ({ route, navigation }) => {
  const [validate, setValidate] = useState("");
  const dispatch = useDispatch();
  const { transaction } = useSelector((state) => state.TransactionReducer);
  const { token, setModalMessage } = useContext(Context);
  const { card, datas, btc, usdt } = route?.params;
  // console.log("datas", datas);
  const lastTransaction = transaction[transaction.length - 1];
  // console.log("lastTransaction", route ?.params);

  // *************fetch card transaction **************************
  useEffect(() => {
    dispatch(fetchCardTransactions(token, setModalMessage));
  }, []);

  return (
    <View style={styles.container}>
      <NavBar
        title="Transaction Details"
        navigation={navigation}
        // navigate="ButtomTab"
      />

      <Transaction
        card={card}
        datas={datas}
        btc={btc}
        usdt={usdt}
        lastTransaction={lastTransaction}
      />

      {validate !== "" ? (
        <Text
          style={{
            color: "red",
            opacity: 0.6,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          {validate}
        </Text>
      ) : null}
      {/* </View> */}
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
});
