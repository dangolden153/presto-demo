import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/core";
import Bitcoin from "../images/btc.svg";
import USDT from "../images/usdt.svg";
import CARD from "../images/cards.svg";

const TransactionItems = ({ datas, btc, usdt, card }) => {
  const navigation = useNavigation();
  console.log("datas", datas);
  const status =
    datas?.status == "0"
      ? "pending"
      : datas?.status == "1"
      ? "successful"
      : "failed";

  const colors =
    datas?.status == "0"
      ? "#ff9d3a"
      : datas?.status == "1"
      ? "green"
      : "#f9886c";

  const Img = btc ? Bitcoin : usdt ? USDT : CARD;
  const title = btc ? "BTC" : usdt ? "USDT" : datas.type;
  const amount = btc ? datas.amount : usdt ? datas.amount : datas.value;
  return (
    <TouchableOpacity
      style={styles.gift_card}
      onPress={() =>
        navigation.navigate("TransactionDetail", { datas, card, btc, usdt })
      }
    >
      <View style={styles.img_title}>
        <Img style={{ marginRight: 10 }} />
        <View style={styles.title_time}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>
            {moment(datas.created_at).format("LT")}
          </Text>
        </View>
      </View>

      <View style={styles.price_status}>
        <Text numberOfLines={1} style={[styles.time, { textAlign: "right" }]}>
          ${amount}
        </Text>
        {datas.failure && (
          <Text
            numberOfLines={1}
            style={{ color: "black", width: 100, textAlign: "right" }}
          >
            {datas.failure}
          </Text>
        )}
        <Text style={{ color: colors }}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItems;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  time: {
    // fontSize: 18,
    color: "#999999",
    width: 100
    // backgroundColor: "pink",
  },

  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 4,
    borderRadius: 20,
    padding: 7,
    width: "100%"
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  status_fail: {
    color: "red",
    opacity: 0.4
  },
  status_success: {
    color: "#00C48C"
    // opacity: 0.4,
  },
  price_status: {
    // width: "40%",
    // backgroundColor: "pink",
    alignItems: "flex-end"
  }
});
