import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import menu from "../images/menu.png";
import logo from "../images/icon.png";
import graduate from "../images/user-graduate.png";
import chart from "../images/user-chart.png";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const LandingScreen = ({ navigation }) => {
  const [tab, setTab] = useState("primary");
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    semiBold: require("../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    bold: require("../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <View style={styles.nav}>
        <TouchableOpacity
          style={{ position: "absolute", left: 10 }}
          // onPress={() => navigation.goBack()}
        >
          <Image
            source={menu}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
        // style={{ position: "absolute", left: 10 }}
        // onPress={() => navigation.goBack()}
        >
          <Image
            source={logo}
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>

      {/* tab */}
      <View style={styles.tab}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setTab("primary")}
          style={tab === "primary" ? styles.selected_tab : styles.not_selected}
        >
          <Text
            style={tab === "primary" ? styles.selected_header : styles.header}
          >
            Primary
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setTab("others")}
          style={tab === "others" ? styles.selected_tab : styles.not_selected}
        >
          <Text
            style={tab === "others" ? styles.selected_header : styles.header}
          >
            Others
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      //   onPress={() => navigation.navigate("TransactionImage")}
      >
        <View style={styles.upload_btn}>
          <Image
            source={graduate}
            style={{
              width: 90,
              height: 90,
              resizeMode: "contain",
              marginBottom: 10,
            }}
          />
          <Text style={styles.selected_header}>Individual Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      //   onPress={() => navigation.navigate("TransactionImage")}
      >
        <View style={styles.upload_btn}>
          <Image
            source={chart}
            style={{
              width: 90,
              height: 90,
              resizeMode: "contain",
              marginBottom: 10,
            }}
          />
          <Text style={styles.selected_header}>Business Account</Text>
        </View>
      </TouchableOpacity>

      <Text style={{ marginTop: 50, color: "#001e5a" }}>
        Already have an Account?
      </Text>
      <TouchableOpacity style={{ marginTop: 15 }} activeOpacity={0.5}>
        <Text style={{ color: "#2fb3ff", fontSize: 16, fontFamily: "bold" }}>
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 50,
    position: "relative",
  },
  tab: {
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "#001e5a",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },

  not_selected: {
    backgroundColor: "transparent",
    width: "49%",
    paddingVertical: 10,
    borderRadius: 10,
  },

  selected_tab: {
    backgroundColor: "#2fb3ff",
    width: "49%",
    paddingVertical: 10,
    borderRadius: 10,
    // margin: 5,
  },

  selected_header: {
    color: "#001e5a",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "bold",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "bold",
  },

  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 0.0000001,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    padding: 30,
    width: 350,
    borderColor: "#2fb3ff",
    backgroundColor: "#f4fafe",
    // borderStyle:"do"
  },
});
export default LandingScreen;
