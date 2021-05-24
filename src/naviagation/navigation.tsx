import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {MainScreen} from "../components/MainScreen";
import {NewsScreen} from "../components/NewsScreen";
import {NotesScreen} from "../components/NotesScreen";
import {WeatherScreen} from "../components/WeatherScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
export const Navigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='MainScreen'
                           tabBarOptions={{
                activeBackgroundColor: 'blue',
                inactiveBackgroundColor: '#fff',
                activeTintColor: '#fff',
                inactiveTintColor: 'black'
            }}
            >
                <Tab.Screen name='MainScreen' component={MainScreen} options={{
                    tabBarIcon:() =>{
                        return <Fontisto name="world-o" size={24} color="black" />
                    }}}/>
                <Tab.Screen name='NewsScreen' component={NewsScreen} options={{
                    tabBarIcon:() =>{
                        return <FontAwesome name="newspaper-o" size={24} color="black" />
                    }
                }}/>
                <Tab.Screen name='NotesScreen' component={NotesScreen} options={{
                    tabBarIcon:()=>{
                        return <Foundation name="clipboard-notes" size={24} color="black" />
                    }
                }}/>
                <Tab.Screen name='WeatherScreen' component={WeatherScreen} options={{
                    tabBarIcon: () => {
                        return <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" />
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    
)

}