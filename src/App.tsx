import { useState } from "react";
import "./App.css";
import {
  useBattery,
  useGeolocation,
  useWindowSize,
  useNetworkState
} from "@uidotdev/usehooks";

import Battery from "./hooks/Battery";
import useOnline from "./hooks/UseOnline";
import Location from "./hooks/UseGeoLocation";
import Webcam from "react-webcam";
import WindowSize from "./hooks/UseWindowSize";
import NetStats from "./hooks/NetStats";

import Gyroscope from "./hooks/GyroScope"
import useGyroscope from "react-hook-gyroscope"


function App() {
  const { level, charging, chargingTime, dischargingTime, supported, loading } =
    useBattery();
  const [showBatt, setShowBatt] = useState(false);

  const isOnline = useOnline();

  const [showGeo, setShowGeo] = useState(false);
  const state = useGeolocation();

  const [showCam, setShowCam] = useState(false);

  const size = useWindowSize();

  const network = useNetworkState();

  const gyroscope = useGyroscope();

  return (
    <>
      <h1 id="logo-text">Hooks galleri</h1>
      <div id="container">
        <div className="box">
          <h1>useOnline - FOS25</h1>
          {isOnline ? <p>🟢 Online </p> : <p>🔴 Kolla WiFi</p>}

          <p className="source-site">
            Source: 
            <a className="source-site-link" href="#">
              AA
            </a>
          </p>
        </div>
        <div className="box">
          <h1>useBattery</h1>
          <button onClick={() => setShowBatt(!showBatt)}>
            {showBatt ? "Avaktivera" : "Aktivera"}
          </button>

          {showBatt ? (
            <Battery
              level={level}
              charging={charging}
              chargingTime={chargingTime}
              dischargingTime={dischargingTime}
              loading={loading}
              supported={supported}
            />
          ) : (
            <p>Inget att se än...</p>
          )}

          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              Source: https://usehooks.com/
            </a>
          </p>
        </div>
        <div className="box">
          <h1>useGeolocation</h1>
          <button onClick={() => setShowGeo(!showGeo)}>
            {showGeo ? "Avaktivera" : "Aktivera"}
          </button>

          {showGeo ? <Location state={state} /> : <p>Inget att se än...</p>}

          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              https://usehooks.com/
            </a>
          </p>
        </div>
        <div className="box">
          <h1>reactWebcam</h1>
          <button onClick={() => setShowCam(!showCam)}>
            {showCam ? "Avaktivera" : "Aktivera"}
          </button>

          {showCam ? <Webcam mirrored={true} /> : <p>Inget att se än...</p>}

          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://www.npmjs.com/package/react-webcam"
              target="_blank"
            >
              npm react-webcam
            </a>
          </p>
        </div>
        <div className="box">
          <h1>useWindowSize</h1>

          <WindowSize size={size} />

          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              https://usehooks.com/
            </a>
          </p>
        </div>
        <div className="box">
          <h1>useNetworkState</h1>
          <NetStats network={network} />

          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              https://usehooks.com/
            </a>
          </p>
        </div>
        <div className="box">
          <h1>useGyroscope</h1>
          <Gyroscope gyroscope={gyroscope} />
          <p className="source-site">
            Source: 
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              https://usehooks.com/
            </a>
          </p></div>
        <div className="box">
          <h1>...</h1>
          
          <p className="source-site">
            Source:{" "}
            <a
              className="source-site-link"
              href="https://usehooks.com/"
              target="_blank"
            >
              https://usehooks.com/
            </a>
          </p></div>
      </div>
    </>
  );
}

export default App;
