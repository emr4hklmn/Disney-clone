import React from 'react'
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

function App() {
    return ( 
        <div className = "App" >
           
                    <Header / >
                    <Home />
              
        </div >
    );
}

export default App;