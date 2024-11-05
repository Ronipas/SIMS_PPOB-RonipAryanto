import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import homeCSS from "./css/Home.module.css"


import FotoProfil from "./../assets/Profile Photo.png"
import pbb from "./../assets/pbb.png"
import listrik from "./../assets/listrik.png"
import pulsa from "./../assets/pulsa.png"
import pdam from "./../assets/pdam.png"
import pgn from "./../assets/pgn.png"
import tv from "./../assets/televisi.png"
import musik from "./../assets/musik.png"
import voucherGame from "./../assets/game.png"
import voucherMakanan from "./../assets/voucher makanan.png"
import kurban from "./../assets/kurban.png"
import zakat from "./../assets/zakat.png"
import paket from "./../assets/paket data.png"
import GetBanner from "../services/Banner.service"
import Header from "../components/Header/Header";



export const Home = () => {

  const [banner, setBanner] = useState ([]);

  useEffect (() => {
    GetBanner((data) => {
      setBanner(data);
    })
  }, []);
  

  return  <>

    <div className={homeCSS.Wrapper}>

      {/* <div className={homeCSS.GridHeader}>
       
          <div className={homeCSS.Profil}>
            <img src={FotoProfil} alt="" />
            <h4>Selamat Datang</h4>
            <h2>Kristanto Wibowo</h2>
          </div>

          <div className={homeCSS.Saldo}>
          
            <h3>Saldo Anda</h3>
            <h2>Rp.150.000.000</h2>

            <p>Lihat Saldo</p>
          </div>
      </div> */}
      
    <div className="HeaderComponents">
   
   <Header/>
   </div>


      <div className={homeCSS.GridContent}>
          <div><img src={pbb} alt=""/><p> PBB</p></div>
          <div><img src={listrik} alt=""/><p>Listrik</p> </div>
          <div><img src={pulsa} alt=""/><p>Pulsa</p></div>
          <div><img src={pdam} alt=""/><p>PDAM</p></div>
          <div><img src={pgn} alt=""/><p>PGN</p></div>
          <div><img src={tv} alt=""/><p>TV Langganan</p></div>
          <div><img src={musik} alt=""/><p>Musik</p></div>
          <div><img src={voucherGame} alt=""/><p>Voucher Game</p></div>
          <div><img src={voucherMakanan} alt=""/><p>Voucher Makanan</p></div>
          <div><img src={kurban} alt=""/><p>Kurban</p></div>
          <div><img src={zakat} alt=""/><p>Zakat</p></div>
          <div><img src={paket} alt=""/><p>Paket Data</p></div>
      </div>

      <div className={homeCSS.SlideContainer}>

        <h4>Temukan Promo Menarik</h4>
      

          <Swiper 
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={
                        {
                            0:{
                                slidesPerView:1
                            },
                            680:{
                                slidesPerView:2
                            },

                            956: {
                              slidesPerView:3
                            },
                            1256: {
                                slidesPerView:4
                            }
                        }
                    }

                    loop = {true}
                    autoplay = {{
                        delay : 2200,
                    }}

                    modules={[Autoplay]}
                >
                
                    <SwiperSlide>
                            <div className={`${homeCSS.Swiper} ${homeCSS.Slide1}`}>
                            
                            </div>
                    </SwiperSlide>
               
                    
                    <SwiperSlide>              
                    <div className={`${homeCSS.Swiper} ${homeCSS.Slide2}`}>
                               </div>
                    </SwiperSlide>
            
                    <SwiperSlide>
                    <div className={`${homeCSS.Swiper} ${homeCSS.Slide3}`}>                   
                               </div>       
                    </SwiperSlide>

                    <SwiperSlide>          
                    <div className={`${homeCSS.Swiper} ${homeCSS.Slide4}`}>                            
                               </div>        
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className={`${homeCSS.Swiper} ${homeCSS.Slide5}`}>                         
                               </div>            
                    </SwiperSlide>
                 
                </Swiper>
        </div>

    </div>





  </>;
};
