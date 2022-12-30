import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import Help from "../../Svg/Help";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { externalStyle } from "../../../styles/externalStyle";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
export default function HomeHeaderRight(props) {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("products", JSON.stringify([]));
    } catch (e) {
      console.log("Warning get in HomeHeaderRight.js: " + e.message);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => NavigateToDetails(props, "guide")}
      // onPress={storeData}
      activeOpacity={0.7}
      style={styles.headerButton}
    >
      <Text style={styles.headerButtonText}>Guide</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create(externalStyle);
