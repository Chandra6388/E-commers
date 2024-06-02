import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Admin from './Admin.Route'
import Client from "./Client.Route"
import Home from './Home.Route'
import Electronics from './Electronics.Route';
import TvAndAplication from './TvAndAplication.Route';
import Men from './Men.Route';
import Women from './Women.Route';
import Kids from './Kids.Route';
import Furniture from './Furniture.Route';
import Sports from './Sports.Route';

import Login from "../Layout/Auth/Login"
import Signup from '../Layout/Auth/Signup';
import ProductDetails from './ProductDetails.Route';
import Upload from '../Layout/Sheller/AddProduct'


 
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
      navigate("/home");
    }
    if (location.pathname === "/register") {
      navigate("/register");
      return 
    }
    if (location.pathname === "/login") {
      navigate("/login");
      return 
    }
     
    if (roles !== null) {
      if (roles === "SHELLER" && location.pathname === "/login") {
        navigate("/home");
        window.location.reload()
      } else if (roles === "USER" && location.pathname === "/login") {
        navigate("/home");
        window.location.reload()
      }
       
    } 
  }, [location.pathname])


  return <>
    <Routes>
      <Route path="/admin/*" element={(roles === "ADMIN") ? <Admin /> : <Home />} />
      <Route path="/client/*" element={(roles=== "USER") ? <Client/> : <Home />} />       
      <Route path="/home/*" element={<Home />} />
      <Route path='/electronics/*' element={<Electronics/>}/>
      <Route path='/appliances/*' element={<TvAndAplication/>}/>
      <Route path='/men/*' element={<Men/>}/>
      <Route path='/women/*' element={<Women/>}/>
      <Route path='/kids/*' element={<Kids/>}/>
      <Route path='/furniture/*' element={<Furniture/>}/>
      <Route path='/sports/*' element={<Sports/>}/>
      <Route path='/product/*' element={<ProductDetails/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/upload" element={<Upload />} />




    </Routes>


  </>
}

export default Routing