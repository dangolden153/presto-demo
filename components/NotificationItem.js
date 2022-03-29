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
import moment from "moment";

const NotificationItem = ({ item, body, time }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { height } = useWindowDimensions();
  const { user } = useSelector((state) => state.UserReducer);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.notify_container} activeOpacity={0.6}>
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
          <Text style={styles.text}>
            {time || moment(item?.created_at).fromNow()}
          </Text>
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
        <Text style={styles.header_text}>Hi {user?.firstname}!</Text>
        <Text
          style={[
            styles.text,
            {
              height: isExpanded ? height * 0.024 : "auto",
              color: body ? "black" : "#686868",
              fontWeight: body && "bold",
            },
          ]}
        >
          {body || item.message}
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
    fontSize: RFValue(12, 580),
    marginVertical: RFValue(3, 580),
  },
});
