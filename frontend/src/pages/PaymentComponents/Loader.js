import {CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import BounceLoader from "react-spinners/BounceLoader"
import { useState } from "react";
import { useDispatch } from "react-redux";

function Loader(){
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const mydispatch = useDispatch();

  

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <ClipLoader size="70" color="#36d7b7" />
    </div>
  );
}

export default Loader;