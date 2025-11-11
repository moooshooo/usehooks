type useWindowObject = {
    width: number | null
    height: number | null
}

const WindowSize = ({size}: {size : useWindowObject} ) => {
 
  return (
    <div>
      <p>Resize the window</p>

      <p><strong>Width:</strong>{size.width}</p>
      <p><strong>Height :</strong>{size.height}</p>
      
    </div>
  );
}

export default WindowSize