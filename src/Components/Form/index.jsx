import axios from "axios";
import React, { useState } from "react";

const Form = ({setState,setInfo}) => {
  const [city, setCity] = useState("");
 
  const handleChange = () => {
    const api = "a8fe7fb9da95f0df9900e105e00d113a";
    const _URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=az`;
    axios.get(_URL).then(res=>setInfo(res.data));
setState(true)
  };
  return (
    <div>
      <h1>Hava Proqnozu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Şəhər adını daxil edin"
            className="InputText"
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Göndər
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
