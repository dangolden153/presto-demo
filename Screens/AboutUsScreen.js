import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RegularText } from "../components/Text";
import NavBar from "../components/NavBar";
import { RFValue } from "react-native-responsive-fontsize";
import TypeWriter from "react-native-typewriter";
import { colors } from "../components/Colors";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar title="About Us" />
      <ScrollView contentContainerStyle={styles.body}>
        <RegularText>
          Presto is the real deal when it comes to a secured, fast paying and
          hitch-free platform for your day to day exchange of Digital assets and
          gift cards to cash
        </RegularText>
        <View style={styles.margin} />

        <RegularText>
          Your reliable and one-stop Platform for converting all your gift
          cards, digital assets such as Bitcoin, USDT and other digital assets
          to NAIRA. With our state of the Art trading and cash out system, we
          ensure a seamless transaction for all our clients alongside our 24
          hours customer service.
        </RegularText>
        <View style={styles.margin} />

        <RegularText>
          With over 6 years of existence, we have traded millions of naira,
          hitch-free and at amazing rates with thousands of happy clients who
          are always eager to come back for more as we are not just reliable but
          we operate on a transparent exchange platform in Nigeria.
        </RegularText>
        <View style={styles.margin} />

        <TypeWriter minDelay={200} typing={1}>
          <Text style={styles.paragraph}>
            With our zeal to do more and provide more utilities, it is without a
            doubt that we can boldly say that "with PRESTO, you have got the
            best exchange platform for all your gift cards, Bitcoin and digital
            assets transaction, just at your fingertip.
          </Text>
        </TypeWriter>
      </ScrollView>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    // position:"relative"
  },

  body: {
    backgroundColor: "#f4fafe",
    marginTop: 20,
    borderRadius: 20,
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  margin: {
    marginVertical: RFValue(10, 580),
  },

  paragraph: {
    margin: 24,
    fontSize: RFValue(10, 580),
    color: colors.darkTextColor,
    // textAlign: "center",
  },
});
