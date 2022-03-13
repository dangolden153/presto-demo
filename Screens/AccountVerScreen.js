import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Verify from "../images/ver.svg";
import { useNavigation } from "@react-navigation/native";

const AccountVerScreen = ({ route }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("ButtomTab");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const name = route?.params;
  return (
    <View style={styles.container}>
      <Verify style={{ top: -20 }} />
      <Text style={{ fontWeight: "bold", marginVertical: 10 }}>{name}</Text>
      <Text>Account added successfully!</Text>
      <Text style={{ color: "#0B365B", marginTop: 10 }}>
        Redirecting you in 5 seconds...
      </Text>
    </View>
  );
};

export default AccountVerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
