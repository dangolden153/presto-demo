import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import Presto from "../images/presto_logo.svg";
import { useSelector } from "react-redux";
import { SmallText, RegularText } from "./Text";

const NotificationItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { height } = useWindowDimensions();
  const { user } = useSelector((state) => state.UserReducer);
  // console.log("item :>> ", item);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.notify_container}
        activeOpacity={0.6}
        onPress={() => handleToggle()}
      >
        <View style={styles.header}>
          <Presto style={{ marginRight: RFValue(5, 580) }} />
          <Text style={[styles.text, { color: "#124672" }]}>Presto</Text>
          <View
            style={{
              backgroundColor: "#0B365B",
              height: RFValue(5, 580),
              width: RFValue(5, 580),
              borderRadius: 100,
              marginHorizontal: RFValue(5, 580),
              marginTop: RFValue(2, 580),
            }}
          />
          {/* <Text style={styles.text}>{moment(item?.date).fromNow()}</Text> */}
          <SmallText>{item?.date}</SmallText>
          <TouchableOpacity
            style={{
              marginLeft: RFValue(5, 580),
              marginTop: RFValue(2, 580),
            }}
            onPress={() => handleToggle()}
          >
            {isExpanded ? (
              <AntDesign name="up" size={13} color="black" />
            ) : (
              <AntDesign name="down" size={13} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <RegularText>Hi {user?.firstname}! </RegularText>
          <RegularText bold blackTextColor>
            {" "}
            {item?.title}
          </RegularText>
        </View>

        <Text
          style={[
            styles.text,
            {
              height: isExpanded ? height * 0.024 : "auto",
              color: "#686868",
              // fontWeight: body && "bold",
            },
          ]}
        >
          {item.message}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  notify_container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: RFValue(10, 580),
    marginVertical: RFValue(10, 580),
    borderColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
  },
  text: {
    fontSize: RFValue(10, 580),
    color: "#686868",
  },
  header_text: {
    fontSize: RFValue(11, 580),
    marginVertical: RFValue(3, 580),
  },
});
