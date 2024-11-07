import React from "react";
import style from "./AkunProfil.module.css"
import fotoProfil from './../../assets/Profile Photo.png'




const AkunProfil = () => {


  return <>
  

    <div className={style.Container}>
      
        <div className={style.HeaderAkun}>
          <img src={fotoProfil} alt="" />
    
        <h3>Kristanto Wibowo</h3>
        </div>

        <form className={style.FormProfil}>

         
            <input type="email" className={style.email} name="email"  value="KristantoWibowo@gmail.com"/>
          
        
            
            <input type="text" className={style.user} name="firstName"  value="Kristanto" />
          
          
        
            <input type="text" className={style.user} name="lastName"  value="Wibowo" />
            
      
            <div className={style.Footer}>
            <button  type="submit" className={style.EditProfil}>Edit Profil</button>
 
           <br></br>
            <button  type="submit" className={style.Logout}>Logout</button>
            </div>
            </form>
            
          
    </div>

  
    </>

  
};

export default AkunProfil

