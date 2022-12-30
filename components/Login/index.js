import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { externalStyle } from "../../styles/externalStyle";
import colors from "../../config/colors";
import { loginUser } from "../../services/user.services";
import { formErrorToast, loginErrorToast, loginSuccessToast } from "../Toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { setAuth } from "../../redux";
import { Sos } from "../Svg";
const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const Login = (props) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const storedAuth = await AsyncStorage.getItem("auth");
      const jsonStored = JSON.parse(storedAuth);
      if (jsonStored) {
        // console.log(jsonStored);
        NavigateToDetails(props, "home");
      }
      props.setAuth(jsonStored || []);
    } catch (e) {
      console.log("Warning Occur in Login.js: " + e.message);
    }
    setIsAuthLoading(false);
  };
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem("auth", JSON.stringify(data));
      props.setAuth(data || []);
    } catch (e) {
      console.log("Warning set in Login.js: " + e);
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const newData = { email: username, password };
    if (username && password) {
      const res = await loginUser(newData);
      if (res.success) {
        loginSuccessToast();
        // console.log(res.data);
        storeData(res.data);
        NavigateToDetails(props, "home");
      } else {
        loginErrorToast();
      }
    } else {
      formErrorToast();
    }
    // console.log(newData);
    setIsLoading(false);
  };
  return (
    <>
      {isAuthLoading && <View style={styles.modal}></View>}
      <View
        style={[
          styles.containerWrapper,
          {
            justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
            flex: 1,
          },
        ]}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.loginImage}
            source={require("../../assets/images/SigninTo.png")}
          />
        </View>
        <View>
          <Text
            style={{
              marginvertical: 20,
              textAlign: "center",
              fontFamily: "semibold",
              fontSize: 40,
            }}
          >
            Sign In
          </Text>
          <Text style={styles.semibold17label}>Email</Text>
          <TextInput
            value={username}
            onChangeText={(e) => setUsername(e)}
            placeholder="johndoe@gmail.com"
            style={styles.allfield}
          />
          <Text style={styles.semibold17label}>Password</Text>
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            placeholder="Password"
            style={styles.allfield}
          />
          <TouchableOpacity
            onPress={() => NavigateToDetails(props, "request_password")}
          >
            <Text
              style={{
                marginTop: 5,
                padding: 5,
                fontSize: 15,
                textDecorationLine: "underline",
                textDecorationColor: colors.black,

                fontFamily: "semibold",
                textAlign: "right",
              }}
            >
              Forgot your Password?
            </Text>
          </TouchableOpacity>
          {!isLoading ? (
            <TouchableOpacity activeOpacity={0.7} onPress={submitHandler}>
              <View style={styles.submitButton}>
                <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.submitButton}>
              <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                Logging In...
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => NavigateToDetails(props, "register")}
          >
            <Text
              style={{
                fontFamily: "semibold",
                marginBottom: 20,
                padding: 5,
                textAlign: "center",
              }}
            >
              Don't have an account yet? Tap to register
            </Text>
          </TouchableOpacity>
          <StatusBar />
          <View style={styles.sosButtonWrappers}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                NavigateToDetails(props, "sos");
              }}
            >
              <View style={styles.sosButtons}>
                <Sos />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create(externalStyle);

export default connect(null, {
  setAuth,
})(Login);
