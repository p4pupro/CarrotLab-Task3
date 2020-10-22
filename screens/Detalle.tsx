import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import { Text, View, SafeAreaView, FontAwesome5 } from '../components/Themed';
import { Colors } from '../constants/Colors';
import Layout from "../constants/Layout";
import useColorScheme from '../hooks/useColorScheme';
import ItemEpisode from '../components/ItemEpisode';
import { useTranslation } from 'react-i18next';


export const Detalle = (props: any) => {
  const { navigation, route } = props;
  const charts = route.params?.data;
  const [character, setCharacter] = useState({});
  const id = route.params?.id;
  const { name, status, species, gender, image, episode }: any = character;
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();

  const findCharacter = (id: any) => {
    const chart = charts.find((chart: { id: any; }) => chart.id === id);
    setCharacter(chart);
  };

  useEffect(() => {
    findCharacter(id);
  }, [id]);

  const renderItemSeparator = () => <View style={styles.separator} />

  const handlePress = (id: any) => {
    navigation.navigate('Episodio', { data: id });
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.row}>
        <View style={styles.col}>
          <Image source={{ uri: image }} style={styles.img} />
          <Text style={styles.text}>
            {t("NAME")}: {name}
          </Text>
          <Text style={styles.text}>
            {t("STATUS")}: {status}
          </Text>
          <Text style={styles.text}>
            {t("TYPE")}: {species}
          </Text>
          <Text style={styles.text}>
            {t("GENDER")}: {gender}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>{t("EPISODES")}</Text>
      <FlatList
        data={episode}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={renderItemSeparator}
        renderItem={({ item, index }) => <ItemEpisode key={index} navigation={navigation} data={item} onPress={handlePress} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <FontAwesome5
          name={'arrow-left'}
          size={Layout.isLargeDevice ? 35 : Layout.isMediumDevice ? 30 : 25}
          color={Colors.app[colorScheme].iconColor}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    marginTop: 40,
    textDecorationLine: 'underline',
    textAlign: "center",
  },
  text: {
    textAlign: "justify",
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%'
  },
  col: {
    flexDirection: 'column',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 10
  },
  btnBack: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  }
});
