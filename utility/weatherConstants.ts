export interface WeatherDay {
    dt: number,
    weather: number,
    temp: {
        day: number,
        min: number,
        max: number
        feels_like?: number
    }
}

export const basicWeather: any = [{
    dt: 1606867755,
    weather: "Clouds",
    temp: {
        day: 40,
        min: 30,
        max: 50
    }
}, {
    dt: 1606867755,
    weather: "Clouds",
    temp: {
        day: 40,
        min: 30,
        max: 50
    }
}];