import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { externalStyle } from "../../styles/externalStyle";
import { createUser } from "../../services/user.services";
import {
  formErrorToast,
  passwordErrorToast,
  registerSuccessToast,
  sessionErrorToast,
  usernameErrorToast,
} from "../Toast";
import { isLoading } from "expo-font";
import colors from "../../config/colors";
import { Logo, NotVisible, Visible } from "../Svg";
const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const Register = (props) => {
  // password toggle
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [repeatToggle, setRepeatToggle] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
  });
  const verifyHandler = () => {
    let tmp_errors = {};
    if (firstName.length < 2 || !/^[A-Za-z ]+$/.test(firstName)) {
      tmp_errors = {
        ...tmp_errors,
        firstName: "Firstname must be greater than 1 and letters only.",
      };
    }
    if (lastName.length < 2 || !/^[A-Za-z ]+$/.test(lastName)) {
      tmp_errors = {
        ...tmp_errors,
        lastName: "Lastname must be greater than 1 and letters only.",
      };
    }
    if (contact.length != 10) {
      tmp_errors = {
        ...tmp_errors,
        contact: "Contact must be equal to 10 digits.",
      };
    }
    if (username.length < 3) {
      tmp_errors = {
        ...tmp_errors,
        username: "Username must be greater than 4 characters.",
      };
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      tmp_errors = { ...tmp_errors, email: "Email is not in valid format." };
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
      tmp_errors = {
        ...tmp_errors,
        password: `Password requirements were not met. ${
          passErr[0] && `\n ${passErr[0]}`
        }${passErr[1] && `\n ${passErr[1]}`}${
          passErr[2] && `\n ${passErr[2]}`
        }${passErr[3] && `\n ${passErr[3]}`}`,
      };
    }
    if (password != repeat) {
      tmp_errors = {
        ...tmp_errors,
        repeatPassword: "Repeat password mismatch.",
      };
    }
    setErrors(tmp_errors);
    if (Object.keys(tmp_errors).length) {
      console.log("may error");
      setIsLoading(false);
      return;
    }
  };
  const submitHandler = async () => {
    setIsLoading(true);
    verifyHandler();
    const newData = {
      username,
      password,
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: contact,
    };
    if (
      firstName &&
      lastName &&
      contact &&
      username &&
      password &&
      email &&
      repeat
    ) {
      const res = await createUser(newData);
      if (res.success) {
        registerSuccessToast();
        NavigateToDetails(props, "login");
      } else {
        usernameErrorToast();
      }
      console.log(newData);
    } else {
      formErrorToast();
    }

    setIsLoading(false);
  };
  let field = [
    {
      label: "First Name",
      placeholder: "John",
      handler: (e) => setFirstName(e),
      value: firstName,
      error: errors?.firstName,
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      handler: (e) => setLastName(e),
      value: lastName,
      error: errors?.lastName,
    },
    {
      label: "Contact Number",
      placeholder: "9XXXXXXXXX",
      handler: (e) => setContact(e),
      value: contact,
      error: errors?.contact,
    },
    {
      label: "Username",
      placeholder: "johndoe",
      handler: (e) => setUsername(e),
      value: username,
      error: errors?.username,
    },
    {
      label: "Email",
      placeholder: "johndoe@gmail.com",
      handler: (e) => setEmail(e),
      value: email,
      error: errors?.email,
    },
    {
      label: "Password",
      placeholder: "Password",
      handler: (e) => setPassword(e),
      value: password,
      error: errors?.password,
      toggle: passwordToggle,
      setToggle: () => setPasswordToggle(!passwordToggle),
    },
    {
      label: "Repeat Password",
      placeholder: "Repeat Password",
      handler: (e) => setRepeat(e),
      value: repeat,
      error: errors?.repeatPassword,
      toggle: repeatToggle,
      setToggle: () => setRepeatToggle(!repeatToggle),
    },
  ];
  return (
    <View
      style={[
        {
          justifyContent: "center",
        },
      ]}
    >
      <View>
        <FlatList
          style={styles.containerWrapper}
          keyboardShouldPersistTaps={"handled"}
          nestedScrollEnabled={true}
          data={field}
          extraData={isLoading}
          numColumns={1}
          renderItem={({ item }) => (
            <>
              <Text style={styles.semibold17label}>{item.label}</Text>
              {item.error && (
                <Text
                  style={[
                    { color: colors.lightred, marginTop: 0 },
                    styles.semibold17label,
                  ]}
                >
                  {item.error}
                </Text>
              )}
              <View style={{ position: "relative" }}>
                <TextInput
                  secureTextEntry={
                    ["Repeat Password", "Password"].includes(item.label) &&
                    !item.toggle
                  }
                  onChangeText={item.handler}
                  value={item.value}
                  placeholder={item.placeholder}
                  style={[
                    styles.allfield,
                    {
                      borderColor: [item.error ? colors.red : colors.black],
                      paddingRight: ["Repeat Password", "Password"].includes(
                        item.label
                      )
                        ? 50
                        : 20,
                    },
                  ]}
                />
                {["Repeat Password", "Password"].includes(item.label) && (
                  <TouchableOpacity
                    onPress={item.setToggle}
                    style={{ position: "absolute", right: 20, top: 18 }}
                  >
                    <View>{item.toggle ? <Visible /> : <NotVisible />}</View>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
          ListHeaderComponent={
            <Text
              style={{
                textAlign: "center",
                fontFamily: "semibold",
                fontSize: 40,
                marginVertical: 20,
              }}
            >
              Sign Up
            </Text>
          }
          ListFooterComponent={
            <>
              {!isLoading ? (
                <TouchableOpacity activeOpacity={0.7} onPress={submitHandler}>
                  <View style={styles.submitButton}>
                    <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.submitButton}>
                  <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                    Registering...
                  </Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => NavigateToDetails(props, "login")}
              >
                <Text
                  style={{
                    fontFamily: "semibold",
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  Already have an account? Tap to Login
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginVertical: 30,
                  justifyContent: "center",
                }}
              >
                <Text style={[]}>
                  By registering, you confirm that you accept our
                </Text>
                <TouchableOpacity
                  onPress={() => NavigateToDetails(props, "terms")}
                >
                  <Text style={{ fontFamily: "semibold" }}>terms of use</Text>
                </TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity
                  onPress={() => NavigateToDetails(props, "privacy")}
                >
                  <Text style={{ fontFamily: "semibold" }}>
                    privacy and policy
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />

        <StatusBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Register;
