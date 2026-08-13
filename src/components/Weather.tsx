import { ReactEventHandler, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

interface WeatherApp {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    precip_in: number;
    humidity: number;
    wind_degree: number;
  };
}

// Now, I want users to select a list of cities from a dropdown.

function Weather() {
  const [dataReadings, setDataReadings] = useState<WeatherApp | null>(null);
  const [cityName, selectCityName] = useState('');

  const fetchWeather = async (city: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );
    const data = await response.json();
    console.log(data);
    setDataReadings(data);
  };

  useEffect(() => {
    fetchWeather('london');
  }, []);

  if (!dataReadings) {
    return <h1>Loading weather...</h1>;
  }

  return (
    <div>
      <select>
        <div value="">Select an Item</div>
        <p value="london">London</p>
        <p value="glasgow">Glasgow</p>
        <p value="edinburgh">Edinburgh</p>
        <p value="manchester">Manchester</p>
      </select>
      <h1>City: {dataReadings.location.name}</h1>
      <h3>Degree Celsius: {dataReadings.current.temp_c} </h3>
      <p>Precipitation: {dataReadings.current.precip_in} </p>
      <p>Humidity: {dataReadings.current.humidity} </p>
      <p>Wind: {dataReadings.current.wind_degree} </p>

      <div>
        <h3>Weather</h3>
        <p>Day of the week</p>
        <p>Rainy or Sunny</p>
      </div>
    </div>
  );
}
export default Weather;
