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
  const [error, setError] = useState('');

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
      );
      if (!response.ok) {
        setCity('');
        setError('Something went wrong');
      }

      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError("Couldn't find the city");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div>
      <div>{error && <p>{error}</p>}</div>
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="london">London</option>
        <option value="manchester">Manchester</option>
        <option value="ukpoma">Ukpoma</option>
      </select>
      <div>{loading && <p>Loading</p>}</div>
      {weather ? (
        <div>
          <h2>City: {weather.location.name} </h2>
          <div>Temperature: {weather.current.temp_c}</div>
          <div>Humidity: {weather.current.humidity}</div>
          <div>Precipitation: {weather.current.precip_in}</div>
          <div>Wind: {weather.current.wind_kph}</div>
        </div>
      ) : (
        <p>Please select a city</p>
      )}
    </div>
  );
}

export default Weather;
