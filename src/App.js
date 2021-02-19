import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";
import "./Footer.css";
import Search from './Search';

export default function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Footer />
    </div>
  );
}