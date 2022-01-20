import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "6f578b96aa9505bcce148ac22cb85794";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temps">
            <span className="forecast-maxtemp">19°</span>
            <span className="forecast-mintemp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
