import "./App.css";
import { useBattery } from "@uidotdev/usehooks";
import Battery from "./hooks/battery";

function App() {
  const { level, charging, chargingTime, dischargingTime } = useBattery();

 /*  const isOnline = useOnline */

  return (
    <>
      <h1>Hooks galleri</h1>
      <div id="container">
        <div className="box">
          <h5>useOnline</h5>

        </div>
        <div className="box">
          <h5>useOnline</h5>
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
