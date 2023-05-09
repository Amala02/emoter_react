import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from "./Home";



export default function App(){

 

  return (
    
    <>
    
    <BrowserRouter>
    
      <Routes>
        <Route exact path= "/" element ={<Home />}   />
       
      </Routes>
    </BrowserRouter>
    
    </>
    
  

 

);
};

