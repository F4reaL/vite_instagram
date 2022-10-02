import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {publicRoutes} from '../routes'
import { useState } from "react";

const Loading = <h1>Loadinggg ....</h1>

function App() {
  const [isLoading, setIsloading] = useState(false)
  const callAPI = ()=>{
    setIsloading(true)

    fetch("https://reqres.in/api/user?page=0")
    .then((res) => res.json())
    .then((res)=>{
      setTimeout(()=>{
        console.log(res.data)
        setIsloading(false)
      },2000)
    })
    .catch(()=> setIsloading(false))
  }
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       {publicRoutes.map((route,i)=>{
    //         const Element = route.component
    //         return <Route key={i} path={route.path} element={<Element/>}/>
    //       })}
    //     </Routes>
    //   </div>
    // </Router>
    <>
      {isLoading ? Loading: <h2>Data</h2>}
      <button onClick={callAPI} disabled={isLoading}>Call API</button>
    </>
  );
}

export default App;

