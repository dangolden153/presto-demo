import React, { useContext } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";

import pics from "../images/Memoji.png";
import errorPics from "../images/sad-memoji.png";

import { useNavigation } from "@react-navigation/native";
import { Context } from "../context";

const ModalCom = ({ navigate }) => {
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
    // <View style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      backdropOpacity={0.3}
      onRequestClose={() => handleModal()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>Hello World!</Text> */}
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
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleModal()}
          >
            <Text style={styles.textStyle}>ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

export default ModalCom;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    width: "75%",
    alignSelf: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 5,
    paddingHorizontal: 15,
    margin: 5,
    elevation: 2,
    alignSelf: "flex-end",
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
