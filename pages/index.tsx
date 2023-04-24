import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { WeatherDay, WeatherServiceData, basicWeather } from '@/utility/weatherConstants';
import { DayWeather } from './day-weather';
import { getWeatherByCity } from '@/services/weatherService';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [weather, setWeather] = useState<any>([]);
    const defaultCity = "Burlington";

    useEffect(() => {
        displayWeather(defaultCity);
    }, []);

    const displayWeather = async (city: String) => {
        const { weatherArray = basicWeather }: WeatherServiceData = await getWeatherByCity(city);

        if (weatherArray.length === 0) {
            console.error("[displayWeather]: Error - Could not get weather, perhaps I overloaded my key again");
            const fiveDayWeather = basicWeather.slice(0, 5);
            setWeather(fiveDayWeather);
        } else {
            setWeather(weatherArray.slice(0, 5));
        }
    }

    return (
        <main className={`flex min-h-screen flex-co items-center justify-between p-24 ${inter.className}`}>
            <div className="flex flex-row items-center justify-center">
                {weather.map((value: WeatherDay, index: number) => {
                    return <DayWeather weatherData={value} key={index} />;
                })}
            </div>

        </main>
    )
}
