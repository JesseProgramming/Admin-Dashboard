import React from 'react';
import SideNav from './SideNav'
import WidgetItem from './WidgetItem'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from '../pages/about';

function App() {
    return(
        <div>
            <Router>
                <button to="/about" height= "100px" width = "100px">
                hello
                </button> 
                <Routes>
                    <Route path="/about" element = "{<About />}" />
                </Routes>
            </Router>
            <SideNav/>
            <WidgetItem/>
        </div>
    );
}
export default App;