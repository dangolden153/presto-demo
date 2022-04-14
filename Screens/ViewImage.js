import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../components/Colors";
import NavBar from "../components/NavBar";

const ViewImage = ({ route }) => {
  //   console.log("route?.params :>> ", route?.params?.failedImage);
  const image = route?.params?.failedImage;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        <NavBar white title="Error Image" />
      </View>
      <Image
        source={{ uri: image }}
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackTextColor,
    alignItems: "center",
    // justifyContent: "center",
  },
});
