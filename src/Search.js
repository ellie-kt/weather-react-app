import React from "react";
import "./Weather.css";

export default function Search() {
  return (
    <div className="Weather">
      <form id="search-bar">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              id="search-input"
              placeholder="Search a city..."
              className="form-control"
              autoComplete="off"
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
      </div>
      );
      }