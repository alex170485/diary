import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";

export const MainScreen = () => {
    return (
        <View>
            <View style={styles.header}></View>
        </View>

    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: Platform.OS === 'android'? 'blue' : 'white'
    }
})