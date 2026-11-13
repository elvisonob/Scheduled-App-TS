import { useFetchTime } from '../hooks/useFetchTime';

function App() {
  const { city, loading, error } = useFetchTime('London');

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
        <p>Time: {city.time}</p>
        <p>City: {city.timeZone} </p>
      </div>
    </div>
  );
}
export default App;
