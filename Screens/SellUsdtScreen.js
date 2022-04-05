import React, { useContext, useState } from "react";
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
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import * as ImagePicker from "expo-image-picker";
import { handleSellUsdt } from "../Redux/Actions/crptoTransaction";
import { ModalComponent } from "../components/Modal";
import BitcoinModalScreen from "../components/BitcoinModal";
import { Context } from "../context";
import { useDispatch, useSelector } from "react-redux";
import LinearButton from "../components/LinearButton";
import { useToast } from "react-native-toast-notifications";
import WalletModal from "../components/WalletModal";

const SellUsdtScreen = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [openUsdtModal, setOpenUsdtModal] = useState(true);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const { getCyptoRate, getUSDTAddress } = useSelector(
    (state) => state.TransactionReducer
  );
  const { token, openModal, setOpenModal, setModalMessage, handleRefresh } =
    useContext(Context);
  const dispatch = useDispatch();

  const usdtRate = getCyptoRate.map((rate) => {
    return rate?.usdtrate;
  });
  // console.log("usdtRate :>> ", usdtRate);
  const USDT =
    amount < 100 ? usdtRate[0] : amount < 1000 ? usdtRate[1] : usdtRate[2];
  const UsdToNaira = amount * USDT;
  // console.log("USDT", USDT);

  const toast = useToast();

  const handleToggleModal = () => {
    setOpenUsdtModal(!openUsdtModal);
  };

  const handleToggleAdress = () => {
    setOpenAddress(!openAddress);
  };

  // console.log(`usdtRate`, usdtRate);
  /// pick image from photo library
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

  ///***************submit usdt *********************
  const handleSubmit = () => {
    dispatch(
      handleSellUsdt(
        image,
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

  const copyToClipboard = (address) => {
    Clipboard.setString(address);
    handleToast();
    handleToggleAdress();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* up section container */}

        <NavBar navigation={navigation} title="Select USDT" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.body}
        >
          {/* <View style={{ alignItems: "center" }}>
            <TouchableOpacity>
              <AntDesign
                style={styles.code}
                name="qrcode"
                size={180}
                color="black"
              />
            </TouchableOpacity>
          </View> */}

          {/* ************************USDT Rate Table******************************** */}
          <View style={styles.btc_table}>
            <Text style={styles.rate_header}>USDT Rate Table </Text>

            <View style={styles.value_table}>
              <View style={styles.value_rates}>
                <Text style={styles.value_header}>Value</Text>
                <Text style={styles.value_header}>Rate </Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>less that 100</Text>
                <Text style={styles.value}>{usdtRate[0]}</Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>100+ to 1,000</Text>
                <Text style={styles.value}>{usdtRate[1]}</Text>
              </View>

              <View style={styles.value_rates}>
                <Text style={styles.value}>Above 1,000</Text>
                <Text style={styles.value}>{usdtRate[2]}</Text>
              </View>
            </View>
          </View>

          {/* ******************Select wallet address***************************** */}
          <LinearButton
            title="Select wallet address"
            onPress={handleToggleAdress}
          />
          {openAddress && (
            <WalletModal
              copyToClipboard={copyToClipboard}
              getUSDTAddress={getUSDTAddress}
            />
          )}

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
                title="Sell USDT"
                loading={loading}
                onPress={handleSubmit}
              />
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>

      {/* *********Bitcoin  modal************************** */}
      {openUsdtModal && (
        <BitcoinModalScreen
          open={openUsdtModal}
          close={setOpenUsdtModal}
          handleToggleModal={handleToggleModal}
          amount={amount}
          setAmount={setAmount}
          UsdToNaira={UsdToNaira}
          usdt
        />
      )}

      {/* *********response modal************************** */}
      {openModal && <ModalComponent navigate="UsdtTransactions" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    // position: "relative",
  },

  body: {
    backgroundColor: "#f4fafe",
    // alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },

  upload_container: {
    marginTop: 20,
    width: "100%",
  },
  upload_textI: {
    fontSize: 18,
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
    // borderStyle:"do"
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
    alignItems: "center",
    marginBottom: 30,
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
  btc_text: {
    fontSize: 14,
    color: "#999999",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SellUsdtScreen;
