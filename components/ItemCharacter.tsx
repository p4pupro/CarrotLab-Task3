import React, { useEffect } from "react";
import { StyleSheet, Platform, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "./Themed";


// Item to display data from request 
const ItemCharacter = (props: any) => {
    const { onPress, filterNames } = props;
    const { id, name, image } = props.data;

    useEffect(() => {
        if(props.data){
            filterNames(props.data);
        }
    }, [props]);


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress(id)}>
                <View style={styles.row}>
                    <Image source={{ uri: image }} style={styles.img} />
                    <Text style={styles.text}>
                        {name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ItemCharacter;

const styles = StyleSheet.create({
    text: {
        textAlign: "justify",
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
        height: 50
    },
    img: {
        height: 35,
        width: 35,
        borderRadius: 50,
        margin: 5
    }
});