import React, { useEffect } from "react";
import Header from './../components/Header/Header'
import Navbar from './../components/Navbar/Navbar'
import TopUpComponent from "../components/TopUp/TopUpComponent";



const TopUp = () => {


  return <>
  

    <div className="HeaderComponents">
    <Navbar/>

    <Header/>

    <TopUpComponent/>

    </div>

 
    </>

};

export default TopUp

