import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const LinearButton = ({ title, onPress, loading, navigate }) => {
  const navigation = useNavigation();
  const handleSubmit = () => {
    if (!onPress || loading) return;
    onPress();
  };

  const handleNavigation = () => {
    if (!navigate) return;
    navigation.navigate(navigate);
    // console.log("navigate");
  };
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  // console.log('loading', loading);
  return (
    <View>
      {navigate ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleNavigation()}
          style={styles.container}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            // colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
            style={styles.btn}
          >
            <Text style={styles.text}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSubmit()}
          style={styles.container}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#0B365B", "#0B365B", "#124672"]}
            style={styles.btn}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffff" />
            ) : (
              <Text style={styles.text}>{title}</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  container: { width: "100%" },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "medium",
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});
