
import React from "react";
import "./ToggleSwitch.css";
  

const handleChange = event => {
    let pizza = document.getElementById("body");
    console.log(pizza.className);
    pizza.className= pizza.className === 'theme-dark' ? 'theme-light' : 'theme-dark';
      
  };

const ToggleSwitch = ({ label }) => {
    
  return (
    <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={handleChange}></input>
        <label for="vehicle1">Enable light theme</label><br></br>
    </div>
  );
};
  
export default ToggleSwitch;