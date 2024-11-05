import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home, Akun } from "./pages";
import TopUp from "./pages/TopUp";
import  Login  from "./pages/Login";
import { Register } from "./pages/Register";
import Transaction from "./pages/Transaction";


function App() {
  return (
  
     <>
     
      <Navbar />
      <Routes>
      <Route path="/" index  element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
         <Route path="/home" element={<Home />} />
        <Route path="/Top-Up" element={<TopUp />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Akun" element={<Akun />} />
        
        
       
      </Routes>
     
      </>
   
    
    )
}

export default App;

