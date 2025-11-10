const Battery = ({ level, charging, chargingTime, dischargingTime }) => {
  return (
    <>
      <div>
        <p>Din battery just nu:{" "}
          {level !== undefined && level !== null
            ? `${(level * 100).toFixed(0)}%`
            : "Okänd"}</p>
        <p>{charging ? "Laddar ⚡" : "Laddar inte 🔋"}</p>
        {charging && chargingTime ? <p>Time to full: {chargingTime}</p> : null}
        {!charging && dischargingTime ? (
          <p>Hur lång tid behöver du?: {dischargingTime}</p>
        ) : null}
      </div>
    </>
  );
};
export default Battery;
