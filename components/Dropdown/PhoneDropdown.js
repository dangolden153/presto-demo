import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Select,
  CheckIcon,
  NativeBaseProvider,
  extendTheme,
  FormControl,
} from "native-base";
import { colors } from "../Colors";

// ***** native-base styling ***********
const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        borderColor: "#13547A",
        alignSelf: "center",
        backgroundColor: "transparent",
        fontSize: "15",
        borderRadius: 10,
        borderWidth: 1,
        padding: 3,
        customDropdownIconProps: {
          size: "6",
          p: "3",
          pl: "0",
          mr: 5,
        },
      },
      defaultProps: {},
      sizes: "80",
    },
  },
});

const Dropdown = ({ placeholder, width, data, setItem, item }) => {
  // **drop down fuction that check if the incoming data props an array or not ********
  const dataItems = () => {
    if (!data) {
      return (
        <Select
          selectedValue={item}
          onValueChange={(itemValue) => setItem(itemValue)}
          placeholder={placeholder}
          placeholderTextColor={colors.primaryColor}
          minWidth="100%"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          my="2"
        >
          <Select.Item label="" value="" />
        </Select>
      );
    }

    return (
      <Select
        selectedValue={item}
        onValueChange={(itemValue) => setItem(itemValue)}
        placeholder={placeholder}
        placeholderTextColor={colors.primaryColor}
        minWidth="100%"
        _selectedItem={{
          endIcon: <CheckIcon size={5} />,
          color: colors.primaryColor,
        }}
        my="2"
        color={colors.primaryColor}
      >
        {data?.map((dataItems, i) => (
          <Select.Item
            key={i}
            label={dataItems?.name || dataItems}
            value={dataItems}
          />
        ))}
      </Select>
    );
  };

  return (
    <NativeBaseProvider theme={theme}>
      <FormControl isRequired>
        <View
          style={{
            width: `${width}`,
          }}
        >
          {dataItems()}
        </View>
      </FormControl>
    </NativeBaseProvider>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
