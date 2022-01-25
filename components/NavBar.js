import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { MaterialIcons } from "@expo/vector-icons";
  import AppLoading from "expo-app-loading";
  import { useFonts } from "expo-font";
const NavBar = ({navigation, title}) => {

  const [fontLoaded, error] = useFonts({
    regular: require("../assets/fonts/raleway/Raleway-Regular.ttf"),
    semibold: require("../assets/fonts/raleway/Raleway-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
    return (
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{position: "absolute", left: 10 }}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>{title}</Text>
      </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 20,
        position: "relative",
        // paddingHorizontal:20
      },
    
      header: {
        color: "black",
        fontSize: 23,
        letterSpacing: 1,
        fontWeight: "200",
        fontFamily: "regular"
        // textAlign: "center",
        // alignItems: "center",
      },
})
