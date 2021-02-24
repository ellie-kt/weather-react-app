import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios";
import FormatDate from "./FormatDate"
import SunriseSunset from "./SunriseSunset";

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
  date: new Date(response.data.dt * 1000),
  sunrise: new Date(response.data.sys.sunrise *1000),
  sunset: new Date (response.data.sys.sunset * 1000),
})
}


if (weatherData.ready) {
  return (
    <div className="containter-2">
        <div className="row">
          <div className="col">
            <div className="city" id="#city">
              <h1>London</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="date">
                  <strong> <FormatDate date={weatherData.date}/> </strong>
                </div>
                <div className="time">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col - 1">
                <div className="sunrise">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-brightness-alt-high"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
                  </svg>{" "}
                  <span className="sunrise-time"> 
                   <SunriseSunset date={weatherData.sunrise}/>
                   </span>
                   </div>
                 <div className="sunset">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-brightness-alt-high-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                  </svg>{" "}
                  <span className="sunset-time">
                  <SunriseSunset date={weatherData.sunset}/>
                  </span>
                  </div>
                  
              </div>
            </div>
          </div>
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
            color="#555558"
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
    </div>
  );
} else {
const apiKey ="b318c179003d64fe70de737d79d84778"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return null;

return "Loading Weather App..."

}
}
