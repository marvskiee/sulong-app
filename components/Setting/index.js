import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { externalStyle } from "../../styles/externalStyle";
import { Bell, Calendar } from "../Svg";

const Setting = () => {
  const [notifications, setNotifications] = useState(false);
  const [events, setEvents] = useState(false);

  return (
    <View style={[styles.container, styles.containerWrapper]}>
      <View style={styles.settingsCardWrapper}>
        <View style={styles.settingsCard}>
          <Bell />
          <Text style={[styles.semibold22, { marginLeft: 10 }]}>
            Notifications
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setNotifications(!notifications)}
        >
          <View
            style={[
              !notifications
                ? styles.toggleLeftWrapper
                : styles.toggleRightWrapper,
            ]}
          >
            <View
              style={[
                !notifications ? styles.toggleCircleOn : styles.toggleCircleOff,
              ]}
            ></View>
            <View
              style={[
                notifications
                  ? styles.toggleBarActive
                  : styles.toggleBarNotActive,
              ]}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.settingsCardWrapper}>
        <View style={styles.settingsCard}>
          <Calendar />
          <Text style={[styles.semibold22, { marginLeft: 10 }]}>Events</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setEvents(!events)}
        >
          <View
            style={[
              !events ? styles.toggleLeftWrapper : styles.toggleRightWrapper,
            ]}
          >
            <View
              style={[!events ? styles.toggleCircleOn : styles.toggleCircleOff]}
            ></View>
            <View
              style={[
                events ? styles.toggleBarActive : styles.toggleBarNotActive,
              ]}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Setting;
