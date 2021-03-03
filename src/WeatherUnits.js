import React, { useState } from "react";

export default function WeatherUnits (props){
    const [unit, setUnit] = useState ("celcius");

    function convertToFahrenheit (event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertToCelcius (event) {
        event.preventDefault();
        setUnit("celcius")
    }

    function fahrenheitTemp (){
        return (props.celcius *9) / 5 + 32;
    }

    if (unit === "celcius") {
    return (
        <div className="WeatherUnits">

             <h4 className="text-capitalize">
            {props.city} 
           
            <br />
            <strong> {Math.round(props.celcius)}°C </strong>
           </h4>
        <div className="units">
          °C |<a href="/" onClick={convertToFahrenheit}> °F </a>
        </div>
        </div>
    );
} else {
   
    return (  
    <div className="WeatherUnits">

             <h4 className="text-capitalize">
            {props.city} 
           
            <br />
            <strong> {Math.round(fahrenheitTemp())}°F </strong>
           </h4>
        <div className="units">
          <a href="/" onClick={convertToCelcius}>°C </a> | °F
        </div>
        </div>
    );
    }
}