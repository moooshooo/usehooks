import "./App.css";
import { useBattery } from "@uidotdev/usehooks";
import Battery from "./hooks/battery";
import useOnline from "./hooks/useOnline"

function App() {
  const { level, charging, chargingTime, dischargingTime } = useBattery();

   const isOnline = useOnline()

  return (
    <>
      <h1>Hooks galleri</h1>
      <div id="container">
        <div className="box">
          <h5>useOnline</h5>
          {isOnline ? (<p>🟢 Online </p> ): <p>🔴 Kolla WiFi</p>}
        </div>
        <div className="box">
          <h5>useBattery</h5>
          <Battery level={level} charging={charging} chargingTime={chargingTime} dischargingTime={dischargingTime} />
        </div>
        <div className="box"></div>
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
