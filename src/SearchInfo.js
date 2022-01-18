import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function SearchInfo(props) {
  return (
    <div className="SearchInfo">
      <div className="City">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="description-weather text-capitalize">
            {props.data.description}
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-7">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="main-icon"
          />

          <span className="temp">
            <WeatherTemp fahrenheit={props.data.temperature} />
          </span>
        </div>

        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
