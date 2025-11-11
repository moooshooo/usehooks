import * as React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import createDrawing from "./createDrawing";

const SaveToLocalStorage = () => {
  const [drawing, saveDrawing] = useLocalStorage<string | null>("drawing", null);
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      createDrawing(ref.current, drawing, saveDrawing);
    }
  }, [drawing, saveDrawing]);

  const handleReload = () => window.location.reload();
  const handleClear = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <section>
      <header>
        <h1>useLocalStorage</h1>
        <button className="link" onClick={handleReload}>
          Reload Window
        </button>
        <button className="link" onClick={handleClear}>
          Clear Local Storage
        </button>
      </header>
      <figure>
        <canvas
  ref={ref}
  width={window.innerWidth * 0.6}
  height={window.innerHeight * 0.2}
  style={{
    border: "2px solid #ccc",
    borderRadius: "0px",
    backgroundColor: "#222",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    cursor: "crosshair",
  }}
/>
        <figcaption>(draw something)</figcaption>
      </figure>
    </section>
  );
};

export default SaveToLocalStorage;