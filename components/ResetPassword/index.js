import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
import colors from "../../config/colors";
import { connect } from "react-redux";
import { useState } from "react";
import { checkEmail, updatePassword } from "../../services/sendgrid.services";
import { codeErrorToast, newPasswordErrorToast } from "../Toast";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const ResetPassword = (props) => {
  const [code, setCode] = useState(null);
  const [password, setPassword] = useState("");
  const submitHandler = async () => {
    const res = await checkEmail({ email: props.email });
    if (res.success) {
      console.log(res.data);
      if (res.data.code != code) {
        codeErrorToast();
        return;
      }
      if (
        password.length < 8 ||
        !/[a-z]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password)
      ) {
        let passErr = ["", "", "", ""];
        if (password.length < 8) {
          passErr[0] = "- At least 8 characters.";
        }
        if (!/[a-z]/.test(password)) {
          passErr[1] = "- A lowercase letter.";
        }
        if (!/[A-Z]/.test(password)) {
          passErr[2] = "- A uppercase letter.";
        }
        if (!/[0-9]/.test(password)) {
          passErr[3] = "- A number.";
        }
        newPasswordErrorToast();
        return;
      }
      await updatePassword({ password }, res.data.id);
      NavigateToDetails(props, "login");
    }
    // if()
  };

  // console.log(props.id_temp);
  return (
    <View
      style={[
        styles.containerWrapper,
        {
          justifyContent: "center",
          flex: 1,
        },
        // styles.container,
      ]}
    >
      <View>
        <Text
          style={{
            marginvertical: 20,
            textAlign: "center",
            fontFamily: "semibold",
            fontSize: 30,
          }}
        >
          Reset Password
        </Text>
        <Text style={styles.semibold17label}>Code</Text>
        <TextInput
          onChangeText={(e) => setCode(e)}
          placeholder="XX-XX-XX"
          style={styles.allfield}
        />
        <Text style={styles.semibold17label}>New Password</Text>
        <TextInput
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          style={styles.allfield}
        />

        <TouchableOpacity activeOpacity={0.7} onPress={submitHandler}>
          <View style={[styles.submitButton, { marginBottom: 2 }]}>
            <Text style={[styles.submitText, { paddingVertical: 8 }]}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => NavigateToDetails(props, "login")}>
          <Text
            style={{
              fontFamily: "semibold",
              marginBottom: 20,
              padding: 10,
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Back to Sign In
          </Text>
        </TouchableOpacity>
        <StatusBar />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    id_temp: state.auth.id_temp,
    email: state.auth.email_temp,
  };
};

const styles = StyleSheet.create(externalStyle);

export default connect(mapStateToProps, {})(ResetPassword);
