import React from "react";
import { Image, View, Text } from "react-native";
import { Modal, Button, ScrollView, NativeBaseProvider } from "native-base";
import pics from "../images/Memoji.png";
import { useNavigation } from "@react-navigation/native";

export function ModalComponent({ modalVisible, setModalVisible,message }) {
  const navigation = useNavigation();
  const [size, setSize] = React.useState("md");


  return (
    <>
      <NativeBaseProvider>
        <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
          <Modal.Content maxH="250">
           
            <Modal.Body style={{justifyContent: "center",
                  alignItems: "center",}}> 
              <View
                style={{
                  height: 110,
                  width: 110,
                  backgroundColor: "#f4fafe",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center" ,
                  elevation: 10,
                  marginTop:10
                }}
              > 
                <Image
                  source={pics}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "white",
                    borderRadius: 100,
                  }}
                />
              </View>

              <ScrollView>
                <Text style={{textAlign: "center",marginTop:5, fontWeight: "bold"}}>
                  {message}
                </Text>
              </ScrollView>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={1}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => navigation.navigate("ButtomTab")}
                >
                  Close
                </Button>
               
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </NativeBaseProvider>

     
    </>
  );
}
