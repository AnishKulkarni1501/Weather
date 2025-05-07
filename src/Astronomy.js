import React, { useState } from 'react';
import Time from "./Time.js";
import './Astronomy.css';
import SunAndMoon from './SunAndMoon.js';


function Astronomy()
{
    const [isOpen, setOpen] = useState(false);
    const [cityName, setCityName] = useState('');  
    const [inputValue, setInputValue] = useState(''); 
  
   
    function toggle() {
      setOpen(!isOpen);
    }
  
  
    function handleChange(event) {
      setInputValue(event.target.value);
    }
  
    function click() {
      setCityName(inputValue);  
    }
  
    return (
      <div className="Astronomy">
        <header id="header">
          <div className="menu-container">
            <input type="checkbox" id="checkbox" onClick={toggle} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <p className='txt'>Sun And Moon</p>
          <Time id="abc" />
        </header>
  
        <div id="side-menu" style={{ width: isOpen ? '250px' : '0'}}>
        <a href='/'>Weather</a><br/>
        <a href='/sunandmoon'>Sun and Moon</a>
        </div>
  
        <div>
          <input
            type="text"
            id="inpf"
            value={inputValue}  
            onChange={handleChange} 
          />
          <button onClick={click}>Go!</button>
        </div>
  
        <div id="sun">
         <SunAndMoon  city={cityName}/>
          
        </div>
      </div>
    );
}
export default Astronomy;