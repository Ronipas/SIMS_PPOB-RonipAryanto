import React, { useEffect, useState } from "react";


import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import HomeComponent from "../components/Home/HomeComponent";



export const Home = () => {

  return  <>
   
    <div className="Components">
   <Navbar/>
   <Header/>

   <HomeComponent/>
   </div>


  </>;
};

