import React, { useContext }  from 'react'
import "./Portfolio.css"; 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/page1.png";
import Ecommerce from "../../img/weather.png";
import HOC from "../../img/weather1.png";
import MusicApp from "../../img/portfolio1.png";
import chatgpt from "../../img/chatbot.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className="portfolio-slider"
        
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" height={220} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" height={210} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" height={210}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" height={210} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chatgpt} alt="" height={210}  />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
