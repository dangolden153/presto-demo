import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import NavBar from "../components/NavBar";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import LinearButton from "../components/LinearButton";

const RateUsScreen = ({ navigation}) => {
  const [message, setMessage] = useState("");

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
      <NavBar title="Rate Us" navigation={navigation} />
      <View style={styles.content}>
      <LinearGradient
        colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
        style={styles.gradient}
      >
        <View style={styles.items}>
          <Text style={styles.headerText}>Do you like presto</Text>
          <Text style={styles.text}>
            Rate your experience{"\n"}using our app{" "}
          </Text>

          <View style={styles.starContainer}>
            <FontAwesome name="star" size={24} color="#F6EB30" />
            <FontAwesome name="star" size={24} color="#F6EB30" />
            <FontAwesome name="star" size={24} color="#F6EB30" />
            <FontAwesome name="star" size={24} color="#F6EB30" />
            <FontAwesome name="star" size={24} color="#F6EB30" />
          </View>
        </View>

        <Text style={styles.comment}>Leave us your comment</Text> 
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
          multiline={true}
          placeholder="Type your comment here"
          placeholderTextColor="#F6F6F6" 
        />
      </LinearGradient>

      <LinearButton title="Submit" />
      </View>
    </View>
  );
};

export default RateUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
    content: {
      // marginTop: 20,
      width: "100%",
      paddingHorizontal: 20,

    },
  gradient: {
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 70,
    marginTop: 20,
  },
  items: {
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontFamily: "bold",
  },
  text: {
    color: "white",
    fontFamily: "regular",
    fontSize: 20,
    textAlign: "center",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "43%",
  },
  comment: {
    color: "white",
    fontFamily: "regular",
    fontSize: 17,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    color: "white",
    height: 80,
    marginTop: 10,
  },
  placeholder: {
    //   color: "white",
    opacity: 0.7,
  },
});
