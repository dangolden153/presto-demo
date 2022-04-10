import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { Context } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../Redux/Actions/user";
import { ModalComponent } from "../components/Modal";
import { SvgUri } from "react-native-svg";

const EditProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserReducer);
  const {
    loading,
    token,
    setModalMessage,
    openModal,
    setOpenModal,
    handleRefresh,
    setLoading,
  } = useContext(Context);

  const nullAvatar =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  const handleSubmit = () => {
    dispatch(
      updateProfile(
        firstName,
        lastName,
        phone,
        token,
        setModalMessage,
        setOpenModal,
        handleRefresh,
        setLoading,
        username
      )
    );
  };
  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semiBold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!firstLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.container}>
        {/* up section container */}
        <NavBar title="Edit Profile" full />
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
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* <SvgUri uri={user?.profile_pic || nullAvatar} /> */}
          {user?.profile_pic ? (
            <SvgUri uri={user?.profile_pic || nullAvatar} />
          ) : (
            <Image
              source={{ uri: nullAvatar }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 300,
              }}
            />
          )}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 5,
              bottom: 0,
            }}
            onPress={() => navigation.navigate("SelectAvatar")}
          >
            <Feather name="camera" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* ************body**************** */}
        <ScrollView
          style={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            {/* <View> */}
            <View>
              <Text style={styles.input_text}>First Name</Text>
              <TextInput
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                style={styles.input}
                // placeholder="Adenike"
              />
            </View>

            <View style={styles.text_input}>
              <Text style={styles.input_text}>Last Name</Text>
              <TextInput
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                style={styles.input}
                // placeholder="Sola"
              />
            </View>

            <View style={styles.text_input}>
              <Text style={styles.input_text}>Username</Text>
              <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
              />
            </View>

            <View style={styles.text_input}>
              <Text style={styles.input_text}>Phone number</Text>
              <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.input}
              />
            </View>
            <LinearButton
              title="Save"
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        </ScrollView>
      </View>
      {openModal && <ModalComponent navigate="ButtomTab" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  body: {
    backgroundColor: "#f4fafe",

    borderRadius: 20,
    // flex: 1,
    width: "100%",
    padding: 10,
  },
  input_text: {
    fontFamily: "semiBold",
    fontSize: 16,
  },
  text_input: {
    marginTop: 7,
  },
  input: {
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "regular",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 7,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default EditProfile;
