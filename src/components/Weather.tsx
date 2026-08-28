import { ReactEventHandler, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/*

User selects a city

App looks for weather

Shows loading

Weather data arrives

Show weather

*/

type WeatherApi = {
  location: {
    name: string;
  };
  current: {
    precip_in: number;
    wind_kph: number;
    humidity: number;
    temp_c: number;
  };
};

function Weather() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherApi | null>(null);

  const fetchWeather = async (city: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather('london');
  }, [city]);

  return (
    <div>
      <h2>City: {weather?.location.name} </h2>
      <div>Temperature: {weather?.current.temp_c}</div>
      <div>Humidity: {weather?.current.humidity}</div>
      <div>Precipitation: {weather?.current.precip_in}</div>
      <div>Wind: {weather?.current.wind_kph}</div>
    </div>
  );
}

export default Weather;
