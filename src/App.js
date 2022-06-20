import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from './components/Detail';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
           <Router> 
           <Header />
                   <Routes>
                   <Route path="/" element={<Home / >}/>
                   <Route path="/" element={<Detail/ >}/>
                   </Routes> 
           </Router>
        </div >
    );
}

export default App;