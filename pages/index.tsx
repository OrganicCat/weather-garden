import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { WeatherDay, WeatherServiceData, basicWeather } from '@/utility/weatherConstants';
import { DayWeather } from './day-weather';
import { getWeatherByCity } from '@/services/weatherService';
import moment from 'moment';
import ThemeContext from '@/utility/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [weather, setWeather] = useState<any>([]);
    const defaultCity = "Burlington";
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        displayWeather(defaultCity);
    }, []);

    const displayWeather = async (city: String) => {
        const { weatherArray = basicWeather }: WeatherServiceData = await getWeatherByCity(city);

        if (weatherArray.length === 0) {
            console.error("[displayWeather]: Error - Could not get weather, perhaps I overloaded my key again");
            //const fiveDayWeather = basicWeather.slice(0, 5);
            setWeather(getWeatherSlicesByDay(weatherArray));
        } else {
            setWeather(getWeatherSlicesByDay(weatherArray));
        }
    }

    const getWeatherSlicesByDay = (weatherArray: WeatherDay[]) => {
        const weatherSlices: WeatherDay[] = weatherArray.filter((value: WeatherDay) => {
            const currentHourWithMoment: number = parseInt(moment.unix(value.dt).format('HH'));
            if (currentHourWithMoment > 10 && currentHourWithMoment < 12) {
                return true;
            }
        });
        return weatherSlices;
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                    <button className="select-none p-4 cursor-pointer border-2 rounded-md border-gray-700 bg-gray-700 text-white mb-4" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
                    <div className="flex flex-row items-center justify-center">
                        {weather.map((value: WeatherDay, index: number) => {
                            return <DayWeather weatherData={value} key={index} />;
                        })}
                    </div>
                </main>

            </ThemeContext.Provider>
        </>
    )
}
