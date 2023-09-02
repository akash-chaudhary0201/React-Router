import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbarr from './components/Navbarr';
import Home from "./components/Home"
import About from "./components/About"
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter'
import Contact from './components/Contact';
import Sales from './components/Sales';
import Marketing from './components/Marketing';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          <Route path='/user/:name' element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path='/contact/' element={<Contact />}>
            <Route path='sales' element={<Sales />}></Route>
            <Route path='marketing' element={<Marketing />}></Route>
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
