import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import Topnav from './component/Topnav'
import Home from './component/Home'
import About from './component/About'
import Gallery from './component/Gallery'


class App extends Component{
render() {
  return (
    <Router>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />

      </Routes>

    </Router>
   
  );
}
}

export default App;
