import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { externalStyle } from "../../styles/externalStyle";
import { createInquiry } from "../../services/requestinquiries.services";
import { formErrorToast, sessionErrorToast, successToast } from "../Toast";
import SelectModal from "../SelectModal";
import { createIncidentReports } from "../../services/incidentreports.services";
import { connect } from "react-redux";
import colors from "../../config/colors";
import { createNotifications } from "../../services/notifications.services";

const IncidentReport = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(null);
  const [description, setDescription] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const request_data = [
    "Fire",
    "Theft",
    "Missing Person",
    "Riot",
    "Missing Pet",
    "Others (Please specify)",
  ];
  const notficationHandler = async () => {
    const newData = {
      name: props.user.first_name + " " + props.user.last_name,
      type: "incident_report",
      description,
      condition: "Pending",
      receiver: "admin",
      email: props.user.email,
    };
    // console.log(newData);
    await createNotifications(newData, props.auth.accessToken);
  };
  const clearFormn = () => {
    setDescription(null);
    setType(null);
  };
  const submitHandler = async () => {
    if (description && type) {
      setIsLoading(true);
      const newData = {
        type,
        description,
        user: {
          username: props.user.username,
        },
      };
      const res = await createIncidentReports(
        props.auth.accessToken,
        newData,
        props.user.id
      );
      if (res.success) {
        successToast();
        notficationHandler();
        clearFormn();
      } else {
        sessionErrorToast();
      }
      setIsLoading(false);
    } else {
      formErrorToast();
    }
  };
  return (
    <View style={{ backgroundColor: colors.white, height: "100%" }}>
      {dropDown && (
        <SelectModal
          setType={setType}
          setDropDown={setDropDown}
          data={request_data}
        />
      )}
      <View style={styles.containerWrapper}>
        <Text style={styles.semibold17label}>What kind of Incident?</Text>
        <View style={styles.select}>
          <TouchableOpacity
            onPress={() => {
              setDropDown(true);
              Keyboard.dismiss();
            }}
          >
            <Text style={{ width: "100%" }}>
              {type ? type : "Choose option"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.semibold17label}>
          Description (How does it happen?)
        </Text>
        <View style={[styles.composeBody]}>
          <TextInput
            value={description}
            style={[styles.description, styles.allfield]}
            multiline={true}
            autoFocus={!dropDown}
            onChangeText={(e) => setDescription(e)}
          />
        </View>
        {isLoading ? (
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Submitting...</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={submitHandler} activeOpacity={0.7}>
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, {})(IncidentReport);
