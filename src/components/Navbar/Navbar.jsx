import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav>
      <Link to="/home" className="title">
        <img src={logo} alt="" />
        <h3>SIMS PPOB</h3>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/topup">Top Up</NavLink>
        </li>
        <li>
          <NavLink to="/transaksi">Transaksi</NavLink>
        </li>
        <li>
          <NavLink to="/akun">Akun</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar
