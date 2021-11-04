import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
import pics from "../images/shoe.jpg";

const Demo = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#DDDDDD" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      title: "",
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 15 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            width: 135,
            paddingRight: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="search" size={23} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <Entypo name="share" size={23} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.videoContainer}>
        <Image
          source={pics}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </View>

      {/* /////// description section */}
      <View style={styles.description}>
        <View style={styles.sub_desc}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 4,
                width: 4,
                borderRadius: 100,
                backgroundColor: "#2DABFF",
                marginHorizontal: 8,
              }}
            />
            <View
              style={{
                height: 4,
                width: 4,
                borderRadius: 100,
                backgroundColor: "#B6B6B6",
                marginHorizontal: 8,
              }}
            />
            <View
              style={{
                height: 4,
                width: 4,
                borderRadius: 100,
                backgroundColor: "#B6B6B6",
                marginHorizontal: 8,
              }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{ color: "#D95A2B", fontWeight: "bold", fontSize: 17 }}
              >
                Twinkle
              </Text>
              <Text style={{ color: "#AEAEAE", fontSize: 11 }}>
                1 available, more quality available on pre-order
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="star" size={24} color="#F1BC0E" />
                <Text
                  style={{ fontWeight: "700", fontSize: 14, marginLeft: 2 }}
                >
                  5.0
                </Text>
              </View>
              <Text style={{ color: "#2DABFF", fontSize: 11 }}>Reviews</Text>
            </View>
          </View>

          {/* //////incement and decrement price */}
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 3,
                paddingHorizontal: 10,
                backgroundColor: "#F4F4F4",
                width: 100,
                borderRadius: 50,
              }}
            >
              <Text>-</Text>
              <Text>1</Text>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>N 25,000</Text>
          </View>

          {/* ////////////////description */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "black",
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Description
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: "black",
                // opacity: 0.7,
              }}
            >
              Discover your style in our all new twinkle mules featuring a brown
              African pattern, leather soles and our very oen spinel logo
              embrolled to the feet area.
            </Text>
            <Text
              style={{
                textAlign: "right",
                marginTop: 10,
                fontSize: 13,
                color: "#2DABFF",
              }}
            >
              {" "}
              Read more
            </Text>
          </View>

          {/* ///////size */}
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 5 }}>Size</Text>

              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderColor: "#F4F4F4",
                  borderWidth: 1,
                  borderRadius: 50,
                }}
              >
                <Text style={{ fontSize: 13 }}>45.5 UK</Text>
              </View>
            </View>
            <Text style={{ color: "#B6B6B6", fontSize: 13 }}>Size guide</Text>
          </View>
        </View>

        {/* size  */}
        <View style={styles.btn_icon}>
          <View
            style={{
              backgroundColor: "#191B1C",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              {/* <Ionicons name="heart" size={28} color="red" /> */}
              <Text style={{ fontSize: 10, color: "#0485DC" }}>45.5</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 10 }}>40</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 10 }}>39.5</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 10 }}>38</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 10 }}>36</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 2,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 10 }}>32</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* //////add to cart */}
        <View
          style={{
            top: -65,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              elevation: 4,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="heart" size={28} color="#B6B6B6" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#191B1C",
              borderRadius: 100,
              height: 53,
              width: 300,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              elevation: 20,
              // paddingVertical: 20,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#6DC2FB",
                borderRadius: 100,
                height: 35,
                width: 35,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                elevation: 4,
                marginRight: 60,
              }}
            >
              <TouchableOpacity>
                <EvilIcons name="cart" size={23} color="black" />
              </TouchableOpacity>
            </View>

            <Text style={{ color: "white" }}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    // paddingLeft:20
  },
  videoContainer: {
    flex: 0.65,
    width: "100%",
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  description: {
    flex: 1,
    position: "relative",
  },

  sub_desc: {
    backgroundColor: "white",
    paddingHorizontal: 23,
    paddingTop: 20,
    top: -60,
    paddingBottom: 54,
    borderTopRightRadius: 70,
    height: "85%",
  },
  btn_icon: {
    // backgroundColor: "white",
    // position: "absolute",
    // bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "80%",
    paddingHorizontal: 23,
    top: -80,
  },
  // btn: {
  //   backgroundColor: "#f64b29",
  //   borderRadius: 25,
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  // },
});
