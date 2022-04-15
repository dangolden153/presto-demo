import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SmallText } from "./Text";

const WalletItems = ({ item }) => {
  const navigation = useNavigation();
  console.log("item :>> ", item);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const accountNumber = item?.accountno.toString();
  let lastIndex = accountNumber[accountNumber.length - 1];
  const accountNum = accountNumber.substr(6, lastIndex);
  const pics =
    "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg";
  //   console.log("accountNumber :>> ", accountNum);

  // console.log("item :>> ", item);

  return (
    <TouchableOpacity
      style={styles.content}
      onPress={() => navigation.navigate("walletRecieptScreen", { item })}
    >
      <Image
        style={styles.img}
        source={{
          uri: item?.bank_image || pics,
        }}
      />
      <View>
        <SmallText blackTextColor>{item?.bank}</SmallText>
        <SmallText blackTextColor>****{accountNum}</SmallText>
      </View>
      <SmallText blackTextColor>N{numberWithCommas(item?.amount)}</SmallText>
    </TouchableOpacity>
  );
};

export default WalletItems;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
