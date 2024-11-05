import React, { useEffect } from "react";
import Header from './../components/Header/Header'
import style from "./css/Transaction.module.css"



const Transaction = () => {


  return <>
    <div className="HeaderComponents">
   
    <Header/>
    </div>

    <div className={style.Wrapper}>
      <div className={style.Header}>
      <div className={style.Header}>Semua Transaksi</div>
      </div>
      <div className={style.Container}>
          <div className={style.TransaksiTopUp}>
            <div className={style.Saldo}>+ 10.000</div>
            <div className={style.Keterangan}>Top Up</div>
            <div className={style.Tanggal}> 17 Agustus 2024</div>
          </div>
          <div className={style.TransaksiBayar}>
            <div className={style.Bayar}>- 15.000</div>
            <div className={style.Keterangan}>Prabayar</div>
            <div className={style.Tanggal}> 17 Agustus 2024</div>
          </div>
          <div className={style.TransaksiBayar}>
            <div className={style.Bayar}>- 150.000</div>
            <div className={style.Keterangan}>Prabayar</div>
            <div className={style.Tanggal}> 17 Agustus 2024</div>
          </div>
          <div className={style.TransaksiTopUp}>
            <div className={style.Saldo}>+ 100.000</div>
            <div className={style.Keterangan}>Top Up</div>
            <div className={style.Tanggal}> 17 Agustus 2024</div>
          </div>
          <div className={style.TransaksiTopUp}>
            <div className={style.Saldo}>+ 100.000</div>
            <div className={style.Keterangan}>Top Up</div>
            <div className={style.Tanggal}> 17 Agustus 2024</div>
          </div>
      </div>
    </div>

  
    </>



  
};

export default Transaction

