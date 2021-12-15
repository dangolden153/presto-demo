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
        borderColor: "transparent",
        width:"100%",
        alignSelf: "center",
        backgroundColor: "#ffff",
        fontSize: "15",
        padding: 3,
        fontFamily:"regular",
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

const DropdownGiftcard = ({navigation}) => {
  const [service, setService] = React.useState("");
  const [firstloading, Error] = useFonts({
    regular: require("../../assets/fonts/raleway/Raleway-Regular.ttf"),
    bold: require("../../assets/fonts/raleway/Raleway-Bold.ttf"),
})


    if(!firstloading){
     return   <AppLoading />
    }
  console.log(service);
  return (
    <View style={{ flexGrow: .25, marginVertical: 15,width: "95%", alignSelf: "center"}}>
    <NativeBaseProvider theme={theme}>
   
        <FormControl isRequired>

          <Text style={{fontSize: 16, marginBottom:5,fontFamily:"regular"}}>Giftcard</Text>
          <View style={{width: "100%", alignSelf: "center",backgroundColor: "white", paddingHorizontal:10,borderRadius:10,}} >

          <Select
            // minWidth=""
            accessibilityLabel="Choose Service"
            placeholder="Select card type"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        
              </View>

        </FormControl>
      </NativeBaseProvider>

    </View>

  )
};


export default DropdownGiftcard

const styles = StyleSheet.create({})
