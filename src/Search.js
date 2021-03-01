import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather'


export default function Search(props) {
  const [weatherData, setWeatherdata] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity);

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
  city: response.data.name,
  icon: response.data.weather[0].icon,
});
}

function search(){
const apiKey ="b318c179003d64fe70de737d79d84778"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}


function handleSubmit(event){
  event.preventDefault ();
  search();
}

function handleCityChange (event){
setCity(event.target.value);

}


if (weatherData.ready) {
  return (
    <div className="Weather">
      <form id="search-bar" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              id="search-input"
              placeholder="Search a city..."
              className="form-control"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              id="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              id="current-location"
              value="📍"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
       <Weather data={weatherData} />
      </div>
     
      );
      }  else {
search();
return "Loading Weather App...";

}
    }