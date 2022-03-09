import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import pics from "../images/Memoji.png";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Context } from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import profile from "../images/profile.png";
import account from "../images/account.png";
import pass from "../images/pass.png";
import pin from "../images/pin.png";
import star from "../images/star.png";
import about from "../images/about.png";
import logout from "../images/log-out.png";
import help from "../images/help.png";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const Settings = ({ navigation }) => {
  const { user } = useSelector(state => state.UserReducer);
  const { setIsAuthenticated, setToken } = useContext(Context);
  const nullAvatar =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("@prestoToken");
      console.log("@card token", "logout");
      setIsAuthenticated(false);
      setToken(null);
    } catch (e) {
      console.log("token remove error", e);
    }
  };

  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf")
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* up section container */}

      <NavBar title="Settings" full />

      <TouchableOpacity
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          borderWidth: 10,
          borderColor: "#f4fafe",
          alignSelf: "center",
          marginVertical: 25,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={{ uri: user?.profile_pic || nullAvatar }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
        />
      </TouchableOpacity>

      {/* ***********   profile account Bvn ***************** * */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* ***********   Edit profile ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <FontAwesome5 name="user" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Edit profile</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          {/* ***********   account ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("Accounts")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <FontAwesome5 name="calculator" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Accounts</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ***********  change password and change pin ***************** * */}
        <Text style={styles.heading}>Security</Text>

        <View style={styles.body}>
          {/* ***********  Change Password ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("ChangePasswordScreen")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <Feather name="lock" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Change Password</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          {/* ***********  Change Pin ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("ChangePin")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <MaterialCommunityIcons
                  name="key-change"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles.text}>Change Pin</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ***********  Account and support ***************** * */}
        <Text style={styles.heading}>Account and Support</Text>

        <View style={styles.body}>
          {/* *********** Rate Us ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("RateUsScreen")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <Feather name="star" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Rate Us</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          {/* ***********Help & Support***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            onPress={() => navigation.navigate("SupportScreen")}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <AntDesign name="questioncircleo" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Help & Support</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          {/* *********** About Us ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            // onPress={() => navigation.navigate("Accounts")}
            // onPress={() => Logout()}
          >
            <View style={styles.box_text}>
              <TouchableOpacity style={styles.box}>
                <MaterialIcons
                  name="supervised-user-circle"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles.text}>About Us</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          {/* *********** log out ***************** * */}
          <TouchableOpacity
            style={styles.Settings_items}
            // onPress={() => navigation.navigate("Accounts")}
            onPress={() => Logout()}
          >
            <View style={styles.box_text}>
              <TouchableOpacity
                style={[styles.box, { backgroundColor: "#F3002E" }]}
              >
                <Feather name="log-out" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>Log out</Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center"
  },
  body: {
    backgroundColor: "#f4fafe",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    // flex: 1,
    width: "100%",
    padding: 10
  },

  Settings_items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 5,
    padding: 7
  },

  box_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // width: "45%",
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#0B365B",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 16,
    fontFamily: "semiBold",
    color: "#999999",
    paddingTop: 15,
    paddingLeft: 20
    // backgroundColor: "pink",
  },
  text: {
    fontSize: 16,
    fontFamily: "semiBold"
    // alignSelf: "flex-start",
  }
});
