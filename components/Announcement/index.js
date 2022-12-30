import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAnnouncement } from "../../services/announcement.services";
import { externalStyle } from "../../styles/externalStyle";
import { sessionErrorToast } from "../Toast";
import { connect } from "react-redux";
const Announcement = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const load = async () => {
      // console.log(props.auth);
      const res = await getAnnouncement(props.auth?.accessToken);
      setTimeout(() => {
        if (res.success) {
          // console.log(res.data);
          setData(res.data);
          console.log(res.data);
        } else {
          sessionErrorToast();
        }
        setIsLoading(false);
      }, 1000);
      // console.log("25", res);
    };
    load();
  }, [props.auth]);

  return (
    <View>
      {isLoading && (
        <View style={styles.loadingWrapper}>
          <Text style={styles.loading}>Fetching Please Wait...</Text>
        </View>
      )}
      {data && (
        <FlatList
          style={styles.containerWrapper}
          keyboardShouldPersistTaps={"handled"}
          nestedScrollEnabled={true}
          data={data}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.announcementCard}>
              <Image
                source={{ uri: item?.cover_url }}
                style={styles.announcementImage}
              />
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <Text style={styles.announcementDescription}>
                {item.description}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};
export default connect(mapStateToProps, {})(Announcement);
