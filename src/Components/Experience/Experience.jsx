import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    
    
      
    <div className='experience' id='Experience'>
        
    <div className='achievement'>
        
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>C/C++
        </div>
        <span></span>
        <span></span>

</div>
    <div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>JAVA
        </div>
        <span></span>
        <span></span>

</div>
    <div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>Python
        </div>
        <span></span>
        <span></span>

</div>

<div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>JS
        </div>
        <span></span>
        <span></span>

</div>
<div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>React
        </div>
        <span></span>
        <span></span>

</div>
<div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>Html <br/>Css
        </div>
        <span></span>
        <span></span>

</div>
<div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>Mysql
        </div>
        <span></span>
        <span></span>

</div>
      
      
    </div>
  )
}

export default Experience
