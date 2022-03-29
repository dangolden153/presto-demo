import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { RFValue } from "react-native-responsive-fontsize";
import LinearButton from "../components/LinearButton";

const ReceiptScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar title="Receipt" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.body}
      >
        <View style={styles.text_container}>
          <Text style={[styles.text, { fontSize: RFValue(11, 580) }]}>
            On Feb 23 2022 at 12:23pm
          </Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", marginVertical: RFValue(5, 580) },
            ]}
          >
            5000
          </Text>
          <Text style={styles.text}>OLanrewaju Daniel</Text>
        </View>

        <View style={styles.description_container}>
          <Text style={styles.text}>To</Text>
          <Text style={styles.border_text}>Zenith Bank</Text>
        </View>

        <View style={styles.description_container}>
          <Text style={styles.text}>Description</Text>
          <Text style={styles.border_text}>Gift card withdrawal </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.text}>Status</Text>
          <Text style={styles.text}>Sucess</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: RFValue(15, 580),
          }}
        >
          <LinearButton title="close" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  body: {
    flex: 1,

    backgroundColor: "#f4fafe",
    marginTop: 10,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text_container: {
    width: "100%",
    marginVertical: RFValue(10, 580),
    alignItems: "center",
  },
  text: {
    color: "#0B365B",
    fontSize: RFValue(14, 580),
  },
  border_text: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: RFValue(2, 580),
    marginVertical: RFValue(5, 580),
    padding: RFValue(10, 580),
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(15, 580),
  },
});
