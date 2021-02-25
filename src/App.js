import Search from './Search';
import Footer from "./Footer";
import './App.css';
import "./Footer.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="London"/>
        <Footer />
      </div>
    </div>
  );
}