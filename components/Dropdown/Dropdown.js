import React from "react";
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
  WarningOutlineIcon,
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        // borderColor: "transparent",
        borderColor: "white",
        width: "100%",
        alignSelf: "center",
        // backgroundColor: "#ffff",
        fontSize: "15",
        padding: 3,
        fontFamily: "regular",
        customDropdownIconProps: {
          size: "6",
          p: "1",
          pl: "0",
          // color: "black",
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

const Dropdown = ({ navigation, data , item, setItem,placeholder, label}) => {
  // console.log(`card`, card)
  // const [service, setService] = React.useState("");
  const [firstloading, Error] = useFonts({
    regular: require("../../assets/fonts/raleway/Raleway-Regular.ttf"),
    bold: require("../../assets/fonts/raleway/Raleway-Bold.ttf"),
  });

  if (!firstloading) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flexGrow: 0.25,
        marginVertical: 15,
        width: "95%",
        alignSelf: "center",
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
              borderRadius: 10,
            }}
          >
            <Select
              selectedValue={item}
              onValueChange={(itemValue) => setItem(itemValue)}
              // minWidth=""
              accessibilityLabel="Choose Service"
              placeholder={placeholder}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
            >
              {data?.map((dataItems) => (
                <Select.Item
                  key={dataItems.title}
                  label={dataItems.title}
                  value={dataItems.value}
                />
              ))}
              {/* <Select.Item label="Web Development" value="web" />
           <Select.Item label="Cross Platform Development" value="cross" />
           <Select.Item label="UI Designing" value="ui" />
           <Select.Item label="Backend Development" value="backend" /> */}
            </Select>
          </View>
        </FormControl>
      </NativeBaseProvider>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
