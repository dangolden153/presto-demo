import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useMemo, useState } from "react";
import { AssetsSelector } from "expo-images-picker";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Context } from "../context";

const MediaScreen = ({ navigation }) => {
  const { setCardPictures } = useContext(Context);
  const onSuccess = (data) => {
    navigation.goBack();

    setCardPictures(data);
  };

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false,
      initialLoad: 100,
      assetsType: ["photo", "video"],
      maxSelection: 8,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: "red",
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: "black",
      spinnerColor: "purple",
      widgetWidth: 99,
      screenStyle: {
        borderRadius: 5,
        overflow: "hidden",
      },
      widgetStyle: {
        margin: 10,
      },
      videoIcon: {
        Component: Ionicons,
        iconName: "ios-videocam",
        color: "gray",
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: "ios-checkmark-circle-outline",
        color: "white",
        bg: "brown",
        size: 26,
      },
    }),
    []
  );

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: "finish",
        back: <Ionicons name="arrow-back" size={24} color="white" />,
        selected: "selected",
        color: "white",
      },
      midTextColor: "white",
      minSelection: 1,
      buttonTextStyle: { color: "white" },

      onBack: () => navigation.goBack(),
      onSuccess: (data) => onSuccess(data),
    }),
    []
  );

  return (
    <View style={styles.container}>
      <AssetsSelector
        Settings={widgetSettings}
        Errors={widgetErrors}
        Styles={widgetStyles}
        Navigator={widgetNavigator} // optional
      />
    </View>
  );
};

export default MediaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
