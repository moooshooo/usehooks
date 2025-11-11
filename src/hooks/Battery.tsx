type batteryObject = {
  supported: boolean
  loading: boolean
  level: number | null
  charging: boolean | null
  chargingTime: number | null
  dischargingTime: number | null
}

const Battery = ({ level, charging, chargingTime, dischargingTime, supported, loading }: batteryObject) => {
  const seconds = dischargingTime ?? 0 
  
  const hours = (seconds / 3600).toFixed(1);
  return (
    <>
      <div>
        <p>
          Your batterilevel:{" "}
          {level !== undefined && level !== null
            ? `${(level * 100).toFixed(0)}%`
            : "Unknown"}
        </p>
        <p>{charging ? "Charging 🔋" : "Not charging 🪫"}</p>
        {charging && chargingTime ? <p>Time to full: {chargingTime}</p> : null}
        {!charging && dischargingTime ? (
          <p>How much left?: {hours} hours</p>
        ) : null}
        <p>Supports ?: {supported.toString()}</p>
        <p>Loading ?: {loading.toString()}</p>
      </div>
    </>
  );
};
export default Battery;
