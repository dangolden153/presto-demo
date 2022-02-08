import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Modal, Center, NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import LinearButton from "./LinearButton";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

function BitcoinModalScreen({
  open,
  close,
  handleToggleModal,
  amount,
  setAmount,
  UsdToNaira,
  usdt
}) {


  let [firstLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    bold: require("../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (!firstLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NativeBaseProvider>
        <Center>
          <Modal
            style={{ position: "relative" }}
            isOpen={open}
            onClose={close}
            size="full"
          >
            <Modal.Content
              // height="450"
              style={{
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                // backgroundColor: "pink",
                padding: 20,
              }}
            >
              <Modal.Body>
                <View style={styles.container}>
                  <View style={styles.topLine} />
                  <View style={styles.nav}>
                    <TouchableOpacity
                      style={styles.bg}
                      onPress={() => handleToggleModal()}
                    >
                      <MaterialIcons
                        name="arrow-back-ios"
                        size={20}
                        color="white"
                        style={{ alignSelf: "center" }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bg}>
                      <FontAwesome5 name="btc" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.text}>
                    Enter the crypto Amount you want to sell
                  </Text>
                  <Text style={styles.sub_text}>
                    $5 is the minimum trade amount accepted, your Presto Wallet
                    will be credited instantly
                  </Text>

                  {/* **********************selling in dollar container******************** */}
                  <View style={styles.selling_container}>
                    <Text style={styles.sellText}>You Sell</Text>
                    <View style={styles.sellInputContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontFamily: "semibold" }}>
                          USD
                        </Text>

                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.currencyIconBg}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "bold",
                              color: "#666666",
                            }}
                          >
                            $
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <TextInput
                        style={styles.input}
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        keyboardType="numeric"
                      />
                      <Text
                        style={{ color: "#fbddc3", fontFamily: "semibold" }}
                      >
                        Available: $0
                      </Text>
                    </View>
                  </View>

                  {/* **********************getting in naira container******************** */}
                  <View style={styles.selling_container}>
                    <Text style={styles.sellText}>You Get</Text>
                    <View style={styles.sellInputContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontFamily: "semibold" }}>
                          NGN
                        </Text>

                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.currencyIconBg}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "bold",
                              color: "green",
                            }}
                          >
                            N
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.value}>
                        <Text style={{ fontFamily: "semibold" }}>
                          {UsdToNaira ? numberWithCommas(UsdToNaira) : ""}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <LinearButton title="Sell Btc" onPress={handleToggleModal} />
                </View>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Center>
      </NativeBaseProvider>
    </>
  );
}

export default BitcoinModalScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  nav: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bg: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: "#484d6d",
    justifyContent: "center",
    alignItems: "center",
  },
  topLine: {
    backgroundColor: "#e8e6ea",
    height: 6,
    width: 80,
    alignSelf: "center",
    position: "absolute",
    top: -10,
    // marginBottom:10
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "bold",
    marginTop: 15,
  },
  sub_text: {
    color: "gray",
    textAlign: "center",
    fontSize: 14,
    opacity: 0.7,
    fontFamily: "regular",
  },
  selling_container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    // backgroundColor:"green"
    marginTop: 40,
  },
  sellInputContainer: {
    alignItems: "flex-end",
    // backgroundColor:"yellow",
    width: "50%",
  },
  sellText: {
    fontSize: 16,
    fontFamily: "semibold",
    color: "#999999",
  },
  input: {
    backgroundColor: "#e8e6ea",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    fontFamily: "semibold",
  },
  value: {
    backgroundColor: "#e8e6ea",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  currencyIconBg: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: "#e8e6ea",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  // sellInput:{},
});
