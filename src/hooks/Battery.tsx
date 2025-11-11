type batteryObject = {
  supported: boolean
  loading: boolean
  level: number | null
  charging: boolean | null
  chargingTime: number | null
  dischargingTime: number | null
}

const Battery = ({ level, charging, chargingTime, dischargingTime, supported, loading }: batteryObject) => {
  const seconds = dischargingTime ?? 0 // e.g. 5400 seconds
 /*  const minutes = (seconds / 60).toFixed(0); // → 90 minutes */
  const hours = (seconds / 3600).toFixed(1); // → 1.5 hours
  return (
    <>
      <div>
        <p>
          Din battery just nu:{" "}
          {level !== undefined && level !== null
            ? `${(level * 100).toFixed(0)}%`
            : "Okänd"}
        </p>
        <p>{charging ? "Laddar ⚡" : "Laddar inte 🔋"}</p>
        {charging && chargingTime ? <p>Time to full: {chargingTime}</p> : null}
        {!charging && dischargingTime ? (
          <p>Hur lång tid har du kvar?: {hours} timmar</p>
        ) : null}
        <p>Supports ?: {supported.toString()}</p>
        <p>Loading ?: {loading.toString()}</p>
      </div>
    </>
  );
};
export default Battery;
