import { ReactEventHandler, useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function WeatherApp() {
  return (
    <div>
      <select>
        <option value="">Select an item</option>
        <option value="london">London</option>
        <option value="glasgow">Glasgow</option>
        <option value="manchester">Manchester</option>
        <option value="edinburgh">Edinburgh</option>
        <option value="new york">New York</option>
      </select>
      <div>
        <h2>City: </h2>
        <h4>Degree Celsius: </h4>
        <div>Precipitation: </div>
        <div>Humidity: </div>
        <div>Wind: </div>
      </div>
      <div>Please select a city</div>
      <div>
        <h1>Weather</h1>
        <div>Day of the week</div>
        <div>Rainy or Sunny</div>
      </div>
    </div>
  );
}

export default WeatherApp;
