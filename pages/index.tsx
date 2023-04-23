import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { WeatherDay, basicWeather } from '@/utility/weatherConstants';
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
        const chicagoWeather: WeatherDay[] | null = await getWeatherByCity(city);
        if (!chicagoWeather || !chicagoWeather.data) {
            console.error("[displayWeather]: Error - Could not get weather, perhaps I overloaded my key again");
            setWeather(basicWeather);
        } else {
            const fiveDayWeather = chicagoWeather.data.splice(0, 5);
            setWeather(fiveDayWeather);
        }
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="flex flex-col items-center justify-center space-y-4">Weather Garden</div>
            {weather && weather.map((value: WeatherDay, index: number) => {
                return <DayWeather weatherData={value} key={index} />;
            })}

        </main>
    )
}
