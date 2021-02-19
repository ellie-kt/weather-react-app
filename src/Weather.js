import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
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
                  <strong> 29/01/2021 </strong>
                </div>

                <span className="time">18:17</span>
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
                  <span className="sunrise-time">07:17</span>
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
                  <span className="sunset-time">16:11</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="chance">
              <h4>
                Clouds
                <br />
                19℃
              </h4>
            </div>

            <div className="units">
              <a href="/">℃ </a> |<a href="/">℉ </a>
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
      </div>
  );
}
