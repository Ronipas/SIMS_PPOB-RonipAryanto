import React, { useEffect, useState } from "react";
import passwordIcon from "./../assets/password.png"
import emailIcon from "./../assets/email.png"
import style from "./css/Register.css"
import "./css/Register.css"
import eye from "../assets/eye.png"
import bgLogin from "../assets/Illustrasi Login.png"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";


import { Form } from "react-router-dom";
import { getRegister } from "../services/Registrasi.service";

  

export const Register = () => {

    //Fungsi Required pada Form
  const [formData, setFormData] = useState ({   
    email :'',
    firstName:'',
    lastName: '',
    password:'',
    confirmPassword:''
    
  })

  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
        ...formData, [name] : value
    })
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    const validationErrors = {}

    if(!formData.firstName.trim()) {
        validationErrors.firstName = "Masukkan nama depan anda"
    }
    if(!formData.lastName.trim()) {
        validationErrors.lastName = "Masukkan nama belakang anda"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "Masukkan email anda"
    }
    if(!formData.password.trim()) {
        validationErrors.password = "Masukkan password anda"
    }else if (formData.password.length < 8) {
        validationErrors.password = "Password minimal 8 Karakter"
    }
    if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "Password anda tidak sama"
    }

    setErrors (validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Registrasi Berhasil")
    }
  }


const [password, setPassword] = useState ("");
const [visible1, setVisible1] = useState ("true");
const [confirmPassword, setConfirmPassword] = useState ("");
const [visible2, setVisible2] = useState ("false");


useEffect (() => {
    getRegister();
}, [])
  return  <>

    <div className="Wrapper">
      <div className="ContainerForm">
       
        <div className="Header">
      
            <div className="judul">SIMS PPOB</div>
            <h3>Lengkapi data untuk membuat akun</h3>
        </div>

        
           
            <form className="inputs" onSubmit={handleSubmit} >
            
                <input type="email" className="email" name="email" id="" placeholder="Email" onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span>}

                <input type="text" className="user" name="firstName" id="firstName" placeholder="Nama depan" onChange={handleChange} />
                {errors.firstName && <span>{errors.firstName}</span>}

                <input type="text" className="user" name="lastName" id="lastName" placeholder="Nama belakang" onChange={handleChange} />
                {errors.lastName && <span>{errors.lastName}</span>}

                <div className="passwordField">
                <div className="eye" onClick={() => setVisible1 (!visible1)} > {visible1 ? <EyeInvisibleOutlined/>:<EyeOutlined />}  </div>
                <input type={visible1 ? "password" : "text" } value={password}  className="password" name="password" id="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value)}  />
                </div>
                {errors.password && <span>{errors.password}</span>} 

                <div className="passwordField">
                <div className="eye" onClick={() => setVisible2(!visible2)} > {visible2 ? <EyeInvisibleOutlined/>:<EyeOutlined />} </div>
                <input type={visible2 ? "password" : "text"} className="password" value={confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="Konfirmasi password" onChange={(e) => setConfirmPassword(e.target.value)}  />
                
                </div>
                {errors.password && <span>{errors.password}</span>}

                <div className="Footer">
                <button type="submit" className="submit">Registrasi</button>
                </div>
                </form>
                <div className="text-registrasi">Sudah punya akun? Login <a href="/">di sini</a></div>
     </div> 

            <div className="gambar">
            <img src={bgLogin} alt="" />
            </div>
            
    
</div>
</>


};
