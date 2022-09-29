import React from 'react';
import SideNav from './SideNav'
import WidgetItem from './WidgetItem'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Dashboard from '../pages/dashboard';
import About from './about';
import Contact from './contact';

function App() {
    return(
        <div>
            <Router>
            <SideNav/>
                <Routes>
                    <Route path="/" element={<WidgetItem />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;