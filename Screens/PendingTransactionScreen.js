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
import Transaction from "../components/Transaction";

// const fs = require("fs");

const PendingTransactionScreen = ({ route, navigation, giftcardData }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [token, setToken] = useState(null);
  const [validate, setValidate] = useState("");

  // const { ctry, tpe, amount, value } = route?.params?.giftcardData;

  // console.log("image", image);
 

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

  //////////////////submit fuction

  const handleClearImg = () => {
    if (!token) {
      return null;
    }
    setLoading(true);

    let myHeaders = new Headers();
    console.log("sell card token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
   
    formdata.append("picture", {
      name: "dan",
      type: "image/jpeg",
      uri: image,
    });
  
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
    if (image) {
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
      <NavBar title="Transaction" navigation={navigation} />
      {/* <View style={styles.body}> */}
       

      <Transaction />
      
       


        {/* <View style={{ width: "70%", alignSelf: "center" }}>
          <LinearButton
            title="Upload"
            navigation={navigation}
            // onPress={handleSellGiftcard}
            loading={loading}
          />
        </View> */}

        {validate !== "" ? (
          <Text style={{ color: "red", opacity: 0.6, alignSelf: "center", marginTop: 10}}>
            {validate}
          </Text>
        ) : null}
      {/* </View> */}
    </View>
  );
};

export default PendingTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: "white",
  },

});


