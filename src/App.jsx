import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DetailView from "./components/DetailView";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:id" element={<DetailView />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;