import React, {useState} from "react";
import {View, Text, StyleSheet, Platform, ScrollView, FlatList, TouchableOpacity} from "react-native";
import {InputBlock} from "./InputBlock";
import {v1} from "react-native-uuid/dist/v1";




export const NotesScreen = () => {
    const [Data, useData] = useState([
        {key: v1(), title: 'Учу React'},
        {key: v1(), title: 'Пока получается'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
        {key: v1(), title: 'ПОлучается пока не очень'},
    ])


    return (
        <View style = {styles.rootNote}>
            <View style = {styles.header}></View>
            <View>
                <InputBlock placeholder={'Enter your note'} titleButton={'Add note'}/>
            </View>
            <ScrollView style={styles.scrollBlock}>
                {Data.map(el => (
                        <View key = {el.key} style={styles.item}>
                            <Text>{el.title}</Text>
                        </View>
                ))}
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    rootNote: {
        display:"flex",
        flexDirection: "column"
    },
    flatListStyle: {
        paddingTop: 10

    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: Platform.OS === 'android'? 'blue' : 'white'
    },
    item: {
        width: '100%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        paddingTop: 5,
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 2,
        borderStyle: 'solid',
    },
    scrollBlock: {
        marginTop: 20
    }
})