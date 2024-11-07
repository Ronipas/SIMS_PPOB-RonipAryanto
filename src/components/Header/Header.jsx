import React, { useEffect, useState } from "react";
import homeCSS from "./Header.module.css"


import FotoProfil from "./../../assets/Profile Photo.png"



const Header = () => {

    return (

    <>
  
      <div className={homeCSS.Wrapper}>
        <div className={homeCSS.GridHeader}>


        <div className={homeCSS.Profil}>
        <img src={FotoProfil} alt="" />
        <h4>Selamat Datang</h4>
        <h2>Kristanto Wibowo</h2>
        </div>

        <div className={homeCSS.Saldo}>

        <h3>Saldo Anda</h3>
        <h2>Rp.150.000.000</h2>
        

        <p>Lihat Saldo</p>
        </div>
        </div>

        </div>
    </>
    )
}
export default Header