import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {InputBlock} from "./InputBlock";

export const NewsScreen = () => {
    return (
        <View>
            <View style={styles.header}></View>
            <View>
                <InputBlock placeholder={'Enter Article'} title={'Search Article'}/>
            </View>
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