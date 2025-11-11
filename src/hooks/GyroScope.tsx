type GyroscopeObject = {
  x: number | null
  y: number | null
  z: number | null
  error?: boolean | null
}

const Gyroscope = ({ gyroscope }: { gyroscope: GyroscopeObject }) => {
  if (gyroscope?.error) {
    return <p>No gyroscope, sorry.</p>
  }

  return (
    <>
      <p><strong>X: </strong>{gyroscope.x?.toFixed(2) ?? "N/A"}</p>
      <p><strong>Y: </strong>{gyroscope.y?.toFixed(2) ?? "N/A"}</p>
      <p><strong>Z: </strong>{gyroscope.z?.toFixed(2) ?? "N/A"}</p>
    </>
  )
}

export default Gyroscope