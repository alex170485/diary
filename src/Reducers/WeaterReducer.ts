import {GET_CITY_WEATHER} from "./Type/type";
import {GetCityWeather} from "../api/api";

export type weatherType = {
    id: number | null,
    main: string | null,
    description: string | null,
    icon: string | null
}

type initialStateType = {
    weather: Array<weatherType>,
    main: {
        temp: number | null,
        temp_min: number | null,
        temp_max: number | null,
    },
    name: string | null
}

const initialState: initialStateType = {
    weather: [{
        id: null,
        main: null,
        description: null,
        icon: null
    }],
    main: {
        temp: null,
        temp_min: null,
        temp_max: null,
    },
    name: null
}


export const WeatherReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case GET_CITY_WEATHER : {
            return {
                ...state,
                weather: [
                        ...action.weather
                ],
                // weather: state.weather.map(el => {
                //     return {
                //         id: action.weather.id,
                //         main: action.weather.main,
                //         description: action.weather.description,
                //         icon: action.weather.icon
                //     }
                // }),
                main: {
                    temp: action.main.temp,
                    temp_min: action.main.temp_min,
                    temp_max: action.main.temp_max
                },
                name: action.name
            }
        }
    }
    return state
}

export const GetWeatherCityAC = (weather: any,
                                 main: { temp: number, temp_min: number, temp_max: number }, name: string) => (
    {type: GET_CITY_WEATHER, weather, main, name} as const)


type GetWeatherCityACType = ReturnType<typeof GetWeatherCityAC>
type ActionsType = GetWeatherCityACType

export const GetWeatherCityTC = (name: string) => async (dispatch: any) => {

    try {
        const res = await GetCityWeather.getWeather(name)
        dispatch(GetWeatherCityAC(res.data.weather, {
            temp: res.data.main.temp,
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_max
        }, res.data.name))
    } catch (e) {
        console.log(e)
    }
}