import React from "react";
import { WiSunset } from "react-icons/wi";

const info = ({ info }) => {
    return (
  <div>
     {
    info ?  <div className="info">
    <p id="city"><br />
      {info.name}-{info.sys.country}</p>
    <div className="temp">
      <p id="istilik">
       {info.main.temp} <WiSunset className="fa-c" />
      </p>
    </div>
    <p id="havaProqnozu">{info.weather[0].description}</p>
    <div className="hissEdilen">
      <p id="hissEdilen">
      {info.main.feels_like}<WiSunset className="fa-c" />
      </p>
    </div>
  </div> :null
   }
  </div>
  );
};

export default info;
