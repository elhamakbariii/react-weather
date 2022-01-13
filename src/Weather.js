import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="weather-app">
        <Search defaultCity="New York" />

        <div className="weather-forecast"></div>
      </div>

      <small>
        <a
          href="https://github.com/r3llie/react-weather"
          target="blank"
          className="open-source"
        >
          Open source code
        </a>
        by{" "}
        <a href="https://linktr.ee/r3llie" target="_blank" rel="noreferrer">
          @r3llie
        </a>
      </small>
    </div>
  );
}
