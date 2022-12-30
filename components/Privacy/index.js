import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";

const Privacy = () => {
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
            Privacy and Policy
          </Text>
          <Text style={styles.aboutUsText}>
            This Privacy Policy explains the information collection, use, and
            sharing practices of Sulong Unless otherwise stated, this Policy
            describes and governs the information collection, use, and sharing
            practices of Sulong with respect to your use of our website and the
            services (Services) we provide and/or host on our servers Before you
            use or submit any information through or in connection with the
            Services, please carefully review this Privacy Policy. By using any
            part of the Services, you understand that your information will be
            collected, used, and disclosed as outlined in this Privacy Policy If
            you do not agree to this privacy policy, please do not use our
            Services
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={[
              styles.semibold22,
              { marginVertical: 20, textAlign: "center" },
            ]}
          >
            Our Principle
          </Text>
          <Text style={styles.aboutUsText}>
            Sulong has designed this policy to be consistent with the following
            principles: Privacy policies should be human readable and easy to
            find - Data collection, storage, and processing should be simplified
            as much as possible to enhance
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Privacy;
