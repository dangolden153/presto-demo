import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import LinearButton from "../components/LinearButton";
import { Context } from "../context";
import * as ImagePicker from "expo-image-picker";
import { ModalComponent } from "../components/Modal";
import { sellGiftcard } from "../Redux/Actions/crptoTransaction";
import { useDispatch } from "react-redux";
import CardImage from "../components/CardImage";

const UploadGiftcardScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [receipt, setReceipt] = useState("");
  const dispatch = useDispatch();
  const {
    token,
    setOpenModal,
    openModal,
    setModalMessage,
    cardPictures,
    setCardPictures,
    handleRefresh,
  } = useContext(Context);

  const {
    country,
    tpe,
    amount,
    value,
    image_big,
    image_small,
    total,
    setType,
    setCountry,
    setValue,
    setAmount,
  } = route?.params?.giftcardData;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let photoData = cardPictures.map((pics) => {
    return pics.uri;
  });
  // console.log("photoData :>> ", photoData);
  // *************sending image to php backend server************************
  let filename = receipt.split("/").pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let photoFile_1 = photoData[0] && photoData[0].split("/").pop();
  let matchFile_1 = /\.(\w+)$/.exec(photoFile_1);
  let typeFile_1 = matchFile_1 ? `image/${matchFile_1[1]}` : `image`;

  let photoFile_2 = photoData[1] && photoData[1].split("/").pop();
  let matchFile_2 = /\.(\w+)$/.exec(photoFile_2);
  let typeFile_2 = matchFile_2 ? `image/${matchFile_2[1]}` : `image`;

  let photoFile_3 = photoData[2] && photoData[2].split("/").pop();
  let matchFile_3 = /\.(\w+)$/.exec(photoFile_3);
  let typeFile_3 = matchFile_3 ? `image/${matchFile_3[1]}` : `image`;

  let photoFile_4 = photoData[3] && photoData[3].split("/").pop();
  let matchFile_4 = /\.(\w+)$/.exec(photoFile_4);
  let typeFile_4 = matchFile_4 ? `image/${matchFile_4[1]}` : `image`;

  let photoFile_5 = photoData[4] && photoData[4].split("/").pop();
  let matchFile_5 = /\.(\w+)$/.exec(photoFile_5);
  let typeFile_5 = matchFile_5 ? `image/${matchFile_5[1]}` : `image`;

  let photoFile_6 = photoData[5] && photoData[5].split("/").pop();
  let matchFile_6 = /\.(\w+)$/.exec(photoFile_6);
  let typeFile_6 = matchFile_6 ? `image/${matchFile_6[1]}` : `image`;

  let photoFile_7 = photoData[6] && photoData[6].split("/").pop();
  let matchFile_7 = /\.(\w+)$/.exec(photoFile_7);
  let typeFile_7 = matchFile_7 ? `image/${matchFile_7[1]}` : `image`;

  let photoFile_8 = photoData[7] && photoData[7].split("/").pop();
  let matchFile_8 = /\.(\w+)$/.exec(photoFile_8);
  let typeFile_8 = matchFile_8 ? `image/${matchFile_8[1]}` : `image`;

  let photoFile_9 = photoData[8] && photoData[8].split("/").pop();
  let matchFile_9 = /\.(\w+)$/.exec(photoFile_9);
  let typeFile_9 = matchFile_9 ? `image/${matchFile_9[1]}` : `image`;
  // *************sending image to php backend server************************

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

  ///*******************submit card function *********************
  const handleSellGiftcard = () => {
    if (photoData?.length === 0) {
      return alert("kindly upload your card.");
    }
    dispatch(
      sellGiftcard(
        token,
        country,
        amount,
        value,
        tpe,
        image,
        receipt,
        photoData,
        setLoading,
        setModalMessage,
        setOpenModal,
        image_big,
        image_small,
        setCardPictures,
        setType,
        setCountry,
        setValue,
        setAmount,
        handleRefresh,
        filename,
        type,
        total,
        photoFile_1,
        photoFile_2,
        photoFile_3,
        photoFile_4,
        photoFile_5,
        photoFile_6,
        photoFile_7,
        photoFile_8,
        photoFile_9,
        typeFile_1,
        typeFile_2,
        typeFile_3,
        typeFile_4,
        typeFile_5,
        typeFile_6,
        typeFile_7,
        typeFile_8,
        typeFile_9
      )
    );
  };

  ///////function to display either image preview or instruction text to upload images
  const handleImagePreview = () => {
    if (image || receipt || photoData) {
      return (
        <CardImage
          image={image}
          receipt={receipt}
          photoData={photoData}
          setReceipt={setReceipt}
          setImage={setImage}
        />
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
    <>
      <View style={styles.container}>
        <NavBar title="Sell Giftcard" navigation={navigation} />
        <ScrollView
          contentContainerStyle={styles.body}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.btc_table}>
            <Text style={styles.rate_header}>Summary</Text>

            <View style={styles.value_table}>
              <View style={styles.value_rates}>
                <Text style={styles.value}>Country:</Text>
                <Text style={styles.rate}>{country.trim() || "USD"}</Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>Card type:</Text>
                <Text style={styles.rate}>{tpe || "Physical card"}</Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>Amount:</Text>
                <Text style={styles.rate}>
                  ${numberWithCommas(amount) || ""}
                </Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>Total Amount:</Text>
                <Text style={styles.rate}>
                  N{numberWithCommas(total) || ""}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.upload_container}>
            <Text style={styles.upload_textI}>Kindly upload your Card</Text>
            <TouchableOpacity
              style={styles.upload_btn}
              onPress={() => navigation.navigate("MediaScreen")}
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

          <LinearButton
            title="Upload"
            navigation={navigation}
            onPress={handleSellGiftcard}
            loading={loading}
          />
          {/* </View> */}
        </ScrollView>
      </View>

      {/* *********response modal************************** */}
      {openModal && <ModalComponent navigate="TransactionHistory" />}
    </>
  );
};

export default UploadGiftcardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  body: {
    backgroundColor: "#f4fafe",
    borderRadius: 20,
    // flex: 1,
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
    marginTop: 5,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  rate_header: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 5,
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
    color: "black",
    fontSize: 16,
  },
  rate: {
    marginTop: 10,
    color: "#999999",
    fontSize: 16,
    textAlign: "right",
    textTransform: "capitalize",
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
