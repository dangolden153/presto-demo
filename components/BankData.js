import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { colors } from "./Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { RegularText, SmallText } from "./Text";

const BankData = ({
  handleDetails,
  details,
  handleDeleteAcct,
  withdraw,
  acctNumber,
}) => {
  const { bankDetails } = useSelector((state) => state.BankTransactionReducer);
  const pics =
    "https://i0.wp.com/techeconomy.ng/wp-content/uploads/2021/03/Banks-credit.jpg";

  return (
    <ScrollView
      contentContainerStyle={styles.banks}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {bankDetails.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.bank_content,
            {
              borderWidth: item.accountno === details?.accountno ? 2 : null,
              borderColor:
                item.accountno === details?.accountno
                  ? colors?.primaryColor
                  : null,
              borderRadius: RFValue(10, 580),
              backgroundColor:
                item.accountno === acctNumber ? colors.transPrimaryColor : null,
            },
          ]}
          onPress={() => withdraw && handleDetails(item)}
          onLongPress={() => handleDeleteAcct(item)}
        >
          <Image
            source={{
              uri: item?.image || pics,
            }}
            style={{
              height: 100,
              width: "100%",
              marginBottom: 5,
              resizeMode: "contain",
            }}
          />

          <RegularText>{item?.bank || "no bank name"}</RegularText>
          <RegularText>{item?.accountname}</RegularText>
          <SmallText lightTextColor>{item?.accountno}</SmallText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BankData;

const styles = StyleSheet.create({
  banks: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: RFValue(10, 580),
    paddingVertical: RFValue(10, 580),
    borderRadius: RFValue(10, 580),
  },

  bank_content: {
    margin: RFValue(10, 580),
    padding: RFValue(10, 580),
    width: RFValue(120, 580),
    backgroundColor: "white",
  },
});
