import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
const SelectModal = ({ setType, setDropDown, data }) => {
  return (
    <View style={styles.modal}>
      <View style={styles.modalWrapper}>
        {data.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              setDropDown(false);
              setType(item);
            }}
          >
            <View>
              <Text style={styles.selectItem}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default SelectModal;
