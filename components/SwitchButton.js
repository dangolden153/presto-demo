import React from "react";
import { StyleSheet, Switch } from "react-native";
import { colors } from "./Colors";

const SwitchButton = ({ isEnabled, toggleSwitch }) => {
  // console.log("isEnabled SwitchButton:>> ", isEnabled);
  return (
    <Switch
      trackColor={{ false: "#767577", true: colors?.primaryColor }}
      thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default SwitchButton;

const styles = StyleSheet.create({});
