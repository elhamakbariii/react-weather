import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForcast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row"> 
        <div className="col">
          <div className="forecast-day">Thu</div><WeatherIcon code="01d" size={36}/> 
          <div className="forecast-temps">
            <span className="forecast-maxtemp">19°</span> 
            <span className="forecast-mintemp">10°</span>
            </div>
        </div>
      </div>
    </div>
  );
}
