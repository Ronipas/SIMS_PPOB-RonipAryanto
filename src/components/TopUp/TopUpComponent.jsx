import React from "react";
import "./TopUp.css"


const TopUpComponent = () => {

  return <>

    <div className="Wrapper">
      <div className="header">
      <p>Slahkan masukkan</p>
      <h2>Nominal Top Up</h2>
      </div>
      <div className="Container">
   
          <div className="Grid1">
         <input className="TabelNominal" type="text" placeholder="Masukan nominal Top Up" />
         </div>
          
        
        
          <div className="NilaiNominal">
            <button>Rp. 10.000</button>
            <button>Rp. 20.000</button>
            <button>Rp. 50.000</button>
           
            <button>Rp. 100.000</button>
            <button>Rp. 250.000</button>
            <button>Rp. 500.000</button>
          </div>
        <div className="Grid2">
        <button className="BtnSubmit" type="submit" placeholder="Top Up" >Top Up</button> 
        </div>
     
    
      </div>
    </div>

    </>

};

export default TopUpComponent

