// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { externalStyle } from "./styles/externalStyle";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// COMPONENTS PAGE
import {
  Announcement,
  Emergency,
  IncidentReport,
  Login,
  Profile,
  Home,
  AboutUs,
  Register,
  RequestInquiries,
  RequestPassword,
  Reservation,
  ResetPassword,
  HomeHeaderLeft,
  Dashboard,
  HomeHeaderRight,
  Guide,
  Setting,
  Privacy,
  Terms,
  Sos,
} from "./components";
import Notifications from "./components/Notifications";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="home"
            component={Home}
            options={(props) => ({
              title: "",
              // headerShadowVisible: false,
              headerStyle: styles.semibold17,
              headerLeft: () => <HomeHeaderLeft {...props} />,
              headerRight: () => <HomeHeaderRight {...props} />,
            })}
          />
          <Stack.Screen
            name="guide"
            component={Guide}
            options={() => ({
              title: "",
              headerTitle: () => <Text style={styles.semibold17}>Guide</Text>,
            })}
          />
          <Stack.Screen
            name="dashboard"
            component={Dashboard}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Dashboard</Text>
              ),
            })}
          />
          <Stack.Screen
            name="sos"
            component={Sos}
            options={(props) => ({
              title: "",
              headerTitle: () => <Text style={styles.semibold17}>SOS</Text>,
            })}
          />
          <Stack.Screen
            name="about_us"
            component={AboutUs}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>About Us</Text>
              ),
            })}
          />
          <Stack.Screen
            name="announcement"
            component={Announcement}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Announcement</Text>
              ),
            })}
          />
          <Stack.Screen
            name="emergency"
            component={Emergency}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Emergency</Text>
              ),
            })}
          />
          <Stack.Screen
            name="incident_report"
            component={IncidentReport}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Incident Report</Text>
              ),
            })}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={() => ({
              title: "",
              header: () => {},
              // headerTitle: () => <Text style={styles.semibold17}>Login</Text>,
            })}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={() => ({
              title: "",
              headerTitle: () => <Text style={styles.semibold17}>Profile</Text>,
            })}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={() => ({
              title: "",
              header: () => {},
            })}
          />
          <Stack.Screen
            name="setting"
            component={Setting}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Settings</Text>
              ),
            })}
          />
          <Stack.Screen
            name="request_inquiries"
            component={RequestInquiries}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Request Inquiries</Text>
              ),
            })}
          />
          <Stack.Screen
            name="request_password"
            component={RequestPassword}
            options={() => ({
              title: "",
              header: () => {},
            })}
          />
          <Stack.Screen
            name="reservation"
            component={Reservation}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Reservation</Text>
              ),
            })}
          />
          <Stack.Screen
            name="reset_password"
            component={ResetPassword}
            options={() => ({
              title: "",
              header: () => {},
            })}
          />
          <Stack.Screen
            name="privacy"
            component={Privacy}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Privacy and Policy</Text>
              ),
            })}
          />
          <Stack.Screen
            name="terms"
            component={Terms}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Terms and Conditions</Text>
              ),
            })}
          />
          <Stack.Screen
            name="notifications"
            component={Notifications}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Notifications</Text>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create(externalStyle);
