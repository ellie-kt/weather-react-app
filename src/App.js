import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";
import "./Footer.css";
import "./Weather.css"
import Search from './Search';
import City from './City'



export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Search />
      <City />
      <Weather />
      <Footer />
    </div>
    </div>
  );
}