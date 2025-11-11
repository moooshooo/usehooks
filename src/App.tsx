import "./App.css";
import { useBattery, useGeolocation } from "@uidotdev/usehooks";
import Battery from "./hooks/Battery";
import useOnline from "./hooks/useOnline";
import Location from "./hooks/useGeoLocation";

function App() {
  const { level, charging, chargingTime, dischargingTime } = useBattery();

  const isOnline = useOnline();

  const state = useGeolocation();

  return (
    <>
      <h1>Hooks galleri</h1>
      <div id="container">
        <div className="box">
          <h1>useOnline</h1>
          {isOnline ? <p>🟢 Online </p> : <p>🔴 Kolla WiFi</p>}
        </div>
        <div className="box">
          <h1>useBattery</h1>
          <Battery
            level={level}
            charging={charging}
            chargingTime={chargingTime}
            dischargingTime={dischargingTime}
          />
        </div>
        <div className="box">
          <h1>useGeolocation</h1>
          <Location state={state}/>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </>
  );
}

export default App;
