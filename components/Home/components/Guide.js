import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { externalStyle } from "../../../styles/externalStyle";
import Close from "../../Svg/Close";
import Search from "../../Svg/Search";

const Guide = (props) => {
  const [search, setSearch] = useState("");

  const data = [
    {
      title: "Announcement",
      body: "In announcement, you can view all the latest news and Information on whats happening in your barangay with or without specific dates",
    },
    {
      title: "Request And Inquiry",
      body: "In Request and Inquiry, you can submit your Request or Inquiries by filling up the required informations and sending it to the barangay",
    },
    {
      title: "Incident Report",
      body: "In Incident report, you can submit Information about the Hazards, Problems, Incidents and Issues within the vicinity/ Area of the Barangay so that one of the Barangay employees can respond to your Calls",
    },
    {
      title: "Reservation",
      body: "In Reservation, You can submit your Reservation Request for a certain facilities. You just have to put the Time period, Title, and the purpose within the description",
    },
    {
      title: "Dashboard",
      body: "In Dashboard, period, Here you can view all of the Updates regarding your submitted Information/Data",
    },
    {
      title: "SOS",
      body: "In SOS, period, Inside the SOS, you can view all of the Contact Details of all the emergency Hotline Numbers and Contact Numbers so you can directly contact the emergency in case of trouble within the barangay",
    },
  ];
  const searchFilter = data.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.body.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={[styles.container, { paddingHorizontal: 0 }]}>
      <View style={{ marginHorizontal: 20, paddingBottom: 20, marginTop: 20 }}>
        <TextInput
          style={[styles.inputField, { paddingHorizontal: 40 }]}
          onChangeText={(e) => setSearch(e)}
          value={search}
          placeholder="Search product name or barcode"
        />
        {search.length > 0 && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchIcons}
            onPress={() => setSearch("")}
          >
            <Close />
          </TouchableOpacity>
        )}
        <View style={[styles.searchIcons, { left: 0 }]}>
          <Search />
        </View>
      </View>
      <FlatList
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        data={searchFilter}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
            <Text style={styles.semibold23}>{item.title}</Text>
            <Text style={[styles.regular13]}>{item.body}</Text>
          </View>
        )}
        // ListFooterComponent={() => <Text style={{ paddingBottom: 5 }}></Text>}
      />
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create(externalStyle);
