import moment from "moment";
import React from "react";
import Image from 'next/image'
import small_rain from '../assets/images/small_rain.png';
import small_cloud from '../assets/images/small_cloud.png';
import small_sun from '../assets/images/small_sun.png';
import small_thunderstorm from '../assets/images/small_thunderstorm.png';

const DayWeather = (props: any) => {
    const data = props.weatherData;
    console.log("running somthing", data);
    const monthDay = moment.unix(data.dt).format('MMM DD');
    const weekDay = moment.unix(data.dt).format('dddd');

    const getWeatherImage = (weatherDayType: String) => {
        switch (weatherDayType) {
            case "Clear":
                return <Image className="mx-auto" alt="Small Sun" src={small_sun} />
            case "Clouds":
                return <Image className="mx-auto" alt="Small Cloud" src={small_cloud} />
            case "Drizzle":
            case "Rain":
                return <Image className="mx-auto" alt="Small Rain" src={small_rain} />
            case "Thunderstorm":
                return <Image className="mx-auto" alt="Small Thunderstorm" src={small_thunderstorm} />
            default:
                return <div className="italic">{weatherDayType}</div>
        }
    }

    const weatherImage = getWeatherImage(data.weather[0].main);

    return (
        <div className="border-2 p-4 w-40 bg-gray-700">
            <div className="text-center" data-id="monthday">{monthDay}</div>
            <div className="text-center border-b-2">{weekDay}</div>
            <div className="text-center text-2xl pt-4">{data.temp.day} &deg;F</div>
            <div className="text-center py-4" data-id="weatherImage">{weatherImage}</div>
            <div className="text-xs">Low: {data.temp.min} &deg;F</div>
            <div className="text-xs">High: {data.temp.max} &deg;F</div>
        </div>
    )
}

export default DayWeather;