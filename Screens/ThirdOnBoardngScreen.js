import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";
import pics from "../images/thumb.png";
import btn from "../images/btn.png";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

const ThirdOnBoardngScreen = ({ navigation }) => {
  const [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    semiBold: require("../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    bold: require("../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={pics}
        style={{ height: 300, width: 300, resizeMode: "contain", top: -20 }}
      />
      <Text style={styles.heading_text}>Free Websites</Text>
      <Text style={styles.caption_text}>
        Create a one page site to share with your audience
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingScreen")}
        style={styles.btn}
      >
        <Image
          source={btn}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    // position: "relative",
    paddingTop: 150,
  },

  heading_text: {
    fontSize: 26,
    fontFamily: "bold",
    marginTop: 20,
    color: "#001E5A",
  },
  caption_text: {
    fontSize: 15,
    fontFamily: "regular",
    marginTop: 30,
    width: "70%",
    textAlign: "center",
    color: "#001E5A",
  },

  btn: {
    position: "absolute",
    bottom: 20,
    // elevation: 4,
    // borderRadius: 100,
  },
});

export default ThirdOnBoardngScreen;