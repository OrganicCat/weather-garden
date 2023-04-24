export interface WeatherDay {
    dt: number,
    weather: string,
    temp: {
        day: number,
        min: number,
        max: number
        feels_like?: number
    }
}

export interface WeatherServiceData {
    city: string,
    weatherArray: WeatherDay[]
}

export const basicWeather: WeatherDay[] = [{
    dt: 1606867755,
    weather: "Rain",
    temp: {
        day: 60,
        min: 60,
        max: 60
    },
}, {
    dt: 1606954155,
    weather: "Rain",
    temp: {
        day: 35,
        min: 25,
        max: 40
    }
},
{
    dt: 1607040555,
    weather: "Clear",
    temp: {
        day: 45,
        min: 35,
        max: 55
    }
},
{
    dt: 1607126955,
    weather: "Clouds",
    temp: {
        day: 30,
        min: 20,
        max: 40
    }
},
{
    dt: 1607213355,
    weather: "Drizzle",
    temp: {
        day: -5,
        min: -10,
        max: 0
    }
},
{
    dt: 1607299755,
    weather: "Thunderstorm",
    temp: {
        day: 5,
        min: 5,
        max: 5
    }
}];

