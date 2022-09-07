import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './MAIN/Home';
import Info from './MAIN/Info';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Info/>} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
