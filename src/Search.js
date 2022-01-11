import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
    setMessage(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3 btn">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="City">
        <h1>{message}</h1>
        <ul>
          <li>Last updated 16:03</li>
          <li className="description-weather">{description}</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-7">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            className="main-icon"
          />

          <span className="temp">
            <span className="temp-number">{Math.round(temperature)}</span>
            <span className="fahrenheit">°F</span>
          </span>
        </div>

        <div className="col-5">
          <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {Math.round(wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
