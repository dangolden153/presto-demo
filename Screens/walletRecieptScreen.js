import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { RFValue } from "react-native-responsive-fontsize";
import LinearButton from "../components/LinearButton";

const walletRecieptScreen = ({ route }) => {
  const { accountname, accountno, amount, bank, created_at, email } =
    route?.params?.item;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <View style={styles.container}>
      <NavBar title="Transaction Receipt" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.body}
      >
        <View style={styles.text_container}>
          <Text style={[styles.text, { fontSize: 12 }]}>{created_at}</Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", marginVertical: RFValue(5, 580) },
            ]}
          >
            N{amount && numberWithCommas(amount)}
          </Text>
          <Text style={styles.text}>{accountname}</Text>
          <Text style={styles.text}>{accountno}</Text>
        </View>

        {/* ****************sender********************* */}
        <View style={styles.description_container}>
          <Text style={styles.text}>To</Text>
          <Text style={styles.border_text}>
            {bank === "null" ? "bank name unavailable" : bank}
          </Text>
        </View>

        {/* //****************email********************* */}

        <View style={styles.description_container}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.border_text}>{email}</Text>
        </View>

        {/* //****************acount number********************* */}
        <View style={styles.description_container}>
          <Text style={styles.text}>Account Number</Text>
          <Text style={styles.border_text}>{accountno}</Text>
        </View>

        {/* //****************Descriptionr********************* */}
        {/* <View style={styles.description_container}>
          <Text style={styles.text}>Description</Text>
          <Text style={styles.border_text}>note</Text>
        </View> */}

        {/* //****************Status********************* */}
        {/* <View style={styles.status}>
          <Text style={styles.text}>Status</Text>
          <Text style={styles.text}>
            {transationDetails?.status === 200 ? "Success" : "failed"}
          </Text>
        </View> */}

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: RFValue(15, 580),
          }}
        >
          <LinearButton title="close" navigate="ButtomTab" />
        </View>
      </ScrollView>
    </View>
  );
};

export default walletRecieptScreen;

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
    fontSize: 15,
  },
  description_container: {
    marginVertical: RFValue(5, 580),
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
