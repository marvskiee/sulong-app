import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import Help from "../../Svg/Help";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { externalStyle } from "../../../styles/externalStyle";
import { Bell } from "../../Svg";
import { useEffect } from "react";
import { getNotification } from "../../../services/notifications.services";
import { useIsFocused } from "@react-navigation/native";
import { useState } from "react";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
export default function HomeHeaderRight(props) {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await getNotification(props.auth?.accessToken);
      if (res.success) {
        const filter = res.data.filter(
          (r) =>
            r.email == props.user?.email &&
            r.status == null &&
            r.receiver == "user"
        );
        setData(filter);
      }
    };
    load();
  }, [isFocused]);
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("products", JSON.stringify([]));
    } catch (e) {
      console.log("Warning get in HomeHeaderRight.js: " + e.message);
    }
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={async () => {
          NavigateToDetails(props, "notifications");
        }}
      >
        <View style={styles.bellButton}>
          <Bell />
          {data.length > 0 && (
            <Text style={styles.bellBadge}>{data.length}</Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => NavigateToDetails(props, "guide")}
        // onPress={storeData}
        activeOpacity={0.7}
        style={styles.headerButton}
      >
        <Text style={styles.headerButtonText}>Guide</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create(externalStyle);
