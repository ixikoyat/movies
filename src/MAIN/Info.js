import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  console.log(location.state);
  const [obyekt, setObyekt] = useState(location.state);

  return (
    <div className="container">

    <div className="row">
        <div className="col">
        <img src=""  />
        </div>
        <div className="col">
        <h1>{location.state.name}</h1>
        <h3>{obyekt.overview}</h3>
        </div>
   
    </div>
     
    </div>
  );
};

export default Info;
