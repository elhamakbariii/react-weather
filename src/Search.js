import React, { useState } from "react";
import axios from "axios";
import SearchInfo from "./SearchInfo";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function Search() {
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  if (ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
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

        <SearchInfo data={weatherData} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
