import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {InputBlock} from "./InputBlock";

export const WeatherScreen = () => {
    return (
        <View style={styles.rootWeather}>
            <View style={styles.header}></View>
            <View >
                <InputBlock placeholder={'Enter city'} title={'Search City'}/>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    rootWeather: {
        display:"flex",
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: Platform.OS === 'android'? 'blue' : 'white'
    }

})