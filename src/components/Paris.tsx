import { useState, useEffect } from 'react';

type CityApi = {
  timezone: string;
  datetime: string;
};

function App() {
  const [city, setCity] = useState<CityApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setCity(null);
      try {
        const response = await fetch(
          `https://worldtime.timezone.io/api/timezone/Europe/London`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || 'Something went wrong');
        }

        setCity(data);
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';
        console.error(error);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!city) {
    return <p>No city data available</p>;
  }
  return (
    <div>
      <h2>City API</h2>
      <div>
        <p>City: {city.timezone}</p>
        <p>Time: {city.datetime} </p>
      </div>
    </div>
  );
}
export default App;
