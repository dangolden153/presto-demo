import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import { AvatarModal } from "../components/AvatarModal";
import { updateAvatar } from "../Redux/Actions/user";
import { useDispatch } from "react-redux";
import { Context } from "../context";
import { ModalComponent } from "../components/Modal";
import Loading from "../components/Loading";
import { SvgUri } from "react-native-svg";

const SelectAvatar = () => {
  const [openImgmgModal, setOpenImgModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const {
    token,
    openModal,
    setOpenModal,
    setModalMessage,
    setRefresh,
    setLoading,
    loading,
    refresh,
  } = useContext(Context);
  const dispatch = useDispatch();
  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const setImage = (url) => {
    setOpenImgModal(true);
    setImageUrl(url);
  };

  const handleAvatarUpdate = () => {
    dispatch(
      updateAvatar(
        imageUrl,
        token,
        setModalMessage,
        setOpenModal,
        handleRefresh,
        setLoading
      )
    );
  };
  const avatar8 = "https://api.prestohq.io/assets/Avatar9.svg";
  const avatar7 = "https://api.prestohq.io/assets/Avatar8.svg";
  const avatar6 = "https://api.prestohq.io/assets/Avatar7.svg";
  const avatar5 = "https://api.prestohq.io/assets/Avatar6.svg";
  const avatar4 = "https://api.prestohq.io/assets/Avatar5.svg";
  const avatar3 = "https://api.prestohq.io/assets/Avatar4.svg";
  const avatar2 = "https://api.prestohq.io/assets/Avatar3.svg";
  const avatar1 = "https://api.prestohq.io/assets/Avatar2.svg";
  const avatar = "https://api.prestohq.io/assets/Avatar1.svg";

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <View style={styles.container}>
        <NavBar title="Select Avatar" />

        <View style={styles.inner_container}>
          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar6)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar6} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar2)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar2} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar3)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar3} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar4)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar4} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar5)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar5} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar6)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar6} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar7)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar7} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar8)}
            style={styles.img_container}
          >
            <SvgUri uri={avatar8} />
          </TouchableOpacity>

          {/* ********************************************************* */}
          {/* <TouchableOpacity
            onPress={() => setImage(avatar)}
            style={styles.img_container}
          >
            <SvgUri uri="https://api.prestohq.io/assets/Avatar1.svg" />
          </TouchableOpacity> */}
        </View>
      </View>
      {openImgmgModal && (
        <AvatarModal
          modalVisible={openImgmgModal}
          setModalVisible={setOpenImgModal}
          handleAvatarUpdate={handleAvatarUpdate}
        />
      )}
      {openModal && <ModalComponent navigate="ButtomTab" />}
    </>
  );
};

export default SelectAvatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  inner_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 50,
    alignItems: "center",
  },
  img_container: {
    marginVertical: 20,
  },
});
