import { ToastAndroid } from "react-native";
export const connectionErrorToast = () => {
  ToastAndroid.show(
    "Error Ocurred, Please check your internet connection and try again later!",
    ToastAndroid.SHORT
  );
};
export const formErrorToast = () => {
  ToastAndroid.show("Please fill up the form!", ToastAndroid.SHORT);
};
export const updateSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Profile has been updated!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const successToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Submitted Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const usernameErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Username is already existed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const loginSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Logged In Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const passwordErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Confirm password mismatch!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const registerSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Registered Successfully",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const loginErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Wrong credentials, Please try again!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const sessionErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Session Expired, Please try again!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const emailErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Email is not registered or Invalid format, Please try again!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const codeErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Wrong verification code!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const newPasswordErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Password requirements were not met.: at least 8 characters, a lowercase letter, a uppercase letter and a number. ",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
