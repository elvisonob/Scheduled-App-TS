import { useFetchTime } from '../hooks/useFetchTime';

type CityApi = {
  timeZone: string;
  time: string;
};

function App() {
  const { city, loading, error } = useFetchTime('Paris');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!city) {
    return <p>No city data available</p>;
  }

  // Format the time here

  return (
    <div>
      <h2>City API</h2>
      <div>
        <p>Time: {city.time}</p>
        <p>City: {city.timeZone} </p>
      </div>
    </div>
  );
}
export default App;
