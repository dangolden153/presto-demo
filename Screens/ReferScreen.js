import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import Refer from "../images/refer.svg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Copy from "../images/copy_icon.svg";
import LinearButton from "../components/LinearButton";
import { useToast } from "react-native-toast-notifications";

const ReferScreen = () => {
  const { width } = useWindowDimensions();
  const toast = useToast();

  // ************notification ***********
  const handleToast = () => {
    toast.show("address copied!", {
      type: "custom",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  const copyToClipboard = (referal_code) => {
    Clipboard.setString(referal_code);
    handleToast();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Refer & Earn" />
      <View style={styles.inner_container}>
        <Refer />
        <Text style={styles.bold}>Refer and earn</Text>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          Refer a friend today and earn up to {"\n"}N2,000 when they trade{"\n"}
          up to $1,000.
        </Text>

        <TouchableOpacity
          style={[styles.upload_btn, { width: width * 0.8 }]}
          onPress={() => copyToClipboard("gteryhuu253")}
        >
          <Text style={styles.code_text}> gteryhuu253</Text>
          <View style={styles.copy}>
            <Copy />
            <Text style={styles.copy_text}>copy code</Text>
          </View>
        </TouchableOpacity>

        <Text
          style={[
            styles.text,
            { color: "#124672", marginTop: RFValue(15, 580) },
          ]}
        >
          Share the code between and ask them{"\n"} to enter it during sign up
        </Text>
      </View>
      {/* <View
        style={{
          flex: 1,
          margin: 10,
          justifyContent: "flex-end",
        }}
      >
        <LinearButton title="Invite" />
      </View> */}
    </SafeAreaView>
  );
};

export default ReferScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: RFValue(15, 580),
  },

  inner_container: {
    marginTop: RFValue(100, 580),
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: RFValue(15, 580),
    marginVertical: RFValue(12, 580),
  },
  text: {
    textAlign: "center",
    fontSize: RFValue(11, 580),
  },

  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFValue(30, 580),
    padding: RFValue(10, 580),
    backgroundColor: "#E9E9E9",
    borderColor: "#999999",
  },
  copy: {
    // backgroundColor: "pink",

    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0.16,
  },
  code_text: {
    fontWeight: "bold",
    fontSize: RFValue(12, 580),
  },
  copy_text: {
    fontSize: RFValue(11, 580),
    marginLeft: RFValue(5, 580),
  },
});
