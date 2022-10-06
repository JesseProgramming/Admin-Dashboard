import React from 'react';
import '../styles/nav-style.scss';
import NavButtons from './NavButtons'
// @ts-ignore
import cookieBranding from '../images/cookie-pb.png'

function SideNav() {
    var date = new Date();
    const formattedDate = date.toDateString();
    return(
        <div className="sidebar">
            <div className="branding">
                <h1>Dashboard</h1>
                <h2>Cookie Empire</h2>
                <img id="brand-icon" src={cookieBranding}></img>
            </div>
            <div className="timestamp">
                <p><span id="date-time">{formattedDate}</span></p>
            </div>
            <NavButtons/>
        </div>
    );
};
export default SideNav;