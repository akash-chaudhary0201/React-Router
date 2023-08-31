import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbarr from './components/Navbarr';
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
