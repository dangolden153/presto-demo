import React, { useContext } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import {
  Modal,
  Button,
  ScrollView,
  NativeBaseProvider,
  Center,
} from "native-base";
import pics from "../images/Memoji.png";
import errorPics from "../images/sad-memoji.png";

import { useNavigation } from "@react-navigation/native";
import { Context } from "../context";

export function ModalComponent({ modalVisible, setModalVisible, navigate }) {
  const { message, openModal, setOpenModal, setModalMessage } =
    useContext(Context);
  const navigation = useNavigation();

  const handleModal = () => {
    if (!navigate) {
      // navigation.navigate(navigate || "ButtomTab")
      setOpenModal(false);
      return;
    }
    navigation.navigate(navigate || "ButtomTab");
    // setModalMessage("")
    // console.log("messg", message)
    setOpenModal(false);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Modal
          isOpen={openModal}
          onClose={setOpenModal}
          size="md"
          style={{ position: "relative" }}
          // _backdrop={{
          //   _dark: {
          //     bg: "coolGray.800",
          //   },
          //   bg: "#001e5a13",
          // }}
        >
          <Modal.Content style={styles.container}>
            <Modal.Body
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={{
                  height: 110,
                  width: 110,
                  backgroundColor: "#f4fafe",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={message.status == "ok" ? pics : errorPics}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "white",
                    borderRadius: 100,
                  }}
                />
              </View>

              <ScrollView>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 5,
                    fontWeight: "bold",
                  }}
                >
                  {message.text}
                </Text>
              </ScrollView>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={1}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => handleModal()}
                >
                  Ok
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 80,
    // width: "90%",
    // backgroundColor:"pink"
  },
});
