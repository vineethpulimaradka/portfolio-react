import React, { useContext }  from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './VINEETH P L_DESTINATION.pdf';
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'
const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>Creating stunning visuals for your brand.
            
            Empowering businesses with data insights.
        </span>
        <a href={Resume} download>
         <button className='button s-button'>Download CV</button>   
        </a>
        
        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>

      </div>
      

      {/*Right side */}
      <div className="cards">
        
        <motion.div 
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}

        >
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail ={"Figma, Sketch, Photoshop, Adobe,Davinci,PremierPro"}
            />
        </motion.div>
        {/*second card */}
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        >

            <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Java,python,C/C++,Html, Css, JavaScript, React"}
            />
        </motion.div>
        {/*third card */}
        <motion.div 
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        
        >
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Designing with empathy, coding with precision."}


            />

  </motion.div>
  <div className="blur s-blur2" style={{
    background: "var(--purple)"
  }}></div>


      </div>
      

    </div>
  )
}

export default Services
