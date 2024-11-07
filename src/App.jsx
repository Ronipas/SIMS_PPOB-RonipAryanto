import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import  {Home} from "./pages";
import TopUp from "./pages/TopUp";
import  Login  from "./pages/Login";
import  Akun  from "./pages/Akun";
import  Register from "./pages/Register";
import Transaction from "./pages/Transaction";


const App = () => {
  return (
  
     <>

      <Routes>
      <Route index  element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/topup" element={<TopUp />} />
      <Route path="/transaksi" element={<Transaction />} />
      <Route path="/akun" element={<Akun />} />
        

      </Routes>
     
      </>
   
    
    )
}

export default App;

