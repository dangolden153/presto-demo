import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="gray" size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#1e1a1a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
