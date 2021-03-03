import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css"

import ForecastData from "./ForecastData"; 

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
}

if (loaded && props.city === forecast.city.name) {
   return (
       <div className="WeatherForecast row">
        <ForecastData data={forecast.list[0]} />
        <ForecastData data={forecast.list[1]} />
        <ForecastData data={forecast.list[2]} />
        <ForecastData data={forecast.list[3]} />
        <ForecastData data={forecast.list[4]} />
         </div>
   );
} else {
let apiKey = "b318c179003d64fe70de737d79d84778";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecastResponse);

return null;
}
}
