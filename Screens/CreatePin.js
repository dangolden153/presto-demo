import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { MaterialIcons } from "@expo/vector-icons";
import { Context } from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearButton from "../components/LinearButton";
import NavBar from "../components/NavBar";

const CreatePin = ({ navigation }) => {
  const [code, setCode] = useState("");
  const { setIsAuthenticated, accessToken, loading, setLoading } =
    useContext(Context);
  // console.log("accessToken", accessToken);

  const handlePin = () => {
    if (!accessToken) {
      return null;
    }

    setLoading(true);
    // console.log("create pin token", accessToken);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer` + `${accessToken}`);

    var formdata = new FormData();
    formdata.append("pin", code);
    formdata.append("", "");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/updatepin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log(result);

        if (result?.status == "201") {
          setIsAuthenticated(true);
          storeData(accessToken);
          return;
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  };

  //  ****************store user's token ***********
  const storeData = async (value) => {
    try {
      const jsonValue = value;
      // console.log("user token", jsonValue);
      await AsyncStorage.setItem("@prestoToken", jsonValue);
      // setToken(jsonValue)
    } catch (e) {
      console.log("token error", e);
    }
  };

  return (
    <View style={styles.container}>
     

      <NavBar title="Create Pin" navigation={navigation} />
      <View style={styles.sub_container}>
        <View style={styles.pin_text}>
          <SmoothPinCodeInput
            value={code}
            onTextChange={(code) => setCode(code)}
            //   onFulfill={this._checkCode}
            //   onBackspace={this._focusePrevInput}
            cellStyle={{
              borderColor: "#0084f4",
              borderWidth: 1,
              marginHorizontal: 20,
            }}
            cellStyleFocused={{
              borderColor: "black",
            }}
            // containerStyle={{

            // }}
            cellSize={58}
          />
          <Text style={styles.Sub_header}>Create new Pin</Text>
        </View>
      </View>
      <LinearButton
        title={loading ? "creating pin" : "create pin"}
        loading={loading}
        onPress={handlePin}
      />
      <View style={{ marginBottom: 40 }} />
    </View>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 60,
    marginLeft: 10,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  Sub_header: {
    color: "#999999",
    fontSize: 15,
    marginTop: 10,
  },
  sub_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginVertical: 50,
  },
  pin_text: {
    height: 200,
    marginTop: 40,
    alignItems: "center",
  },
  btn: {
    marginTop: 50,
    width: 250,
  },
});
