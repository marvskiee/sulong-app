import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getNotification,
  readNotification,
} from "../../services/notifications.services";
import { externalStyle } from "../../styles/externalStyle";
import moment from "moment";
import colors from "../../config/colors";
import { setSort } from "../../redux";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};

const Notifications = (props) => {
  const choices = ["Reservations", "Incident Reports", "Request & Inquiry"];
  const typeHandler = (type) => {
    switch (type) {
      case "reservation":
        return choices[0];
      case "incident_report":
        return choices[1];
      case "request_inquiries":
        return choices[2];
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await getNotification(props.auth.accessToken);
      await readNotification(props.auth.accessToken, {
        email: props.user.email,
      });
      if (res.success) {
        console.log(res.data);
        const filter = res.data.filter(
          (r) => r.email == props.user?.email && r.receiver == "user"
        );
        setData(filter);
      }
    };
    load();
  }, []);
  return (
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
          <View>
            {data.length == 0 && (
              <Text
                style={[
                  styles.regular13,
                  { textAlign: "center", paddingVertical: 20 },
                ]}
              >
                You do not have notifications
              </Text>
            )}
          </View>
        );
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            props.setSort(typeHandler(item.type));
            NavigateToDetails(props, "dashboard");
          }}
        >
          <View
            style={[
              styles.dashboardCard,
              item.status == null && {
                borderColor: colors.darkgray,
                colors: "white",
              },
            ]}
          >
            <Text style={styles.semibold17}>{typeHandler(item.type)}</Text>
            <Text>{item.description}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Status: </Text>
              <Text
                style={{
                  backgroundColor:
                    item?.condition != "Completed"
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
                {item?.condition}
              </Text>
            </View>
            <Text>{moment(item.createdAt).format("MMM DD, YYYY hh:mm A")}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    user: state.auth.user,
  };
};
const styles = StyleSheet.create(externalStyle);
export default connect(mapStateToProps, { setSort })(Notifications);
