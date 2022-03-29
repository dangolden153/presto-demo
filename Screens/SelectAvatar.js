import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import { AvatarModal } from "../components/AvatarModal";
import { updateAvatar } from "../Redux/Actions/user";
import { useDispatch } from "react-redux";
import { Context } from "../context";
import { ModalComponent } from "../components/Modal";
import Loading from "../components/Loading";

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
  const avatar7 =
    "https://prestohq.io/wp-content/uploads/2022/03/Memoji-Boys-11-9.png";
  const avatar6 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed6.png";
  const avatar5 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed5.png";
  const avatar4 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed4.png";
  const avatar3 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed3.png";
  const avatar2 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed2.png";
  const avatar1 = "https://prestohq.io/wp-content/uploads/2022/03/unnamed1.png";
  const avatar = "https://prestohq.io/wp-content/uploads/2022/03/unnamed.png";

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
            onPress={() => setImage(avatar7)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar7 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar)}
            style={styles.img_container}
          >
            <Image
              source={{
                uri: avatar,
                method: "POST",
                headers: {
                  Pragma: "no-cache",
                },
                body: "Your Body goes here",
              }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar1)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar1 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar2)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar2 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar3)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar3 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar4)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar4 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar5)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar5 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar6)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar6 }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>

          {/* ********************************************************* */}
          <TouchableOpacity
            onPress={() => setImage(avatar)}
            style={styles.img_container}
          >
            <Image
              source={{ uri: avatar }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {openImgmgModal && (
        <AvatarModal
          modalVisible={openImgmgModal}
          setModalVisible={setOpenImgModal}
          handleAvatarUpdate={handleAvatarUpdate}
        />
      )}
      {openModal && <ModalComponent />}
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
