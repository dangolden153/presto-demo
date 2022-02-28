import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const NavBar = ({ navigation, title, navigate, full }) => {
  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
  });

  const handleNavigation = () => {
    if (!navigate) {
      navigation.goBack();
    } else {
      navigation.navigate(navigate);
    }
  };

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", left: 0 }}
      >
        <MaterialIcons
          name="arrow-back-ios"
          // style={{ marginLeft: 15 }}
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <Text style={styles.header}>{title}</Text>

      {full && (
        <TouchableOpacity
          onPress={()  => handleNavigation()}
          style={{ position: "absolute", right: 0 }}
        >
          <AntDesign name="wallet" size={24} color="black" />
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

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    fontFamily: "medium",
    // textAlign: "center",
    // alignItems: "center",
  },
});
