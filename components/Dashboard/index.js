import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
import { IncidentReport, RequestInquiry, Reservation } from "../Svg";
import colors from "../../config/colors";
import { useEffect } from "react";
import { getReservation } from "../../services/reservation.services";
import { connect } from "react-redux";
import { getIncidentReports } from "../../services/incidentreports.services";
import { getInquiry } from "../../services/requestinquiries.services";
import { useState } from "react";
import SelectModal from "../SelectModal";
import moment from "moment";
import { getNotification } from "../../services/notifications.services";
import { setSort } from "../../redux";
const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  const choices = ["Reservations", "Incident Reports", "Request & Inquiry"];
  useEffect(() => {
    const load = async () => {
      // console.log(reservationRes);
      switch (props.sort) {
        case choices[0]:
          const reservationRes = await getReservation(props.auth.accessToken);
          setData(counter(reservationRes));
          break;
        case choices[1]:
          const reportRes = await getIncidentReports(props.auth.accessToken);
          setData(counter(reportRes));
          break;
        case choices[2]:
          const requestRes = await getInquiry(props.auth.accessToken);
          setData(counter(requestRes));
          break;
      }
    };
    console.log(props.user?.email);
    load();
  }, [props.sort, props?.user?.email]);
  const counter = (res) => {
    const sortedAsc = res.sort(
      (objA, objB) =>
        Number(new Date(objB.createdAt)) - Number(new Date(objA.createdAt))
    );
    const d = sortedAsc?.filter((c) => c.user.email == props.user?.email);

    // console.log(d.length);
    return d;
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        // height: "100%",
        flex: 1,
        padding: 10,
      }}
    >
      {dropDown && (
        <SelectModal
          setType={props.setSort}
          setDropDown={setDropDown}
          data={choices}
        />
      )}
      <FlatList
        contentContainerStyle={{
          // position: "relative",
          // flex: 1,
          backgroundColor: "#fff",
          // paddingHorizontal: 10,
        }}
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        data={data || []}
        numColumns={1}
        ListHeaderComponent={() => {
          return (
            <View style={styles.select}>
              <TouchableOpacity
                onPress={() => {
                  setDropDown(true);
                  Keyboard.dismiss();
                }}
              >
                <Text style={{ width: "100%" }}>{props.sort}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({ item }) => (
          <View style={[styles.dashboardCard]}>
            <Text style={styles.semibold17}>
              Type: {item?.type || item.event_type}
            </Text>
            {item.facility && <Text>Facility: {item?.facility}</Text>}
            <Text>Description: {item?.description.trim()}</Text>
            <Text>Email: {item?.user.email}</Text>
            <Text>{moment(item?.createdAt).format("MMM DD, YYYY")}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Status: </Text>
              <Text
                style={{
                  backgroundColor:
                    item?.status != "Completed"
                      ? colors.lightred
                      : colors.violet,
                  color: colors.white,
                  paddingHorizontal: 8,
                  fontSize: 10,
                  padding: 5,
                  borderRadius: 10,
                  // margin:
                }}
              >
                {item?.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    user: state.auth.user,
    sort: state.auth.sort,
  };
};
export default connect(mapStateToProps, { setSort })(Dashboard);
