import React from 'react';
import ToggleSwitch from "./ToggleSwitch";

export default function settings(){
    return (
        <div className="settings">
            <p>Hello Admin!</p>
            <hr></hr>
            <form>
                <div className="settings-container-item">
                    <label >Site Name: </label>
                    <input type="text" id="lname" name="lname" disabled placeholder="Cookie Empire"/><br></br>
                    <div className="white-space"></div>
                </div>
                <hr></hr>
                <div className="settings-container-item">
                    <label >Email Address: </label>
                    <input type="text" id="fname" name="fname" disabled placeholder="admin@cookieempire.com"/><br></br>
                    <div className="white-space"></div>
                </div>
                <hr></hr>
                <div className="settings-container-item">
                    <label >Account Creation Date: </label>
                    <label >8/17/2021</label><br></br>
                    <div className="white-space"></div>
                </div>
                <hr></hr>
                <div className="settings-container-item">
                    <label >Light Theme: </label>
                    <ToggleSwitch label="Notifications" isTheme = {true}/>
                    <div className="white-space"></div>
                </div>
                <hr></hr>
                <div className="settings-container-item">
                    <label >Online purchases: </label>
                    <ToggleSwitch label="Notifications" isTheme = {false}/>
                    <div className="white-space"></div>
                </div>
            </form>
        </div>
    );
}