import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate } from "react-router-dom";
import Admin from './Admin.Route'
import Client from "./Client.Route"

import Login from "../Layout/Auth/Login"
import Signup from '../Layout/Auth/Signup';
import Home from '../Layout/Home/Header'

 
const Routing = () => {
  const location = useLocation();
  const navigate = useNavigate()
const roles= null

  useEffect(() => {
    if (location.pathname === "/forget") {
      navigate("/forget");
      return
    }
    if(location.pathname==='/home'){
        navigate('/home');
        return 
    }

    if (location.pathname === "/") {
      navigate("/login");
    }
    if (location.pathname === "/signup") {
      navigate("/signup");
      return 
    }

 

    if (roles !== null) {
      if (roles === "ADMIN" && location.pathname === "/login") {
        navigate("/admin/dashboard");
        window.location.reload()
      } else if (roles === "USER" && location.pathname === "/login") {
        navigate("/client/dashboard");
        window.location.reload()
      }
      else if (roles === "SUBADMIN" && location.pathname === "/login") {
        navigate("/subadmin/clients");
        window.location.reload()
      }
      else if (roles === "SUPERADMIN" && location.pathname === "/login") {
        navigate("/super/dashboard");
        window.location.reload()
      }
    } 
  }, [location.pathname])


  return <>
    <Routes>
      <Route path="/admin/*" element={(roles === "ADMIN") ? <Admin /> : <Login />} />
      <Route path="/client/*" element={ <Client />} />       
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />


    </Routes>


  </>
}

export default Routing