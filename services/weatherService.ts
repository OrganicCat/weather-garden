import { WeatherDay, WeatherServiceData } from "@/utility/weatherConstants";

export const getWeatherByCity = async (city: String): Promise<WeatherServiceData> => {
    let weatherData: WeatherServiceData = { city: "", weatherArray: [] };
    try {
        const result: Response = await fetch(`/api/weather-data/${city}`);
        weatherData = await result.json();
    } catch (error) {
        console.error("[getWeatherByCity]: Error, ", error);
    }

    return weatherData;

}