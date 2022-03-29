import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import NavBar from "../components/NavBar";

const SupportScreen = ({ navigation }) => {
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <NavBar title="Help & Support" navigation={navigation} />
      <View style={styles.content}>
        {/* *************Chat with us***************** */}
        {/* <TouchableOpacity style={styles.textBg} activeOpacity={0.5}>
          <Text style={styles.text}>Chat with us</Text>
        </TouchableOpacity> */}

        {/* *************Send us an Email***************** */}
        <TouchableOpacity style={styles.textBg} activeOpacity={0.5}>
          <Text style={styles.text}>Send us an Email</Text>
        </TouchableOpacity>

        {/* *************FAQ***************** */}
        {/* <TouchableOpacity style={styles.textBg} activeOpacity={0.5}>
          <Text style={styles.text}>FAQ (Frequently Ask Question)</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  textBg: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "#1E2234",
    fontFamily: "semibold",
  },
});
