import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "../components/Themed";
import { SearchBar } from 'react-native-elements';
import { Colors } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { useTranslation } from "react-i18next";
import { fetchCharacters } from "../api/fetchCharacters";
import { useNavigation } from "@react-navigation/native";
import Pagination from "../components/Pagination";
import ItemCharacter from "../components/ItemCharacter";
import IconChangeLang from "../components/IconChangeLang";


const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const INITIAL_PARAMS = '';

export const Inicio = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [charactersLoading, setCharactersLoading] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);
  const [info, setInfo] = useState({});
  const [query, setQuery] = useState('');
  const { charactersReducer }: any = useSelector((state) => state);


  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();

  const navigation = useNavigation();

  const handlePress = (id: any) => {
    navigation.navigate('Detalle', { data: characters, id: id });
  };

  const fetchToApiCharacters = (params: string) => {
    dispatch(fetchCharacters(params));
  };

  useEffect(() => {
    dispatch(fetchCharacters(INITIAL_PARAMS));
  }, []);

  useEffect(() => {
    setIsRefreshing(false);
    const characters = charactersReducer?.characters;
    if (characters) {
      setCharacters(characters.results);
      setInfo(characters.info);
      setCharactersLoading(false);
    }
  }, [charactersReducer]);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const renderItemSeparator = () => <View style={[styles.separator, { backgroundColor: Colors.app[colorScheme].text }]} />;

  const filterNames = (character: any) => {
    let search = query;
    if (character.name.startsWith(search)) {
      return formatNames(character);
    } else {
      characters.splice(characters.indexOf(character), 1);
      return null;
    }
  }

  const formatNames = (character: any) => {
    let heroName = character.name;
    return heroName;
  }

  const updateQuery = (value: string) => {
    setCharacters(characters.slice());
    setQuery(value);
  };

  const keyExtractor = ({ id }: any) => String(id);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchToApiCharacters(INITIAL_PARAMS);
  };

  const handlePagination = (direction: string) => {
    fetchToApiCharacters(direction);
  };

  return (
    charactersLoading ?
      <View style={styles.container}>
        <ActivityIndicator
          size='large'
          color={Colors.app[colorScheme].iconColor}
          animating
        />
      </View>

      :

      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Rick And Morty
        </Text>
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ marginLeft: 5, marginRight: 5, }}
            onPress={() => changeLang('es')}
          >
            <IconChangeLang
              country={'es'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 5, marginRight: 5, }}
            onPress={() => changeLang('en')}
          >
            <IconChangeLang
              country={'en'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 5, marginRight: 5, }}
            onPress={() => changeLang('fr')}
          >
            <IconChangeLang
              country={'fr'}
            />
          </TouchableOpacity>
        </View>


        <SearchBar
          platform="ios"
          onChangeText={updateQuery}
          value={query}
          onCancel={() => fetchToApiCharacters(INITIAL_PARAMS)}
          placeholder={t("TYPE_HERE")}
          style={styles.searchBar}
        />

        <FlatList
          data={characters}
          extraData={query}
          ItemSeparatorComponent={renderItemSeparator}
          keyExtractor={keyExtractor}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
          renderItem={({ item }) => <ItemCharacter key={item.id} navigation={navigation} data={item} filterNames={filterNames} onPress={handlePress} />}
          contentContainerStyle={{ paddingBottom: 20}}
        />

        <Pagination data={info} handlePress={handlePagination} />

      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    borderBottomColor: '#26a69a',
    borderBottomWidth: 1
  },
  activityContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  separator: {
    flexDirection: 'row',
    width: DEVICE_WIDTH * 0.8,
    height: 1,
    margin: 5
  },
  text: {
    margin: 20,
    textAlign: 'justify',
    fontSize: 40,
    fontWeight: '800'
  },
  searchBar: {

  }
});
