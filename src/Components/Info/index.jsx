import React from "react";
import { WiSunset } from "react-icons/wi";

const info = ({ info,state }) => {
    return (
  <div>
     {
    state ?  <div className="info">
    <p id="city"><br />
    Şəhər, ölkə: {info.name}, {info.sys.country}</p>
    <div className="temp">
      <p id="istilik">İstilik:
       {info.main.temp} 
      </p><WiSunset className="fa-c" />
    </div>
    <p id="havaProqnozu">Hava: {info.weather[0].description}</p>
    <div className="hissEdilen">
      <p id="hissEdilen">Hiss edilən: {info.main.feels_like}
      </p><WiSunset className="fa-c" />
    </div>
  </div> :null
   }
  </div>
  );
};

export default info;
