import axios from "axios";

const api_key_Weather = '72a2a31ffb2e931b3f017b19d1cd85d6'
const api_key_News = '3982532143a742a8becfcbab699e66f2'

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
})
// export const GetCityWeather = (title: string) => {
//     return axios<AxiosType>(
//         {
//         url: `http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=72a2a31ffb2e931b3f017b19d1cd85d6`,
//         method: "GET"
//     })
// }

export const GetCityWeather = {
    getWeather(title: string) {
        return instance.get<AxiosType>(`/weather?q=${title}&appid=72a2a31ffb2e931b3f017b19d1cd85d6`)
    }
}

type AxiosType = {
    base: string
    clouds: any
    cod: number
    coord: {
        lon: number, lat: number
    }
    dt: number
    id: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        sea_level: number
        grnd_level: number
    }
    name: string
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    visibility: number
    weather: {
        id: number
        main: string
        description: string
        icon: string
    }[],
    wind: {
        speed: number
        deg: number
        gust: number
    }
}





