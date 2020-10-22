import React from "react";
import { StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, SafeAreaView } from "./Themed";


// Item to display data from request 
const ItemEpisode = (props: any) => {
    const { onPress } = props;
    const episode = props.data;
    const episodeId = episode.split('/').pop();
   
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => onPress(episodeId)}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {episode}
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ItemEpisode;

const styles = StyleSheet.create({
    text: {
        textAlign: "justify",
        color: 'black',
        fontSize: Platform.OS === "ios" ? 16 : 14,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 25,
        backgroundColor: 'lightblue',
    },
});