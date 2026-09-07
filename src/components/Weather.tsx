import { ReactEventHandler, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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

// Implement isLoading in the UI
// When wrong city is selected, 'Please select a city' should be taken off

function Weather() {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherApi, setWeatherApi] = useState<WeatherApi | null>(null);

  async function fetchWeatherApi(city: string) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
      );

      if (!response.ok) {
        setError('Something went wrong, try again');
        setWeatherApi(null);
        return;
      }

      const data = await response.json();

      setWeatherApi(data);
    } catch (error) {
      setWeatherApi(null);
      setError('Something utterly is wrong');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!city) {
      return;
    }
    fetchWeatherApi(city);
  }, [city]);

  let content = <p>Please choose a city</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (weatherApi) {
    content = (
      <div>
        <h2>City: {weatherApi.location.name}</h2>
        <p>Precipitation: {weatherApi.current.precip_in}</p>
        <p>Wind: {weatherApi.current.wind_kph}</p>
        <p>Humidity: {weatherApi.current.humidity}</p>
        <p>Temperature: {weatherApi.current.temp_c}</p>
      </div>
    );
  }

  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select a city</option>
        <option value="london">London</option>
        <option value="Manchester">Manchester</option>
        <option value="Ukpoma">Ukpoma</option>
      </select>
      <div>{content}</div>
    </div>
  );
}

export default Weather;
