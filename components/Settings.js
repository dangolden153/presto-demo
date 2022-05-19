import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Context } from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { SvgUri } from "react-native-svg";
import { RFValue } from "react-native-responsive-fontsize";
import SwitchButton from "./SwitchButton";
import ModalCom from "./ModalCom";
import Constants from "expo-constants";

const Settings = ({ navigation }) => {
  const [fingerprintVal, setFingerprintVal] = useState(null);
  const { user } = useSelector((state) => state.UserReducer);
  const {
    setIsAuthenticated,
    setToken,
    fingerprint,
    setFingerprint,
    setOpenModal,
    setModalMessage,
    openModal,
  } = useContext(Context);

  const nullAvatar =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  // *********logout******************
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

  //******toggle biometric switch *******
  const toggleSwitch = () => {
    setFingerprint(!fingerprint);
    setFingerprintVal("true");
    // handleModal();
  };

  // *****set finger print boolean value to device storage***********
  useEffect(() => {
    if (!fingerprintVal) return;
    const storeData = async () => {
      // console.log("fingerprint storeData:>> ", fingerprint);
      try {
        await AsyncStorage.setItem("@fingerprint", JSON.stringify(fingerprint));
      } catch (e) {
        console.log("token error", e);
      }
    };
    storeData();
  }, [fingerprint]);

  // **** get finger print boolean value  value from storage*******
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@fingerprint");
        // console.log("local stg fingerprint setting", value);
        if (value === "true") {
          setFingerprint(true);
        } else {
          setFingerprint(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [fingerprint]);

  // ********open modal on fingerprint boolean value***************
  useEffect(() => {
    if (!fingerprintVal) return;

    console.log("fingerprint handleModal:>> ", fingerprint);

    if (fingerprint) {
      setOpenModal(true);
      setModalMessage({
        status: "ok",
        text: "Biometric Enabled.",
      });
    } else {
      setOpenModal(true);
      setModalMessage({
        status: "fail",
        text: "Biometric Disabled.",
      });
    }
  }, [fingerprint]);

  // console.log("fingerprint :>> ", fingerprint);

  const handleReview = async () => {
    // Open the Android Play Store directly
    Linking.openURL(
      `market://details?id=${Constants.manifest.android.package}&showAllReviews=true`
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar title="Settings" full />

        <TouchableOpacity
          style={{
            width: RFValue(110, 580),
            height: RFValue(110, 580),
            borderRadius: 100,
            borderWidth: 10,
            borderColor: "#f4fafe",
            alignSelf: "center",
            marginVertical: RFValue(13, 580),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user?.profile_pic ? (
            <SvgUri uri={user?.profile_pic || nullAvatar} />
          ) : (
            <Image
              source={{ uri: user?.profile_pic || nullAvatar }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 300,
              }}
            />
          )}
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
            {/* *********** finger print***************** * */}
            <TouchableOpacity
              style={styles.Settings_items}
              onPress={() => toggleSwitch()}
            >
              <View style={styles.box_text}>
                <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                  <Ionicons
                    name="finger-print-outline"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.text}>Enable Biometric</Text>
              </View>
              <SwitchButton
                isEnabled={fingerprint}
                toggleSwitch={toggleSwitch}
              />
            </TouchableOpacity>

            {/* *********** Rate Us ***************** * */}
            <TouchableOpacity
              style={styles.Settings_items}
              // onPress={() => navigation.navigate("RateUsScreen")}
              onPress={() => handleReview()}
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
              onPress={() => navigation.navigate("AboutUsScreen")}
              // onPress={() => handlePress()}
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

      {/* *********response modal************************** */}
      {openModal && <ModalCom />}
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "68%",
    marginTop: 20,
    marginLeft: 10,
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    textAlign: "center",
    alignSelf: "center",
  },
  body: {
    backgroundColor: "#f4fafe",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    // flex: 1,
    width: "100%",
    padding: RFValue(5, 580),
  },

  Settings_items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 5,
    padding: 7,
  },

  box_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "45%",
  },
  box: {
    height: RFValue(40, 580),
    width: RFValue(40, 580),
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#0B365B",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 16,
    // fontFamily: "semiBold",
    color: "#999999",
    paddingTop: 15,
    paddingLeft: 20,
    // backgroundColor: "pink",
  },
  text: {
    fontSize: RFValue(12, 580),
    // fontFamily: "semiBold",
    // alignSelf: "flex-start",
  },
});
