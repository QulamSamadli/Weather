import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");
  useEffect(() => {
    console.log(city);
  }, [city]);
  const handleChange = () => {
    const api = "a8fe7fb9da95f0df9900e105e00d113a";
    const _URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=az`;
    axios.get(_URL).then(data=>console.log(data))
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
            placeholder="Seher adi yazin"
            className="InputText"
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Gonder
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
