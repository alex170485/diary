import React from "react";
import {View,Text,StyleSheet, TextInput, Button} from "react-native";
import {GetWeatherCityTC} from "../Reducers/WeaterReducer";
import {useDispatch} from "react-redux";


type InputBlockPropsType = {
    placeholder: string,
    titleButton: string,
    title: string,
    setTitle: (text: string)=>void
}


export const InputBlock = (props: InputBlockPropsType) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.inputBlock}>
            <TextInput placeholder={props.placeholder} style={styles.input} value={props.title} onChangeText={(text) => {props.setTitle(text)}}/>
            <Button title={props.titleButton} onPress={() => dispatch(GetWeatherCityTC(props.title))} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBlock: {
        display:"flex",
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop: 10,
    },
    input: {
        width: "55%",
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        marginLeft: 10

    }
})