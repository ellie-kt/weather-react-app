import Weather from "./Weather";
import Footer from "./Footer";
import Search from './Search';
import City from './City'
import './App.css';
import "./Footer.css";
import "./Weather.css";





export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="row">
          <div className="col">
            <City />
          </div>
          <div className="col">
            <Weather />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}