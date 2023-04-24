import moment from "moment";
import React from "react";
import Image from 'next/image'
import { WeatherDay } from "@/utility/weatherConstants";

export function DayWeather({ weatherData }: { weatherData: WeatherDay }) {
    const monthDay = moment.unix(weatherData.dt).format('MMM DD');
    const weekDay = moment.unix(weatherData.dt).format('dddd');

    const getWeatherImage = (weatherDayType: String) => {
        switch (weatherDayType) {
            case "Clear":
                return <Image className="mx-auto" alt="Small Sun" src="/images/small_sun.png" width="32" height="32" />
            case "Clouds":
                return <Image className="mx-auto" alt="Small Cloud" src="/images/small_cloud.png" width="32" height="32" />
            case "Drizzle":
            case "Rain":
                return <Image className="mx-auto" alt="Small Rain" src="/images/small_rain.png" width="32" height="32" />
            case "Thunderstorm":
                return <Image className="mx-auto" alt="Small Thunderstorm" src="/images/small_thunderstorm.png" width="32" height="32" />
            default:
                return <div className="italic">{weatherDayType}</div>
        }
    }

    const weatherImage = getWeatherImage(weatherData.weather);

    return (
        <div className="border-2 p-4 w-40 bg-gray-700">
            <div className="text-center" data-id="monthday">{monthDay}</div>
            <div className="text-center border-b-2">{weekDay}</div>
            <div className="text-center text-2xl pt-4">{weatherData.temp.day} &deg;F</div>
            <div className="text-center py-4" data-id="weatherImage">{weatherImage}</div>
            <div className="text-xs">Low: {weatherData.temp.min} &deg;F</div>
            <div className="text-xs">High: {weatherData.temp.max} &deg;F</div>
        </div>
    )
}