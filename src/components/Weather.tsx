import { ReactEventHandler, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const fetchWeather = async (city: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchWeather('london');
  }, []);

  return (
    <div>
      <h1>City: {data.location.name}</h1>
      <h3>Degree Celsius: {data.temp_c} </h3>
      <p>Precipitation: {data.current.precip_in} </p>
      <p>Humidity: {data.current.humidity} </p>
      <p>Wind: {data.current.wind_degree} </p>

      <div>
        <h3>Weather</h3>
        <p>Day of the week</p>
        <p>Rainy or Sunny</p>
      </div>
    </div>
  );
}
export default Weather;
