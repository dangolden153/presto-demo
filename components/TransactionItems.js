import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import moment from "moment";

const TransactionItems = ({ datas }) => {
  const status =
    datas?.status == "0"
      ? "pending"
      : datas?.status == "1"
      ? "successful"
      : "failed";

  const colors =
    datas?.status == "0"
      ? "#ff9d3a"
      : datas?.status == "1" 
      ? "green"
      : "#f9886c";


  return (
    <View style={styles.gift_card}>
      <View style={styles.img_title}>
        <Image
          source={{
            uri: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/B/56261_1561559385.jpg",
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <View style={styles.title_time}>
          <Text style={styles.title}>{datas.type}</Text>
          <Text style={styles.time}>
            {moment(datas.created_at).format("LT")}
          </Text>
        </View>
      </View>

      <View style={styles.price_status}>
        <Text style={{ fontSize: 19 }} style={styles.time}>
          {datas.value}
        </Text>
        {datas.failure && (
          <Text style={{ color: "black" }}>{datas.failure}</Text>
        )}
        <Text style={{ color: colors }}>
          {status}
        </Text>


    
      </View>
    </View>
  );
};

export default TransactionItems;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    textTransform: "capitalize",
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
    marginVertical: 4,
    borderRadius: 20,
    padding: 7,
    width: "100%",
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
    // width: "40%",
    // backgroundColor: "pink",
    alignItems: "flex-end",
  },
});
