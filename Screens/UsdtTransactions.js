import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import TransactionItems from "../components/TransactionItems";
import { Context } from "../context";
import { fetchUSDTTransactions } from "../Redux/Actions/crptoTransaction";
import NavBar from "../components/NavBar";
import * as StoreReview from "expo-store-review";

const UsdtTransactions = ({ navigation, route }) => {
  const { usdtTransaction } = useSelector((state) => state.TransactionReducer);
  const { token, setModalMessage } = useContext(Context);
  const [refresh, setRefresh] = useState(false);
  const transactionIsTrue = route?.params?.transaction;

  const dispatch = useDispatch();

  const handleTrans = () => {
    dispatch(fetchUSDTTransactions(token, setModalMessage));
  };

  // ********app review***************
  useEffect(() => {
    if (!transactionIsTrue) return;
    const storeReview = async () => {
      try {
        if (await StoreReview.hasAction()) {
          // await StoreReview.requestReview();
          console.log(await StoreReview.requestReview());
          console.log("review hasAction", await StoreReview.hasAction());
        } else {
          console.log("review false");
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    storeReview();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* ***********up section container*********** */}
        <NavBar
          title="USDT Transaction"
          transactionIsTrue={transactionIsTrue}
        />

        <View style={styles.body} showsVerticalScrollIndicator={false}>
          {/* <TextInput style={styles.input} placeholder="Search Transaction" /> */}

          {usdtTransaction?.length === 0 ? (
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
              data={usdtTransaction}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({ item }) => <TransactionItems usdt datas={item} />}
              onRefresh={handleTrans}
              refreshing={refresh}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
export default UsdtTransactions;

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
    paddingVertical: 10,
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
