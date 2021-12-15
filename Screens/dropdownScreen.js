import React from "react";
import { View, Text } from "react-native";
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

const theme = extendTheme({
  components: {
    Select: {
      baseStyle: {
        // borderColor: "red.600",
        // backgroundColor: "#f3002e",

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

const dropdownScreen = ({navigation}) => {
  const [service, setService] = React.useState("");
  console.log(service);
  return (
    // <View style={{ flex: 1, marginTop: 40 }}>
    <NativeBaseProvider theme={theme}>
      <Center flex={1} px="3">
        <VStack alignItems="center" space={2}>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label=" Research" value="ux" />
            <Select.Item label=" Development" value="web" />
            <Select.Item label="Development" value="cross" />
            <Select.Item label=" Designing" value="ui" />
            <Select.Item label=" Development" value="backend" />
          </Select>
        </VStack>
      </Center>

      {/* <Center > */}
      <Container flex={1} px="3" ml="10">
        <FormControl isRequired>
          {/* <FormControl.Label></FormControl.Label> */}
          <Text>Choose service</Text>
          <Select
            minWidth="300"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
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
          {/* <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Please make a selection!
            </FormControl.ErrorMessage> */}
        </FormControl>
      </Container>
      {/* </Center> */}
    </NativeBaseProvider>
  );
};

export default dropdownScreen;
