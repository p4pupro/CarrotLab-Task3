import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors } from "../constants/Colors";
import Layout from "../constants/Layout";
import {
  View,
  Text,
  SafeAreaView,
  FontAwesome5,
} from "../components/Themed";
import { useTranslation } from "react-i18next";
import useColorScheme from "../hooks/useColorScheme";
import { fetchEpisode } from "../api/fetchEpisode";
import { useDispatch, useSelector } from "react-redux";



export const Episodio = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { data: id } = props.route?.params;
  const { episodeReducer }: any = useSelector((state) => state);
  const [episode, setEpisode] = useState({});
  const colorScheme = useColorScheme();

  useEffect(() => {
    dispatch(fetchEpisode(id));
  }, []);

  useEffect(() => {
    if (episodeReducer?.episode) {
      setEpisode(episodeReducer.episode);
    }
  }, [episodeReducer]);

  const { name, air_date, episode: episo, url, created }: any = episode;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.text}>
            {air_date}
          </Text>
          <Text style={styles.text}>
            {episo}
          </Text>
          <Text style={styles.text}>
            {url}
          </Text>
          <Text style={styles.text}>
            {created}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <FontAwesome5
          name={'arrow-left'}
          size={Layout.isLargeDevice ? 35 : Layout.isMediumDevice ? 30 : 25}
          color={Colors.app[colorScheme].iconColor}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Episodio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  col: {
    flexDirection: 'column',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: "justify",
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  btnBack: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
