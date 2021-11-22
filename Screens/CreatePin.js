import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const CreatePin = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const handlePin = () => {
    console.log("code", code);
    if (code.length === 4) {
      navigation.navigate("Dashboard");
    } else {
      setError("please insert a valid pin");
    }
    setCode("");
  };
  return (
    <View style={styles.container}>
      {error && (
        <TouchableOpacity onPress={() => setError(false)}>
          <Text
            style={{
              color: "red",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            {error}
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>Create Pin</Text>
      </View>

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

        <Button
          containerStyle={styles.btn}
          buttonStyle={{
            backgroundColor: "#0084F4",
            padding: 20,
            borderRadius: 10,
          }}
          title="Login"
          // raised
          // loading={loading}
          onPress={handlePin}
        />
      </View>
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
