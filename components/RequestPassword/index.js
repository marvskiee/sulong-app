import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
import { connect } from "react-redux";
import { setTempId, setEmail } from "../../redux";
import {
  checkEmail,
  sendCode,
  updatePassword,
} from "../../services/sendgrid.services";
import { useState } from "react";
import { emailErrorToast } from "../Toast";
import { updateUser } from "../../services/user.services";
const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const RequestPassword = (props) => {
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendCodeHandler = async () => {
    setIsLoading(true);
    if (
      !recoveryEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailErrorToast();
      setIsLoading(false);

      return;
    }
    const { success, data } = await checkEmail({ email: recoveryEmail });
    if (success == true) {
      const random = Math.floor(Math.random() * 99999);
      props.setEmail(data.email);
      await updatePassword({ code: random }, data.id);
      await sendCode({ email: data.email, random });
      props.setTempId(data.id);
      NavigateToDetails(props, "reset_password");
    } else {
      emailErrorToast();
    }
    setIsLoading(false);
    // sendCode(email);
  };
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
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.loginImage}
            source={require("../../assets/images/ForgotPass.jpg")}
          />
        </View>
        <Text
          style={{
            marginvertical: 20,
            textAlign: "center",
            fontFamily: "semibold",
            fontSize: 30,
          }}
        >
          Password Recovery
        </Text>
        <Text style={styles.semibold17label}>Email</Text>
        <TextInput
          onChangeText={(e) => setRecoveryEmail(e)}
          placeholder="johndoe@gmail.com"
          style={styles.allfield}
        />

        {!isLoading ? (
          <TouchableOpacity activeOpacity={0.7} onPress={sendCodeHandler}>
            <View style={[styles.submitButton, { marginBottom: 2 }]}>
              <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                Send Code
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={[styles.submitButton, { marginBottom: 2 }]}>
            <Text style={[styles.submitText, { paddingVertical: 8 }]}>
              Validating...
            </Text>
          </View>
        )}

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
const styles = StyleSheet.create(externalStyle);
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};
export default connect(mapStateToProps, {
  setTempId,
  setEmail,
})(RequestPassword);
