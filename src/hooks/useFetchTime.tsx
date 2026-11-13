import { useState, useEffect } from 'react';

type CityApi = {
  timeZone: string;
  time: string;
};

export const useFetchTime = (cityName: string) => {
  const [city, setCity] = useState<CityApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCityTime = async () => {
      setLoading(true);
      setError(null);
      setCity(null);
      try {
        const response = await fetch(
          `https://timeapi.io/api/time/current/zone?timeZone=Europe%2F${cityName}`,
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

    fetchCityTime();
  }, [cityName]);

  return {
    city,
    loading,
    error,
  };
};
