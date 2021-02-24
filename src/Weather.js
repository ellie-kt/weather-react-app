import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  return (
    <div className="row Weather">
      <div className="col">
        <div className="chance">
          <h4>
            Clouds
            <br />
            19°C
          </h4>
        </div>
        <div className="units">
          <a href="/">°C </a> |<a href="/"> °F </a>
        </div>
      </div>
      <div className="col">
        <div className="icon">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#403e4d"
            size={100}
            animate={true}
          />
        </div>
        <div className="elements">
          <ul>
            <li>Humidity: 20%</li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}