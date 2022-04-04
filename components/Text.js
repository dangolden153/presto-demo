import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./Colors";

// ******************Big Text************************************
export const BigText = ({
  children,
  primaryColor,
  lightTextColor,
  whiteTextColor,
  blackTextColor,
  uppercase,
  capitalize,
  regular,
  mediumWeight,
  right,
  center,
}) => {
  const color = primaryColor
    ? colors?.primaryColor
    : lightTextColor
    ? colors?.lightTextColor
    : whiteTextColor
    ? colors?.whiteTextColor
    : blackTextColor
    ? colors?.blackTextColor
    : colors?.darkTextColor;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/sand/Quicksand-Regular.ttf"),
    semibold: require("../assets/fonts/sand/Quicksand-SemiBold.ttf"),
    medium: require("../assets/fonts/sand/Quicksand-Medium.ttf"),
    bold: require("../assets/fonts/sand/Quicksand-Bold.ttf"),
    light: require("../assets/fonts/sand/Quicksand-Light.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={[
          styles.BigText,
          {
            color: color,
            textTransform:
              (uppercase && "uppercase") || (capitalize && "capitalize"),
            fontFamily: (mediumWeight && "medium") || (regular && "regular"),
            textAlign: (right && "right") || (center && "center"),
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

// ******************medium Text************************************
export const MediumText = ({
  children,
  primaryColor,
  lightTextColor,
  whiteTextColor,
  blackTextColor,
  uppercase,
  capitalize,
  regular,
  mediumWeight,
  bold,
  right,
  center,
}) => {
  const color = primaryColor
    ? colors?.primaryColor
    : lightTextColor
    ? colors?.lightTextColor
    : whiteTextColor
    ? colors?.whiteTextColor
    : blackTextColor
    ? colors?.blackTextColor
    : colors?.darkTextColor;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/sand/Quicksand-Regular.ttf"),
    semibold: require("../assets/fonts/sand/Quicksand-SemiBold.ttf"),
    medium: require("../assets/fonts/sand/Quicksand-Medium.ttf"),
    bold: require("../assets/fonts/sand/Quicksand-Bold.ttf"),
    light: require("../assets/fonts/sand/Quicksand-Light.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={[
          styles.MediumText,
          {
            color: color,
            textTransform:
              (uppercase && "uppercase") || (capitalize && "capitalize"),
            fontFamily:
              (mediumWeight && "medium") ||
              (regular && "regular") ||
              (bold && "bold"),
            textAlign: (right && "right") || (center && "center"),
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

// ******************Regular Text************************************
export const RegularText = ({
  children,
  primaryColor,
  lightTextColor,
  whiteTextColor,
  blackTextColor,
  uppercase,
  capitalize,
  mediumWeight,
  right,
  center,
}) => {
  const color = primaryColor
    ? colors?.primaryColor
    : lightTextColor
    ? colors?.lightTextColor
    : whiteTextColor
    ? colors?.whiteTextColor
    : blackTextColor
    ? colors?.blackTextColor
    : colors?.darkTextColor;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/sand/Quicksand-Regular.ttf"),
    semibold: require("../assets/fonts/sand/Quicksand-SemiBold.ttf"),
    medium: require("../assets/fonts/sand/Quicksand-Medium.ttf"),
    bold: require("../assets/fonts/sand/Quicksand-Bold.ttf"),
    light: require("../assets/fonts/sand/Quicksand-Light.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={[
          styles.RegularText,
          {
            color: color,
            textTransform:
              (uppercase && "uppercase") || (capitalize && "capitalize"),
            fontFamily: mediumWeight && "medium",
            textAlign: (right && "right") || (center && "center"),
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

// ******************Small Text************************************
export const SmallText = ({
  children,
  primaryColor,
  lightTextColor,
  whiteTextColor,
  blackTextColor,
  uppercase,
  capitalize,
  mediumWeight,
  right,
  center,
}) => {
  const color = primaryColor
    ? colors?.primaryColor
    : lightTextColor
    ? colors?.lightTextColor
    : whiteTextColor
    ? colors?.whiteTextColor
    : blackTextColor
    ? colors?.blackTextColor
    : colors?.darkTextColor;

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/sand/Quicksand-Regular.ttf"),
    semibold: require("../assets/fonts/sand/Quicksand-SemiBold.ttf"),
    medium: require("../assets/fonts/sand/Quicksand-Medium.ttf"),
    bold: require("../assets/fonts/sand/Quicksand-Bold.ttf"),
    light: require("../assets/fonts/sand/Quicksand-Light.ttf"),
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={[
          styles.SmallText,
          {
            color: color,
            textTransform:
              (uppercase && "uppercase") || (capitalize && "capitalize"),
            fontFamily: mediumWeight && "medium",
            textAlign: (right && "right") || (center && "center"),
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BigText: {
    fontFamily: "bold",
    fontSize: RFValue(15, 580),
    letterSpacing: 1,
  },
  MediumText: {
    fontFamily: "medium",
    fontSize: RFValue(14, 580),
  },
  RegularText: {
    fontFamily: "regular",
    fontSize: RFValue(12, 580),
  },

  SmallText: {
    fontFamily: "regular",
    fontSize: RFValue(10, 580),
  },
});
