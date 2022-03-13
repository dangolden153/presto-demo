import React, { useContext } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import {
  Modal,
  Button,
  ScrollView,
  NativeBaseProvider,
  Center
} from "native-base";
import pics from "../images/Memoji.png";

export function AvatarModal({
  modalVisible,
  setModalVisible,
  handleAvatarUpdate
}) {
  const handleModal = () => {
    // navigation.navigate(message.status == "ok" ? navigate : "ButtomTab")
    setModalVisible(false);
    handleAvatarUpdate();
  };

  return (
    <>
      <NativeBaseProvider>
        <Center flex={1}>
          <Modal
            isOpen={modalVisible}
            onClose={setModalVisible}
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
                    marginTop: 10
                  }}
                >
                  <Image
                    source={pics}
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: "white",
                      borderRadius: 100
                    }}
                  />
                </View>

                <ScrollView>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 5,
                      fontWeight: "bold"
                    }}
                  >
                    confirm change avatar
                  </Text>
                </ScrollView>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={1}>
                  <Button
                    variant="solid"
                    colorScheme="blueGray"
                    onPress={() => setModalVisible(false)}
                  >
                    cancel
                  </Button>
                  <Button
                    variant="outline"
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute"

    // bottom: 80,
    // width: "90%",
    // backgroundColor:"pink"
  }
});
