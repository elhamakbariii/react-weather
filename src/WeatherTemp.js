import React from "react";

export default function WeatherTemp(props) {
   return (
      <span className="WeatherTemp">
        {" "}
        <span className="temp-number">{Math.round(props.fahrenheit)}</span>
        <span className="fahrenheit">
          °F
         
        </span>
      </span>
    );
}
