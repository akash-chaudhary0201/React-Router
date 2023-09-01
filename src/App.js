import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbarr from './components/Navbarr';
import Home from "./components/Home"
import About from "./components/About"
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
