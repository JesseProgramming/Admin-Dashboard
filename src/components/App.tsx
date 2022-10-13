import React from 'react';
import SideNav from './SideNav'
import WidgetItem from './WidgetItem'
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import{Products, Sales, Orders, Alerts, Settings, Logout} from "./";
import '../styles/nav-style.scss';
import '../styles/main-style.scss';
import '../styles/light-dark-theme.scss';
import '../styles/mobile-display.scss';
import '../styles/table-styling.scss';

export default function App() {
    return(
        <div className="site-container">
            <Router>
                <SideNav/>
                <Routes>
                    <Route path="/" element={<WidgetItem/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/sales" element={<Sales/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/alerts" element={<Alerts/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </Router>
        </div>
    );
}