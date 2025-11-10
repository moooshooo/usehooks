const Battery = ({ level, charging, chargingTime, dischargingTime }) => {
  return (
    <>
      <div>
        <p>Din battery just nu: {level.toFixed(0) + "%"}</p>
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
