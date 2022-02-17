import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Transaction = ({ navigation, lastTransaction }) => {
  const [uploadCard, setUploadCard] = useState(false);
  const togglePickCard = () => setUploadCard(!uploadCard);

  

  const [fontLoaded, error] = useFonts({
    Italic: require("../assets/fonts/raleway/Raleway-Italic.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
    medium: require("../assets/fonts/raleway/Raleway-Medium.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  if (!lastTransaction) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex:1, }}>
        <Text style={{fontSize:20,  fontFamily:"Italic"}}>no pending transaction...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* *************************the body of transaction screen ************************* */}
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.gift_card}>
            <View style={styles.img_title}>
              <Image
                source={{
                  uri: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
                }}
                style={{ height: 70, width: 70 }}
              />
              <View style={styles.title_time}>
                <Text style={styles.title}>{lastTransaction?.type}</Text>
                <Text style={styles.time}>
                  {moment(lastTransaction?.created_at).format("ll")}
                </Text>
              </View>
            </View>

            <View style={styles.price_del}>
              <Text style={styles.price}>{lastTransaction?.value}</Text>
              <Text
                style={
                  lastTransaction.status === "0"
                    ? styles.status_fail
                    : styles.status_success
                }
              >
                {lastTransaction?.status === "0" ? "pending" : "complete"}
              </Text>
            </View>
          </View>

          {/* ****************************Card container ************************* */}

          {uploadCard ? (
            <View style={styles.upload_container}>
              <Text style={styles.upload_textI}>Kindly upload clear image</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("TransactionImage")}
              >
                <View style={styles.upload_btn}>
                  <Feather name="upload" size={24} color="#999999" />
                  <Text style={styles.upload_text}>
                    Kindly upload clear picture
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                source={{
                  uri: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
                }}
                style={{ height: 200, width: "100%" }}
              />
              <TouchableOpacity
                onPress={() => togglePickCard()}
                style={{ position: "absolute", bottom: -10, right: 30 }}
              >
                <Ionicons name="ios-download-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

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
    width: "65%",
    marginTop: 20,
    marginLeft: 10,
  },

  header: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#f4fafe",
    // height: ,
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
  },
  card: {
    // width: "80%",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  gift_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  upload_container: {
    margin: 10,
  },
  upload_btn: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#999999",
    borderRadius: 0.0000001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
    // borderStyle:"do"
  },
  upload_text: {
    fontSize: 18,
    color: "#999999",
  },
  status_fail: {
    color: "red",
    opacity: 0.4,
  },
  status_success: {
    color: "#00C48C",
    // opacity: 0.4,
  },
  price_del: {
    alignItems: "flex-end",
  },
});
