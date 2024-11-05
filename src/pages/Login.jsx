import React, { useEffect, useState, useRef } from "react";
import "./css/Login.css"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import bgLogin from "../assets/Illustrasi Login.png"
import { Home } from "./Home";
import { Navigate } from "react-router-dom";




const Login = () => {

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState (false);
  const [password, setPassword] = useState ('');


  //Fungsi Melihat atau Menutup Password
  const [visible1, setVisible1] = useState ("true");

  useEffect(() => {
    emailRef.current.focus()
  }, []);

  useEffect(() => {
    setErrMsg ('')
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log (email, password);
    setEmail('');
    setPassword('');
    setSuccess(true);
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
        
            <input type="email" className="email" ref={emailRef} value={email} name="email" id="email" placeholder="Masukkan email anda" onChange={(e) => setEmail(e.target.value)} required/>
            
            <div className="passwordField">
            <div className="eye" onClick={() => setVisible1 (!visible1)} > {visible1 ? <EyeInvisibleOutlined/> : <EyeOutlined />} </div>
            <input type={visible1 ? "password" : "text" } value={password}  className="password" name="" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            </div>

          
         

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
export default Login
