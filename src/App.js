import Footer from "./Footer";
import Search from './Search';
import './App.css';
import "./Footer.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Footer />
      </div>
    </div>
  );
}