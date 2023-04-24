import { getCityCoords } from "@/utility/cityConstants";
import { WeatherDay, basicWeather } from "@/utility/weatherConstants";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const city: String = req.query?.city ? req.query.city.toString() : "Burlington";
    const coordData = getCityCoords(city);

    if (coordData.lat === 0 && coordData.long === 0) {
        console.error("[getWeatherData]: Error - bad city data");
        res.status(500).send("Error, unable to complete at this time.");
    }

    const units: String = "imperial";

    try {
        //const result: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordData.lat}&lon=${coordData.long}&nits=${units}&appid=${apiKey}`);
        //const weatherData = await result.json();
        const weatherData = {
            list: basicWeather
        };
        const weatherArray: WeatherDay[] = weatherData.list.map((day: any) => {
            return {
                dt: day.dt,
                weather: day.weather,
                temp: {
                    day: day.temp.day,
                    min: day.temp.min,
                    max: day.temp.max
                }
            }
        });
        // const weatherArray: WeatherDay[] = weatherData.list.map((day: any) => {
        //     return {
        //         dt: day.dt,
        //         weather: day.weather.main,
        //         temp: {
        //             day: day.main.temp,
        //             min: day.main.temp_min,
        //             max: day.main.temp_max,
        //             feels_like: day.main.feels_like
        //         }
        //     }
        // });
        res.status(200).send({ city, weatherArray });
    } catch (error) {
        console.error("[getWeatherData]: Error - ", error);
        res.status(500).send("Error, unable to complete at this time.");
    }
}
