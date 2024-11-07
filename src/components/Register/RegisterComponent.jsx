import  React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Register.css"

import bgLogin from "./../../assets/Illustrasi Login.png"

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

  

function RegisterComponent  () {

const [email, setEmail] = useState ("");
const [firstName, setFirstName] = useState ("");
const [lastName, setLastName] = useState ("");
const [password, setPassword] = useState ("");
const [confirmPassword, setConfirmPassword] = useState ("");
const [visible1, setVisible1] = useState ("true");
const [visible2, setVisible2] = useState ("false");
const navigateTo = useNavigate();

//Fungsi Register API

// async function signUp  () 
// {

//   //Fetch data API Register

//  let item = {email, firstName, lastName, password,confirmPassword}
//  console.warn (item)

//  let result = await fetch("https://take-home-test-api.nutech-integrasi.com/registration" , {
//    method : 'POST',
//    body : JSON.stringify(item),
//    headers: {
//      "Content-Type" : 'application/json',
//      "Accept" : 'application/json'
//    }
//  })

//  result = await result.json()
//  localStorage.setItem("user-info", JSON.stringify(result))
//  navigateTo('/home')
// }


  //Fungsi Required pada Form dengan Validasi
  
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

    if(!formData.email.trim()) {
      validationErrors.email = "Masukkan email "
    }

    if(!formData.firstName.trim()) {
        validationErrors.firstName = "Masukkan nama depan "
    }
    if(!formData.lastName.trim()) {
        validationErrors.lastName = "Masukkan nama belakang "
    }

    if(!formData.password.trim()) {
        validationErrors.password = "Masukkan password "
    }else if (formData.password.length <= 8) {
        validationErrors.password = "Password minimal 8 Karakter"
    }
    if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "Password tidak sama"
    }

    setErrors (validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Registrasi Berhasil")
    }
  }







  return  <>

    <div className="Wrapper">
      <div className="ContainerForm">
       
        <div className="Header">
      
            <div className="judul">SIMS PPOB</div>
            <h3>Lengkapi data untuk membuat akun</h3>
        </div>

        
           
            <form className="inputs" onSubmit={handleSubmit} >

                <div className="passwordField"  onChange={handleChange}>
                <input type="email" className="email" name="email" id="email" placeholder="Email" onChange={ (e) => setEmail(e.target.value)} />
                </div>
                {errors.email && <div className="notifEror">{errors.email}</div>}
                <div className="passwordField"  onChange={handleChange}>
                <input type="text" className="user" name="firstName" id="firstName" placeholder="Nama depan" onChange={ (e) => setFirstName(e.target.value)} />
                </div>
                {errors.firstName && <div className="notifEror">{errors.firstName}</div>}
                <div className="passwordField"  onChange={handleChange}>
                <input type="text" className="user" name="lastName" id="lastName" placeholder="Nama belakang" onChange={ (e) => setLastName(e.target.value)} />
                </div>
                {errors.lastName && <div className="notifEror">{errors.lastName}</div>}
                <div className="passwordField"  onChange={handleChange}>
                <div className="eye" onClick={() => setVisible1 (!visible1)} > {visible1 ? <EyeInvisibleOutlined/>:<EyeOutlined />}  </div>
                <input type={visible1 ? "password" : "text" } value={password}  className="password" name="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value)}  />
                </div>
                {errors.password && <div className="notifEror">{errors.password}</div>} 

                <div className="passwordField" onChange={handleChange}>
                <div className="eye" onClick={() => setVisible2(!visible2)} > {visible2 ? <EyeInvisibleOutlined/>:<EyeOutlined />} </div>
                <input type={visible2 ? "password" : "text"} className="password" value={confirmPassword} name="confirmPassword"  placeholder="Konfirmasi password" onChange={ (e) => setConfirmPassword(e.target.value)} />
                </div>
                {errors.confirmPassword && <div className="notifEror">{errors.confirmPassword}</div>}

                <div className="Footer">
                <button  type="submit" className="submit">Registrasi</button>
                {/* <button onClick={signUp} type="submit" className="submit">Registrasi</button> */}
                </div>
                </form>
                <div className="text-registrasi">Sudah punya akun? Login <a href="/login">di sini</a></div>
     </div> 

            <div className="gambar">
            <img src={bgLogin} alt="" />
            </div>
            
    
</div>


</>


};

export default RegisterComponent