import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Verify from "../images/ver.svg";
import { useNavigation } from "@react-navigation/native";
import CountDown from "react-native-countdown-component";
import { colors } from "../components/Colors";

const AccountVerScreen = ({ route }) => {
  const navigation = useNavigation();

  const name = route?.params;

  return (
    <>
      <View style={styles.container}>
        <Verify style={{ top: -20 }} />
        <Text style={{ fontWeight: "bold", marginVertical: 10 }}>{name}</Text>
        <Text>Account added successfully!</Text>
        <Text style={{ color: "#0B365B", marginTop: 10 }}>
          Redirecting you in 5 seconds...
        </Text>
        <CountDown
          until={5}
          size={30}
          onFinish={() => navigation.navigate("ButtomTab")}
          digitStyle={{ backgroundColor: "#ffff" }}
          digitTxtStyle={{ color: colors.primaryColor }}
          timeToShow={["S"]}
          timeLabels={{ m: "MM", s: "" }}
        />
      </View>
    </>
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
