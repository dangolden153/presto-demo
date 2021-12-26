import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { MaterialIcons } from "@expo/vector-icons";

const NavBar = ({navigation, onPress,navigate, title}) => {
    return (
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{position: "absolute", left:0}}>
          <MaterialIcons
            name="arrow-back-ios"
            // style={{ marginLeft: 15 }}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.header}>{title || "Presto"}</Text>
      </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // width: "108%",
        marginTop: 20,
        marginLeft: 10,
        // marginBottom: 10,
        position: "relative",
        // paddingHorizontal:20
      },
    
      header: {
        color: "black",
        fontSize: 23,
        letterSpacing: 1,
        fontWeight: "200",
        // textAlign: "center",
        // alignItems: "center",
      },
})
