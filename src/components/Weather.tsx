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

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherApi | null>(null);

  const fetchFunction = async (city: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );

     try{
      if (!response.ok){
        
      }
     }catch(){

     }
    const data = await response.json();

    setWeatherData(data);
  };

  useEffect(() => {
    if (city) {
      fetchFunction(city);
    }
  }, [city]);

  return (
    <div>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        <option value="">Select an item</option>
        <option value="london">London</option>
        <option value="glasgow">Glasgow</option>
        <option value="manchester">Manchester</option>
        <option value="ukpoma">Ukpoma</option>
        <option value="new york">New York</option>
      </select>

      {weatherData ? (
        <div>
          <h2>City: {weatherData.location.name} </h2>
          <h4>Degree Celsius: {weatherData.current.temp_c} </h4>
          <div>Precipitation: {weatherData.current.precip_in} </div>
          <div>Humidity: {weatherData.current.humidity} </div>
          <div>Wind: {weatherData.current.wind_kph} </div>
        </div>
      ) : (
        <div>Please select a city</div>
      )}

      <div>
        <h1>Weather</h1>
        <div>Day of the week</div>
        <div>Rainy or Sunny</div>
      </div>
    </div>
  );
}

export default WeatherApp;
