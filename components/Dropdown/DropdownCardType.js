import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  extendTheme,
  Container,
  FormControl,
} from "native-base";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        borderColor: "white",
        width: "100%",
        alignSelf: "center",
        backgroundColor: "transparent",
        fontSize: "15",
        padding: 3,
        fontFamily: "regular",
        customDropdownIconProps: {
          size: "6",
          p: "1",
          pl: "0",
          color: "black",
        },
        // placeholderTextColor: "#f3002e",
      },
      defaultProps: {
        // variants: "unstyled",
      },
      sizes: "80",
    },
  },
});

// "outline" | "rounded" | "unstyled" | "filled" | "underlined"

const DropdownCardType = ({
  data,
  item,
  setItem,
  placeholder,
  label,
  selectItemLabel,
}) => {
  const [firstloading, Error] = useFonts({
    regular: require("../../assets/fonts/raleway/Raleway-Regular.ttf"),
    bold: require("../../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!firstloading) {
    return <AppLoading />;
  }

  // const labelData = data?.map((item, i) => {
  //   return item;
  // });

  // const sortedArray = labelData.sort();
  // console.log("sortedArray", sortedArray);

  return (
    <View
      style={{
        flexGrow: 0.25,
        marginVertical: 15,
        width: "100%",
        alignSelf: "center",
      }}
    >
      <NativeBaseProvider theme={theme}>
        <FormControl isRequired>
          <TouchableOpacity
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <Select
              selectedValue={item}
              onValueChange={(itemValue) => setItem(itemValue)}
              // accessibilityLabel="Choose Service"
              placeholder={placeholder}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
            >
              {data?.map((dataItems, i) => (
                <Select.Item key={i} label={dataItems.name} value={dataItems} />
              ))}
            </Select>
          </TouchableOpacity>
        </FormControl>
      </NativeBaseProvider>
    </View>
  );
};

export default DropdownCardType;

const styles = StyleSheet.create({});
