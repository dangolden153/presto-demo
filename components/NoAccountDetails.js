import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import LinearButton from "./LinearButton";

const NoAccountDetails = wallet => {
  const { user } = useSelector(state => state.UserReducer);
  const navigation = useNavigation();
  // console.log(wallet);
  return (
    <View style={styles.noAcct}>
      <Text style={styles.noAcctText}>
        {user?.firstname}, you don't have a bank account on Presto, please
        kindly add a bank account and proceed with your transactions
      </Text>

      <View style={{ marginVertical: 30 }} />
      {wallet && (
        <LinearButton
          navigation={navigation}
          title="Add Account"
          navigate="Accounts"
        />
      )}
    </View>
  );
};

export default NoAccountDetails;

const styles = StyleSheet.create({
  noAcct: {
    flex: 1
    // padding: 15
  },

  noAcctText: {
    fontSize: 17,
    fontFamily: "regular",
    textAlign: "center",
    marginTop: 40
  }
});
