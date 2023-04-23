interface CityCoords {
    lat: Number,
    long: Number
}

const cityKey: Map<String, CityCoords> = new Map();

cityKey.set("Chicago", { lat: 41.8781, long: -87.6298 });
cityKey.set("NYC", { lat: 40.7128, long: -74.0060 });
cityKey.set("Burlington", { lat: 44.4759, long: -73.2121 });
cityKey.set("Hong Kong", { lat: 22.3193, long: 114.1694 });
cityKey.set("London", { lat: 51.5074, long: -0.1278 });
cityKey.set("Dubai", { lat: 25.2048, long: -55.2708 });


export const getCityCoords = (cityName: String): CityCoords => {
    return cityKey.get(cityName) || { lat: 0, long: 0 };
}