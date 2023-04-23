import { WeatherDay } from "@/utility/weatherConstants";

export const getWeatherByCity = async (city: String): Promise<WeatherDay[] | null> => {
    let weatherData: WeatherDay[] | null = null;
    try {
        const result: Response = await fetch(`/api/weather-data/${city}`);
        weatherData = await result.json();
    } catch (error) {
        console.error("[getWeatherByCity]: Error, ", error);
    }

    return weatherData;
}