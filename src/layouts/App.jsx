import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {publicRoutes} from '../routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,i)=>{
            const Element = route.component
            return <Route key={i} path={route.path} element={<Element/>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
