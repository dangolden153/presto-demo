import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const LinearButton = ({ navigation, title, onPress ,loading}) => {
  console.log('loading', loading);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress()}
        style={styles.container}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#2998f7", "#2e9bf7", "#86c6fd"]}
          style={styles.btn}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffff" />
          ) : (
            <Text style={styles.text}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  container: { width: "100%" },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",

  },
});
