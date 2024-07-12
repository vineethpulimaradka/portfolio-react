import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>copyright vineethpulimaradka@gmail.com</span>
        <div className="f-icons">
       <a href="https://www.instagram.com/vineeth_pulimaradka/"> <Insta color="white" size={"3rem"} /></a>
       
        <Facebook color="white" size={"3rem"} />
        <a href="https://github.com/vineethpulimaradka">

          <Gitub color="white" size={"3rem"} />
          </a>
         
         <a href="https://www.youtube.com/channel/UC46cVDTvMJTTHtH9CxuhMuA"><Youtube color="white" size={"3rem"} />
         </a> 
         
         <a href="https://www.linkedin.com/in/vineeth-pulimaradka-601206263/">
          <Linkedin color="white" size={"3rem"} />
          </a>
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;