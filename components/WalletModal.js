import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
const windowWidth = Dimensions.get("window").width;

const wallet = [
  { type: "ERC20", text: "3nofvnodslrdt67yuyullgfdXd" },
  { type: "TRC20", text: "3nofvnodslrdt67yuyullgfdXd" },
  { type: "BEP2", text: "3nofvnodslrdt67yuyullgfdXd" },
  { type: "BEP20", text: "3nofvnodslrdt67yuyulltyuiwe" }
];
const WalletModal = ({ copyToClipboard }) => {
  return (
    <View style={styles.container}>
      {wallet.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.address}
          onPress={() => copyToClipboard(item.text)}
        >
          <Text>{item.type}</Text>
          <Text>{item.text}</Text>
          <Ionicons name="ios-copy-outline" size={24} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WalletModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    // left: "30%",
    backgroundColor: "white",
    width: windowWidth * 0.9,
    alignItems: "center",
    alignSelf: "center",
    zIndex: 100,
    padding: 10,
    borderRadius: 10,
    elevation: 5
  },
  address: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5
    // backgroundColor: "green"
  }
});
