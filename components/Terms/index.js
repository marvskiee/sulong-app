import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";

const Terms = () => {
  return (
    <View style={[]}>
      <ScrollView style={[styles.containerWrapper]}>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={[
              styles.semibold22,
              { marginVertical: 20, textAlign: "center" },
            ]}
          >
            Terms and Conditions
          </Text>
          <Text
            style={{
              fontFamily: "semibold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Introduction
          </Text>
          <Text style={styles.aboutUsText}>
            Welcome to Sulong By using our website and/ or using the services
            that are provided, you acknowledge that you have read, understood,
            and agree to be bound by our Terms and Conditions. These Terms and
            Conditions unconditionally extend and apply to all related
            applications, internet service, or website extensions. If you are
            not in agreement with all of these Terms and Conditions, you are
            prohibited from using this Website, and you may discontinue use
            immediately. Sulong recommends that you save or print a copy of
            these Terms and Conditions for future reference
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={[
              styles.semibold22,
              { marginVertical: 20, textAlign: "center" },
            ]}
          >
            Agreement to the terms and conditions
          </Text>
          <Text
            style={{
              fontFamily: "semibold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sulong Terms and Condition
          </Text>
          <Text style={styles.aboutUsText}>
            (these "Terms" or these "Terms and Conditions") contained in this
            Agreement shall govern your use of this Website and all its content
            (collectively referred to herein as this website). These Terms
            outline the rules and regulations guiding the use of Sulong. All
            materials/ information/documents/services or all other entities
            (collectively referred to as content) that appear on the Sulong
            shall be administered subject to these Terms and Conditions.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Terms;
