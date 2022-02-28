import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons } from "@expo/vector-icons";
import { set } from "react-native-reanimated";

const MediaScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState([]);
  const onSuccess = (data) => {
    navigation.goBack();

    // console.log("pictures data", data)
    setPhoto(data);
  };

  console.log("photooosss", photo);

  const photoData = photo.map((pics) => {
    return pics.uri;
  });

  console.log("photoData", photoData);


  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false,
      initialLoad: 100,
      assetsType: ["photo", "video"],
      minSelection: 1,
      maxSelection: 6,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: "red",
      // errorMessages: {
      //     hasErrorWithPermissions: translator(
      //         T.ERROR.HAS_PERMISSIONS_ERROR
      //     ),
      //     hasErrorWithLoading: translator(T.ERROR.HAS_INTERNAL_ERROR),
      //     hasErrorWithResizing: translator(T.ERROR.HAS_INTERNAL_ERROR),
      //     hasNoAssets: translator(T.ERROR.HAS_NO_ASSETS),
      // },
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: "pink",
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
        back: "back",
        selected: "selected",
      },
      midTextColor: "green",
      minSelection: 3,
      // buttonTextStyle: _textStyle,
      // buttonStyle: _buttonStyle,
      onBack: () => navigation.goBack(),
      onSuccess: (data) => onSuccess(data),
    }),
    []
  );

  // const widgetResize = useMemo(
  //     () => ({
  //         width: 512,
  //         compress: 0.7,
  //         base64: false,
  //         saveTo: SaveType.JPG,
  //     }),
  //     []
  // )

  return (
    <View style={styles.container}>
      <AssetsSelector
        Settings={widgetSettings}
        Errors={widgetErrors}
        Styles={widgetStyles}
        // Resize={widgetResize} // optional
        Navigator={widgetNavigator} // optional
        // CustomNavigator={{
        //   // optional
        //   Component: CustomNavigator,
        //   props: {
        //     backFunction: true,
        //     onSuccess,
        //     text: T.ACTIONS.SELECT,
        //   },
        // }}
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
