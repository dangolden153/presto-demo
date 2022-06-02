import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { BigText } from "./Text";
import { Context } from "../context";

const NavBar = ({
  title,
  navigate,
  full,
  white,
  transactionIsTrue,
  isAcctNumber,
  setOpenModal,
}) => {
  const { setModalMessage } = useContext(Context);
  const navigation = useNavigation();

  // ************handle Navigation**************
  const handleNavigation = () => {
    if (!navigate) {
      if (transactionIsTrue) {
        navigation.navigate("Dashboard"); //  ButtomTab
      } else {
        navigation.goBack();
      }
    } else {
      navigation.navigate(navigate);
    }
  };

  // ****open delete acct number modal********
  const handleModal = () => {
    setOpenModal(true);
    setModalMessage({
      text: "you are about to delete your account number",
      status: "del",
    });
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => handleNavigation()}
        style={{ position: "absolute", left: 0 }}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={white ? "white" : "black"}
        />
      </TouchableOpacity>

      <BigText blackTextColor>{title}</BigText>
      {full && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{ position: "absolute", right: 0 }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      {isAcctNumber && (
        <TouchableOpacity
          onPress={() => handleModal()}
          style={{ position: "absolute", right: 0 }}
        >
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    position: "relative",
    // paddingHorizontal:20
  },
});
