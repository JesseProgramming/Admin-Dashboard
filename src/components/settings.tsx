import React from 'react';
import ToggleSwitch from "./ToggleSwitch";

export default function settings(){
    return (
        <div className="settings">
            <p>Hello Admin!</p>
            <p>Site name: Cookie Empire</p>
            <p>Account created on: 8/17/2022</p>
            <p>email address: admin@cookieempire.com</p>
            <ToggleSwitch label="Notifications" />
            <p>Enable online purchases</p>
        </div>
    );
}