import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios"

export default function Weather(props) {
const [weatherData, setWeatherdata] = useState({ ready:false });
function handleResponse(response){
  console.log(response.data)
setWeatherdata({
  ready: true,
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
  description: response.data.weather[0].description,
})
}


if (weatherData.ready) {
  return (
    <div className="row Weather">
      <div className="col">
        <div className="chance">
          <h4 className="text-capitalize">
            {weatherData.description} 
            <br />
            <strong> {Math.round(weatherData.temperature)}°C </strong>
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
            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
            <li>Wind: {Math.round(weatherData.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
const apiKey ="b318c179003d64fe70de737d79d84778"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading Weather App..."
}
}
