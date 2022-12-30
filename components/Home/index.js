import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../../config/colors";
import { externalStyle } from "../../styles/externalStyle";
import Greeting from "./components/Greeting";
import {
  AboutUs,
  Announcement,
  Dashboard,
  IncidentReport,
  Logout,
  RequestInquiry,
  Reservation,
  Settings,
  Sos,
  BellWhite,
  Bell,
} from "../Svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getNotification,
  readNotification,
} from "../../services/notifications.services";
import { connect } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useIsFocused } from "@react-navigation/native";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const Home = (props) => {
  const items = [
    {
      label: "Dashboard",
      // color: colors.violet,
      page: "dashboard",
      icon: <Dashboard />,
    },
    {
      label: "Announcement",
      // color: colors.violet,
      page: "announcement",
      icon: <Announcement />,
    },
    {
      label: "Request & Inquiry",
      // color: colors.green,
      page: "request_inquiries",
      icon: <RequestInquiry />,
    },
    {
      label: "Reservation",
      // color: colors.green,
      page: "reservation",
      icon: <Reservation />,
    },
    {
      label: "Incident Report",
      // color: colors.green,
      page: "incident_report",
      icon: <IncidentReport />,
    },
    {
      label: "About Us",
      // color: colors.green,
      page: "about_us",
      icon: <AboutUs />,
    },
    {
      label: "Settings",
      // color: colors.green,
      page: "setting",
      icon: <Settings />,
    },
    {
      label: "Logout",
      // color: colors.green,
      page: "logout",
      icon: <Logout />,
    },
  ];
  const logoutHandler = async () => {
    try {
      await AsyncStorage.setItem("auth", "");
      props.setAuth(null || []);
    } catch (e) {
      console.log("Warning set in Home.js: " + e);
    }
    NavigateToDetails(props, "login");
  };
  return (
    <>
      <View style={styles.homeCardLayout}>
        <Greeting {...props} />
        <FlatList
          keyboardShouldPersistTaps={"handled"}
          nestedScrollEnabled={true}
          data={items}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (item.page != "logout") {
                  NavigateToDetails(props, item.page);
                } else {
                  logoutHandler();
                }
              }}
            >
              <View
                style={[styles.homeCard, { backgroundColor: colors.darkgray }]}
              >
                {item.icon}
                <Text style={styles.homeTitle}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle="dark-content"
          hidden={false}
        />
        <View style={styles.sosButtonWrapper}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              NavigateToDetails(props, "sos");
            }}
          >
            <View style={styles.sosButton}>
              <Sos />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create(externalStyle);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, {})(Home);
