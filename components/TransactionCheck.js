import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import TransactionItems from "./TransactionItems";
import { Context } from "../context";
import { fetchCardTransactions } from "../Redux/Actions/crptoTransaction";
import NavBar from "./NavBar";
const TransactionCheck = ({ navigation }) => {
  const { transaction } = useSelector((state) => state.TransactionReducer);
  const { token, setModalMessage } = useContext(Context);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const handleTrans = () => {
    dispatch(fetchCardTransactions(token, setModalMessage));
  };

  if (!transaction) {
    return <Loading />;
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}
        <NavBar
          navigation={navigation}
          title="Transaction"
          navigate="PendingTransactionScreen"
          full
        />

        <View style={styles.body} showsVerticalScrollIndicator={false}>
          <TextInput style={styles.input} placeholder="Search Transaction" />

          {transaction.length == 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 20 }}>No transaction found</Text>
            </View>
          ) : (
            <FlatList
              data={transaction}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({ item }) => <TransactionItems datas={item} />}
              onRefresh={handleTrans}
              refreshing={refresh}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default TransactionCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  body: {
    backgroundColor: "#f4fafe",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    // paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
});
