type geoObject = {
  loading: boolean
  accuracy: number | null
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  latitude: number | null
  longitude: number | null
  speed: number | null
  timestamp: number
  error?: string | null
}

function Location({ state}:{ state: geoObject }) {
  if (state.loading) {
    return <p>loading... (you may need to enable permissions)</p>;
  }

  if (state.error) {
    return <p>Enable permissions to access your location data</p>;
  }

  const date = new Date(state.timestamp);
  const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <>
      <h3>Object alternatives:</h3>
      <p>Accuracy: {state.accuracy}</p>
      <p>Altitude: {state.altitude}</p>
      <p>Altitude Accuracy: {state.altitudeAccuracy}</p>
      <p>heading: {state.heading}</p>
      <p>Latitude: {state.latitude}</p>
      <p>Longitude: {state.longitude}</p>
      <p>speed: {state.speed}</p>
      <p>Timestamp converted: {formattedTime}</p>
      <p>Latitude: {state.latitude}</p>
      <p>Error: {state.error}</p>
    </>
  );
}
export default Location;
