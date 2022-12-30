import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import colors from "../../config/colors";

const Sos = (props) => {
  const images = [
    <Image source={require("../../assets/images/c1.png")} />,
    <Image source={require("../../assets/images/c2.png")} />,
    <Image source={require("../../assets/images/c3.png")} />,
  ];
  return (
    <View style={{ backgroundColor: colors.white }}>
      <FlatList
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        data={images}
        numColumns={1}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

export default Sos;
