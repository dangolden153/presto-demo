import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CardImage = ({ image, receipt, photoData, setReceipt, setImage }) => {
  const [isImageDeleted, setIsImageDeleted] = useState(false);
  const removeImage = (image) => {
    console.log("remove image :>> ", photoData.indexOf(image));
    let index = photoData.indexOf(image);
    if (index > -1) {
      photoData.splice(index, 1);
      setIsImageDeleted(!isImageDeleted);
      return;
    }
  };

  useEffect(() => {
    // console.log("photoData :>>> ", photoData);
  }, [isImageDeleted]);

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {image !== "" ? (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => setImage("")}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        ) : null}

        {receipt !== "" ? (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => setReceipt("")}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: receipt }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        ) : null}

        {photoData[0] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[0])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[0] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}

        {photoData[1] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[1])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[1] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}

        {photoData[2] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[2])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[2] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[3] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[3])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[3] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[4] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[4])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[4] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[5] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[5])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[5] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[6] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[6])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[6] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[7] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[7])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[7] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
        {photoData[8] && (
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => removeImage(photoData[8])}
            >
              <Ionicons name="close" color="white" size={25} />
            </TouchableOpacity>
            <Image
              source={{ uri: photoData[8] }}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  icon_container: {
    position: "absolute",
    top: -2,
    right: -2,
    zIndex: 100,
    backgroundColor: "#666666",
    width: 28,
    height: 28,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
