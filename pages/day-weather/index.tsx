import moment from "moment";
import React, { useContext, useEffect } from "react";
import Image from 'next/image'
import { WeatherDay } from "@/utility/weatherConstants";
import ThemeContext from "@/utility/ThemeContext";

export function DayWeather({ weatherData }: { weatherData: WeatherDay }) {
    const monthDay = moment.unix(weatherData.dt).format('MMM DD');
    const monthDayHour = moment.unix(weatherData.dt).format('MMM DD h:mm a');
    const weekDay = moment.unix(weatherData.dt).format('dddd');
    const themeContext = useContext(ThemeContext);
    const backgroundColor = themeContext.theme === "dark" ? "bg-gray-700" : "bg-gray-200";
    const textColor = themeContext.theme === "dark" ? "text-white" : "text-black";
    const borderColor = themeContext.theme === "dark" ? "border-white" : "border-black";
    const flippedBorderColor = themeContext.theme === "dark" ? "border-gray-200" : "border-gray-700";

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

    const gardeningRating = (weatherData: WeatherDay) => {
        const temp = weatherData.temp.day;
        const rain = weatherData.weather === "Rain" ? 1 : 0;
        return temp > 50 && temp < 90 && rain === 0 ? <>Good &#128519;</> : <>Bad &#128557;</>;
    };

    const weatherImage = getWeatherImage(weatherData.weather);

    return (
        <div className={`border-2 p-4 w-40 ${backgroundColor} ${textColor} ${flippedBorderColor}`}>
            <div className="text-center" data-id="monthday">{monthDay}</div>
            <div className={`text-center border-b-2 ${borderColor}`}>{weekDay}</div>
            <div className="text-center text-2xl pt-4">{weatherData.temp.day} &deg;F</div>
            <div className="text-center py-4" data-id="weatherImage">{weatherImage}</div>
            <div className="text-xs">Low: {weatherData.temp.min} &deg;F</div>
            <div className="text-xs">High: {weatherData.temp.max} &deg;F</div>
            <div className={`border-t-2 pt-2 text-center text-sm ${borderColor}`}>It's a {gardeningRating(weatherData)} day for gardening!</div>
        </div>
    )
}