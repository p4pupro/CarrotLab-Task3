import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, FontAwesome5 } from "../components/Themed";
import { Colors } from "../constants/Colors";
import Layout from "../constants/Layout";
import useColorScheme from "../hooks/useColorScheme";


// Pagination display 
const Pagination = (props: any) => {

    const colorScheme = useColorScheme();
    const { data, handlePress } = props;
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');

    useEffect(() => {
        if (props.data) {
            const { next, prev } = data;
            setPrev(prev);
            setNext(next);
        }
    }, [props]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.prev}>
                    {
                        prev ?

                            <TouchableOpacity style={styles.btn} onPress={() => handlePress(prev)}>
                                <FontAwesome5
                                    name={'arrow-left'}
                                    size={Layout.isLargeDevice ? 30 : Layout.isMediumDevice ? 20 : 15}
                                    color={Colors.app[colorScheme].iconColor}
                                />
                            </TouchableOpacity>
                            :
                            <View></View>
                    }
                </View>

                <View style={styles.next}>
                    {
                        next ?

                            <TouchableOpacity style={styles.btn} onPress={() => handlePress(next)}>
                                <FontAwesome5
                                    name={'arrow-right'}
                                    size={Layout.isLargeDevice ? 30 : Layout.isMediumDevice ? 20 : 15}
                                    color={Colors.app[colorScheme].iconColor}
                                />
                            </TouchableOpacity>
                            :
                            <View></View>
                    }
                </View>
            </View>
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
    },
    btn: {
        backgroundColor: 'lightgreen',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    prev: {
        flexDirection: 'column',
        width: '50%',
        height: 40,
        marginRight: 40,
        alignItems: 'center'
    },
    next: {
        flexDirection: 'column',
        width: '50%',
        marginLeft: 40,
        height: 40,
        alignItems: 'center'
    }
});