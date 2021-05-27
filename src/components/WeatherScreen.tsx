import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {InputBlock} from "./InputBlock";
import {useDispatch, useSelector} from "react-redux";
import {GetWeatherCityTC, weatherType} from "../Reducers/WeaterReducer";
import {StoreReduxType} from "../store/store";
import AppLoading from "expo-app-loading";

export const WeatherScreen = () => {
    const [title, setTitle] = useState('')
    const weather = useSelector<StoreReduxType>(state => state.weather.weather)
    const temp = useSelector<StoreReduxType>(state => state.weather.main.temp)
    const maxTemp = useSelector<StoreReduxType>(state => state.weather.main.temp_max)
    const minTemp = useSelector<StoreReduxType>(state => state.weather.main.temp_min)
    const name= useSelector<StoreReduxType>(state => state.weather.name)
    const [loading, setLoading] = useState(true)


    return (
        <View style={styles.rootWeather}>
            <View style={styles.header}></View>
            <View >
                <InputBlock placeholder={'Enter city'} titleButton={'Search City'} title = {title} setTitle= {setTitle}/>
            </View>
            <AppLoading/>
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