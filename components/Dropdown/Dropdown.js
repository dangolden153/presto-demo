import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  extendTheme,
  Container,
  FormControl,
  WarningOutlineIcon
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        borderColor: "white",
        width: "100%",
        alignSelf: "center",
        fontSize: "15",
        padding: 3,
        fontFamily: "regular",
        customDropdownIconProps: {
          size: "6",
          p: "1",
          pl: "0"
        }
      },
      defaultProps: {},
      sizes: "80"
    }
  }
});

const Dropdown = ({
  data,
  item,
  setItem,
  placeholder,
  label,
  selectItemLabel,
  dataProps
}) => {
  // console.log(`card`, card)
  const [error, setError] = useState("");
  const [firstloading, Error] = useFonts({
    regular: require("../../assets/fonts/raleway/Raleway-Regular.ttf"),
    bold: require("../../assets/fonts/raleway/Raleway-Bold.ttf")
  });

  // console.log("country", country);
  if (!firstloading) {
    return <AppLoading />;
  }

  const dataItems = () => {
    if (!data) {
      return (
        <Select
          accessibilityLabel="Choose Service"
          placeholder={placeholder}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }}
          mt="1"
        >
          <Select.Item label={selectItemLabel} value={label} />
        </Select>
      );
    }

    return (
      <Select
        selectedValue={item}
        onValueChange={itemValue => setItem(itemValue)}
        // accessibilityLabel="Choose Service"
        placeholder={placeholder}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />
        }}
        mt="1"
      >
        {data?.map((dataItems, i) => (
          <Select.Item
            key={i}
            // onPress={() => console.log(i)}
            // label={dataItems.cardname || dataItems.countryName || dataItems}
            label={dataItems.cardname || dataItems || dataProps}
            value={dataItems}
          />
        ))}
      </Select>
    );
  };

  return (
    <>
      {error !== "" ? (
        <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>
      ) : null}

      <View
        style={{
          flexGrow: 0.25,
          marginVertical: 15,
          width: "95%",
          alignSelf: "center"
        }}
      >
        <NativeBaseProvider theme={theme}>
          <FormControl isRequired>
            <Text
              style={{ fontSize: 16, marginBottom: 5, fontFamily: "regular" }}
            >
              {label}
            </Text>
            <View
              style={{
                width: "100%",
                alignSelf: "center",
                backgroundColor: "white",
                paddingHorizontal: 10,
                borderRadius: 10
              }}
            >
              {dataItems()}
            </View>
          </FormControl>
        </NativeBaseProvider>
      </View>
    </>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
