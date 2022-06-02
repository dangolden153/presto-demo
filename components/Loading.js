import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "./Colors";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primaryColor} size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1a1a50",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
