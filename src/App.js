import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import DashboardHomepage from './Component/DashboardHomepage';
import Projects from './Component/Projects';
import Roles from './Component/Roles';
import Skills from './Component/Skills';
import Staffs from './Component/Staffs';
import Settings from './Component/Settings';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Departments from './Component/Departments';




function App() {
  return (
    <div className="App">
      
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<DashboardHomepage/>} />
      <Route path="/departments" element={<Departments/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/Staffs" element={<Staffs/>} />
      <Route path="/Roles" element={<Roles/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
      
    </div>
  );
}

export default App;
