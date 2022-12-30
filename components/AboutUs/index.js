import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";

const AboutUs = () => {
  return (
    <View>
      <ScrollView style={[styles.containerWrapper]}>
        <Image
          source={require("../../assets/images/Better.jpg")}
          style={styles.aboutUsImage}
        />
        <Text style={[styles.aboutUsText, { marginBottom: 30 }]}>
          Sulong is a tagalog word that means to advance and progress, And that
          is what our app aims to do (To ADVANCE) the clients srvices that the
          local barangay can provide by giving them an online environment to
          cater to the client's everyday needs and requirements. (TO PROGRESS)
          by giving the community an App that they can trust we can ensure the
          progress that the community can develop over time by providing them
          with correct information based on there every dat and situational
          needs.
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default AboutUs;
