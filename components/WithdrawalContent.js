import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./Colors";

const WithdrawalContent = ({ transationDetails }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amount:</Text>
      <Text style={styles.subtitle}>{transationDetails?.amount}</Text>

      <Text style={styles.title}>Beneficiary:</Text>
      <Text style={styles.subtitle}>{transationDetails?.accountName}</Text>
      <Text style={styles.title}>Beneficiary Bank:</Text>
      <Text style={styles.subtitle}>{transationDetails?.bankName}</Text>
      <Text style={styles.title}>Description:</Text>
      <Text style={styles.subtitle}>{transationDetails?.note}</Text>
    </View>
  );
};

export default WithdrawalContent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderRadius: RFValue(10, 580),
    padding: RFValue(15, 580),
  },
  title: {
    fontSize: RFValue(14, 580),
    color: colors.primaryColor,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: RFValue(14, 580),
    color: colors.primaryColor,
    marginBottom: RFValue(8, 580),
  },
});
