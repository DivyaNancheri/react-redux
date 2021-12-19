import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
    Home,
    About,
    Events,
    Contact,
    Services,
    CompanyHistory,
    Location,
    Error
  } from "./pages";

function RouteController() {
  return (
    <div>
      <Routes>  // multiple home 
        <Route path="/" element={<Home />} /> login 
        
        <Route path="/events" element={<Events />} /> // forgot passowrd
        <Route path="/contact" element={<Contact />} /> // signup
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default RouteController;
