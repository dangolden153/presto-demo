import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Clipboard,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import * as ImagePicker from "expo-image-picker";
import BitcoinModalScreen from "../components/BitcoinModal";
import { Context } from "../context";
import LinearButton from "../components/LinearButton";
import { useDispatch, useSelector } from "react-redux";
import { handleSellBtc } from "../Redux/Actions/crptoTransaction";
import { useToast } from "react-native-toast-notifications";
import { QRCode as CustomQRCode } from "react-native-custom-qr-codes-expo";
import ModalCom from "../components/ModalCom";

const SellBitcoin = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [openBtcModal, setOpenBtcModal] = useState(true);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const { token, openModal, setOpenModal, setModalMessage, handleRefresh } =
    useContext(Context);
  const { getCyptoRate, getBTCAddress } = useSelector(
    (state) => state.TransactionReducer
  );
  const dispatch = useDispatch();

  const btcRate = getCyptoRate.map((rate) => {
    return rate?.btcrate;
  });

  // console.log("image :>> ", image);
  const USD =
    amount < 100 ? btcRate[0] : amount < 1000 ? btcRate[1] : btcRate[2];
  const UsdToNaira = amount * USD;
  // console.log(`USD`, USD);

  const toast = useToast();

  const handleToggleModal = () => {
    setOpenBtcModal(!openBtcModal);
  };

  ///******* */ pick image from photo library ********
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [6, 10],
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      return;
    }
  };

  // *************sending image to php backend server************************
  let filename = image.split("/").pop();
  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  // *************sending image to php backend server************************

  ///*******************handle Submit btc*********************
  const handleSubmit = () => {
    dispatch(
      handleSellBtc(
        image,
        filename,
        type,
        amount,
        token,
        setModalMessage,
        setOpenModal,
        setLoading,
        setImage,
        handleRefresh
      )
    );
  };

  // ************notification ***********
  const handleToast = () => {
    toast.show("address copied!", {
      type: "custom",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };

  const copyToClipboard = () => {
    Clipboard.setString(getBTCAddress[0]?.btcwallet);
    handleToast();
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar navigation={navigation} title="Select Bitcoin" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.body}
          scroll
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <CustomQRCode
              innerEyeStyle="diamond"
              content={getBTCAddress[0]?.barcode}
            />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            {/* <TouchableOpacity>
              <AntDesign
                style={styles.code}
                name="qrcode"
                size={180}
                color="black"
              />
            </TouchableOpacity> */}
            <Text style={[styles.btc_address, { fontWeight: "bold" }]}>
              BTC Wallet Details
            </Text>
            {getBTCAddress?.map((address, i) => (
              <Text style={styles.btc_address} numberOfLines={1}>
                {address?.btcwallet}
              </Text>
            ))}
          </View>

          <LinearButton title="Click to copy" onPress={copyToClipboard} />

          <Text>{copiedText}</Text>
          <Text style={styles.btc_text}>
            the address and the barcode are yours you can recieve bitcoin and
            please provide proof
          </Text>

          {/* ***************upload container************************** */}
          {!image && (
            <View style={styles.upload_container}>
              <Text style={styles.upload_textI}>Kindly upload Proof</Text>
              <TouchableOpacity
                style={styles.upload_btn}
                onPress={() => pickImage()}
              >
                <Feather name="upload" size={24} color="black" />
                <Text style={styles.upload_text}> Upload Proof</Text>
              </TouchableOpacity>
            </View>
          )}

          {image ? (
            <View
              style={{ position: "relative", width: "100%", marginBottom: 20 }}
            >
              <View style={{ position: "relative", alignSelf: "center" }}>
                <TouchableOpacity
                  style={styles.icon_container}
                  onPress={() => setImage("")}
                >
                  <Ionicons name="close" color="white" size={25} />
                </TouchableOpacity>
                <Image
                  source={{ uri: image }}
                  style={{ width: 170, height: 170, margin: 10 }}
                />
              </View>

              <LinearButton
                title="Sell Btc"
                loading={loading}
                onPress={handleSubmit}
              />
            </View>
          ) : (
            <View style={styles.btc_table}>
              <Text style={styles.rate_header}>Sell Bitcoin</Text>

              <View style={styles.value_table}>
                <View style={styles.value_rates}>
                  <Text style={styles.value_header}>Value</Text>
                  <Text style={styles.value_header}>Rate </Text>
                </View>

                <View style={styles.value_rates}>
                  <Text style={styles.value}>less that 100</Text>
                  <Text style={styles.value}>{btcRate[0]}</Text>
                </View>

                <View style={styles.value_rates}>
                  <Text style={styles.value}>100+ to 1,000</Text>
                  <Text style={styles.value}>{btcRate[1]}</Text>
                </View>

                <View style={styles.value_rates}>
                  <Text style={styles.value}>Above 1,000</Text>
                  <Text style={styles.value}>{btcRate[2]}</Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>

      {/* *********Bitcoin  modal************************** */}
      {openBtcModal && (
        <BitcoinModalScreen
          open={openBtcModal}
          close={setOpenBtcModal}
          handleToggleModal={handleToggleModal}
          amount={amount}
          setAmount={setAmount}
          UsdToNaira={UsdToNaira}
        />
      )}

      {/* *********response modal************************** */}
      {openModal && <ModalCom navigate="BtcTransactions" />}
    </>
  );
};

export default SellBitcoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    width: "100%",
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "68%",
    marginTop: 20,
    marginLeft: 10,
    // marginBottom: 10,
  },

  header: {
    color: "black",
    fontSize: 23,
    letterSpacing: 1,
    fontWeight: "200",
    // textAlign: "center",
    // alignItems: "center",
  },

  body: {
    backgroundColor: "#f4fafe",
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 17,
  },
  time: {
    // fontSize: 18,
    color: "#999999",
  },

  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 20,
    padding: 7,
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  status_fail: {
    color: "red",
    opacity: 0.4,
  },
  status_success: {
    color: "#00C48C",
    // opacity: 0.4,
  },
  price_status: {
    width: "40%",
  },
  btc_address: {
    fontSize: 15,
    fontWeight: "100",
    marginVertical: 2,
    color: "#666666",
    width: 300,
    textAlign: "center",
  },
  btc_text: {
    fontSize: 14,
    color: "#999999",
    textAlign: "center",
    marginTop: 10,
  },
  upload_container: {
    marginTop: 20,
    width: "100%",
  },
  upload_textI: {
    fontSize: 16,
    fontWeight: "500",
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
  },
  upload_text: {
    fontSize: 15, //
    color: "#999999",
    marginLeft: 10,
    fontWeight: "100",
  },

  btc_table: {
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  rate_header: {
    fontSize: 17, //
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  value_table: {
    width: "70%",
    marginTop: 7,
  },
  value_rates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value_header: {
    fontSize: 16, //
    fontWeight: "500",
    alignSelf: "flex-start",
    minWidth: 80,
  },
  value: {
    minWidth: 80,
    marginTop: 10,
    color: "#999999",
    fontSize: 14, //
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
