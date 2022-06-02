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
import Memoji from "../images/memoji3.jpg";
import errorPics from "../images/sad-memoji.png";

import { useNavigation } from "@react-navigation/native";
import { Context } from "../context";
import { colors } from "./Colors";

const ModalCom = ({
  navigate,
  transaction,
  isAcctNumber,
  setDeleteAcctNumber,
}) => {
  const { message, openModal, setOpenModal, setModalMessage } =
    useContext(Context);

  const navigation = useNavigation();
  // **********handle navigation*********
  const handleModal = () => {
    if (navigate) {
      setDeleteAcctNumber(true);
      navigation.navigate(navigate || "ButtomTab", { transaction });
      setOpenModal(false);
    } else if (isAcctNumber) {
      setDeleteAcctNumber(true);
      setOpenModal(false);
    } else {
      setOpenModal(false);
    }
  };

  // **********modal image*********
  const image = (value) => {
    switch (value) {
      case "ok":
        return pics;

      case "del":
        return Memoji;

      default:
        return errorPics;
    }
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
              source={image(message.status)}
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
          <View style={styles.btnContainer}>
            {isAcctNumber && (
              <Pressable
                style={styles.buttonClose}
                onPress={() => setOpenModal(false)}
              >
                <Text
                  style={[styles.textStyle, { color: colors.primaryColor }]}
                >
                  close
                </Text>
              </Pressable>
            )}
            <Pressable style={styles.button} onPress={() => handleModal()}>
              <Text style={styles.textStyle}>ok</Text>
            </Pressable>
          </View>
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
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    margin: 5,
    marginTop: 10,
  },
  buttonClose: {
    padding: 5,
    paddingHorizontal: 15,
    borderColor: colors.primaryColor,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 2,
  },
  button: {
    padding: 5,
    paddingHorizontal: 15,

    elevation: 2,
    marginHorizontal: 2,
    backgroundColor: colors.primaryColor,
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
