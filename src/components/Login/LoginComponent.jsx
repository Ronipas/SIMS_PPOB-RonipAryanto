import React, { useEffect, useState, useRef } from "react";
import "./Login.css"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import bgLogin from "./../../assets/Illustrasi Login.png"
import { Navigate } from "react-router-dom";




const LoginComponent = () => {

//Fungsi Required pada Form
const [formData, setFormData] = useState ({   
  email :'',
  password:''
              
})
              
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData ({
    ...formData, [name] : value
})}

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState (false);
  const [password, setPassword] = useState ('');


  //Fungsi Melihat atau Menutup Password

  const [visible1, setVisible1] = useState ("true");

//Submit Data Login dan Validasi

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {}

  if(!formData.email.trim()) {
      validationErrors.email = "Masukkan email "
  }
  if(!formData.password.trim()) {
      validationErrors.password = "Masukkan password "
  }else if (formData.password.length <= 8) {
      validationErrors.password = "Password minimal 8 Karakter"
  }
  setErrors (validationErrors)

  
     if(Object.keys(validationErrors).length === 0) {
    alert("Login Berhasil")
    }

    console.log (email, password);
    setEmail('');
    setPassword('');
    setSuccess(Object.keys(validationErrors).length === 0);
  }


  
  return (
   <>
        { success ? (
            <Navigate to="/home" />
            ) : (

    <div className="Wrapper">
      <div className="ContainerForm">
       
        <div className="Header">
      
            <div className="judul">SIMS PPOB</div>
            <h3>Masuk atau buat akun untuk memulai</h3>
          </div>

            <section > 
               <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

           <form className="inputs"  onSubmit={handleSubmit}> 
            
           <div className="passwordField" onChange={handleChange}>
            <input type="email" className="email" ref={emailRef} value={email} name="email" id="email" placeholder="Masukkan email anda" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && <div className="notifEror">{errors.email}</div>}


            <div className="passwordField" onChange={handleChange}>
            <div className="eye" onClick={() => setVisible1 (!visible1)} > {visible1 ? <EyeInvisibleOutlined/> : <EyeOutlined />} </div>
            <input type={visible1 ? "password" : "text" } value={password}  className="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errors.password && <div className="notifEror">{errors.password}</div>} 


           <div className="Footer">
          <button className="submit">Masuk</button> </div>
          </form>
          <div className="Footer">
          <div className="text-registrasi">belum punya akun? registrasi <a href="/register">di sini</a></div>
          </div>
          </section>  
   
     </div>
    <div className="gambar">
      <img src={bgLogin} alt="" />
    </div>
     </div>
    
  )};  
    </>
  )
};
export default LoginComponent
