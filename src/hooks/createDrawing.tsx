// createDrawing.ts
export default function createDrawing(
  canvas: HTMLCanvasElement | null,
  drawing: string | null,
  saveDrawing: (dataUrl: string) => void
) {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#eee";

  // Om vi redan har en ritning sparad — ladda upp den igen
  if (drawing) {
    const img = new Image();
    img.src = drawing;
    img.onload = () => ctx.drawImage(img, 0, 0);
  }

  let isDrawing = false;

  // När du klickar ner musen
  canvas.onmousedown = () => (isDrawing = true);

  // När du släpper musen
  canvas.onmouseup = () => {
    isDrawing = false;
    ctx.beginPath();
    // Spara bilden som base64 i localStorage
    saveDrawing(canvas.toDataURL());
  };

  // När du rör musen över canvas
  canvas.onmousemove = (event) => {
    if (!isDrawing) return;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  };
}