import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { Context } from "../AuthContext";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// const fs = require("fs");

const UploadGiftcardScreen = ({ route, navigation, giftcardData }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [receipt, setReceipt] = useState("");
  // const { token } = useContext(Context);
  const [token, setToken] = useState(null);
  const [validate, setValidate] = useState("");

  const { country, type, amount, value } = route?.params?.giftcardData;

  // console.log("image", image);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@userToken");
        if (value !== null) {
          // value previously stored
          setToken(value);
          console.log("@card token", value);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  /// pick image from photo library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      return;
    }
  };

  /// pick Receipt from photo library
  const pickReceipt = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setReceipt(result.uri);
      return;
    }
  };

  //////////////////submit fuction

  // const handleSubmit = () => {
  //   let data = new FormData();
  //   data.append("amount", "200");
  //   data.append("type", "abc");
  //   data.append("country", "usa");
  //   data.append("value", "10");
  //   data.append("picture", image);
  //   data.append("receipt", receipt);

  //   let config = {
  //     method: "post",
  //     url: "https://api.prestohq.io/api/cardtransaction",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnByZXN0b2hxLmlvXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQwMzQ2MjkxLCJleHAiOjE2NDAzNDk4OTEsIm5iZiI6MTY0MDM0NjI5MSwianRpIjoiZ05YYzJmaklrRkZlVW9QeiIsInN1YiI6MTE0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.xNQFoqtOKn-A0M83MhlhJ0Z8rG-nTjKWWYNrmTuR_DE",
  //       // ...data.getHeaders(),
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log((response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const handleSellGiftcard = () => {
    if (!token) {
      return null;
    }
    setLoading(true);

    let myHeaders = new Headers();
    console.log("sell card token", token);
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnByZXN0b2hxLmlvXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQwMzQ2MjkxLCJleHAiOjE2NDAzNDk4OTEsIm5iZiI6MTY0MDM0NjI5MSwianRpIjoiZ05YYzJmaklrRkZlVW9QeiIsInN1YiI6MTE0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.xNQFoqtOKn-A0M83MhlhJ0Z8rG-nTjKWWYNrmTuR_DE"
    // );

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("country", country);
    formdata.append("amount", amount);
    formdata.append("value", value);
    formdata.append("type", type);
    formdata.append("picture", {
      name: "dan",
      type: "image/jpeg",
      uri: image,
    });
    formdata.append("receipt", {
      name: "dan",
      type: "image/jpeg",
      uri: receipt,
    });
    // formdata.append("receipt", receipt);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/cardtransaction", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if (result?.result === "Transaction Sent") {
          setValidate(result?.result);
          navigation.navigate("ButtomTab");
        } else {
          setValidate("unable to process transaction");
        }
        console.log("card result", result.result);
      })
      .catch((error) => {
        setLoading(false);
        setValidate("unable to process transaction");
        console.log("error", error);
      });
  };

  ///////function to display either image preview or instruction text to upload images
  const handleImagePreview = () => {
    if (image || receipt) {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 5
          }}
        >
          {image !== "" ? (
            <View style={{ position: "relative" }}>
              <TouchableOpacity
                style={styles.icon_container}
                onPress={() => setImage("")}
              >
                <Ionicons name="close" color="white" size={25} />
              </TouchableOpacity>
              <Image
                source={{ uri: image }}
                style={{ width: 120, height: 120, margin: 10 }}
              />
            </View>
          ) : null}

          {receipt !== "" ? (
            <View style={{ position: "relative" }}>
              <TouchableOpacity
                style={styles.icon_container}
                onPress={() => setReceipt("")}
              >
                <Ionicons name="close" color="white" size={25} />
              </TouchableOpacity>
              <Image
                source={{ uri: receipt }}
                style={{ width: 120, height: 120, margin: 10 }}
              />
            </View>
          ) : null}
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={styles.upload_textI}>Upload Picture</Text>
          <Text style={styles.value}>Choose how to upload image below</Text>
          <Text style={styles.value}>Image not be greater than 5mb</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <NavBar title="Sell Giftcard" navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.btc_table}>
          <Text style={styles.rate_header}>Summary</Text>

          <View style={styles.value_table}>
            <View style={styles.value_rates}>
              <Text style={styles.value}>Country:</Text>
              <Text style={styles.rate}>{country || "USD"}</Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>Card type:</Text>
              <Text style={styles.rate}>{type || "Physical card"}</Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>min time:</Text>
              <Text style={styles.rate}>15mins</Text>
            </View>

            <View style={styles.value_rates}>
              <Text style={styles.value}>Amount:</Text>
              <Text style={styles.rate}>{amount || "35,000.00"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.upload_container}>
          <Text style={styles.upload_textI}>Kindly upload your Card</Text>
          <TouchableOpacity
            style={styles.upload_btn}
            onPress={() => pickImage()}
          >
            <Feather name="upload" size={24} color="#999999" />
            <Text style={styles.upload_text}> Upload Cards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.upload_container}>
          <Text style={styles.upload_textI}>Kindly upload your Receipt</Text>
          <TouchableOpacity
            style={styles.upload_btn}
            onPress={() => pickReceipt()}
          >
            <Feather name="upload" size={24} color="#999999" />
            <Text style={styles.upload_text}> Upload Receipt</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>{handleImagePreview()}</View>

        <View style={{ width: "70%", alignSelf: "center" }}>
          <LinearButton
            title="Upload"
            navigation={navigation}
            onPress={handleSellGiftcard}
            loading={loading}
          />
        </View>

        {validate !== "" ? (
          <Text style={{ color: "red", opacity: 0.6, alignSelf: "center", marginTop: 10}}>
            {validate}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default UploadGiftcardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  body: {
    backgroundColor: "#f4fafe",
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
  },
  upload_container: {
    marginTop: 30,
    width: "100%",
  },
  upload_textI: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
    borderColor: "#999999",
    // borderStyle:"do"
  },
  upload_text: {
    fontSize: 18,
    color: "#999999",
    marginLeft: 10,
    fontWeight: "100",
  },

  btc_table: {
    width: "100%",
    borderRadius: 20,
    marginTop: 10,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  rate_header: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  value_table: {
    width: "100%",
    marginTop: 7,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 7,
    elevation: 15,
  },
  value_rates: {
    flexDirection: "row",
    // alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  value_header: {
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "flex-start",
    minWidth: 80,
  },
  value: {
    marginTop: 10,
    color: "#999999",
    fontSize: 16,
  },
  rate: {
    marginTop: 10,
    color: "black",
    fontSize: 16,
    textAlign: "right",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 20,
    width: "70%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
  icon_container: {
    position: "absolute",
    top: -2,
    right: -2,
    zIndex: 100,
    backgroundColor: "#666666",
    width: 28,
    height: 28,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});