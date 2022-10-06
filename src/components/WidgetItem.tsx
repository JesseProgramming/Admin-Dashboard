import React from 'react';

// @ts-ignore
import IMG_ChocolateChipCookie from '../images/OS-Fundraising-ChocolateChipTop_whitespace.png';
// @ts-ignore
import IMG_SnickerDoodleCookie from '../images/9843710107-base-400x400.png';
// @ts-ignore
import IMG_SugarCookie from '../images/9843710122-base-400x400.png';
// @ts-ignore
import IMG_DarkChocolate from '../images/Dark-Chocolate-Cookie-PNG-Photos.png';
// @ts-ignore
import IMG_PeanutButter from '../images/Famous-Cookies-Peanut-Butter21-1.png';

import CookieBarChart from './cookiebarchart';
import YearlyLineChart from './yearlysaleslinechart';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

function WidgetItem() {
    return(
        <div className="widget-container">
            <div className="widget-row .large-rectangle">
                <div className="widget-item large-rectangle">
                    <YearlyLineChart/>
                </div>
            </div>

            <div className="widget-row">
                <div className="widget-item small-rectangle">
                    <svg className="img-large bubble-red" fill="white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-272h-448zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16zm336-208h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-128v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-26.5 0-48 21.5-48 48v48h448v-48c0-26.5-21.5-48-48-48z"/></svg>
                    <div className="widget-side-info">
                        <h3>Todays Revenue</h3>
                        <h4 className="text-green">+$3,724</h4>
                    </div>
                    <hr/>
                </div>

                <div className="widget-item small-rectangle">
                    <svg className="img-large bubble-purple" fill="white"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m0 252.118v-204.118c0-26.51 21.49-48 48-48h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882l-204.118 204.118c-18.745 18.745-49.137 18.745-67.882 0l-211.882-211.882a48 48 0 0 1 -14.059-33.941zm112-188.118c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"/></svg>
                    <div className="widget-side-info">
                        <h3>Todays Sales</h3>
                        <h4 className="text-green">+162</h4>
                    </div>
                    <hr/>
                </div>

                <div className="widget-item small-rectangle">
                    <svg className="img-large bubble-blue" fill="white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5l18.9-75.5h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3h-128c-77.4 0-141.9 55-156.8 128h-43.2c-14.8 0-26.5-13.5-23.5-28.8 2.2-11.4 12.9-19.2 24.5-19.2h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6-4.4 34.2 22.2 63.4 55.5 63.4h40c0 52.2 25.4 98.1 64 127.3v80.7c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3h48.7c8.8 0 16-7.2 16-16v-128c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-176-192h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"/></svg>
                    <div className="widget-side-info">
                        <h3>Lifetime Revenue</h3>
                        <h4 className="text-blue">$73,509</h4>
                    </div>
                    <hr/>
                </div>

                <div className="widget-item small-rectangle">
                    <svg className="img-large bubble-orange" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 3v15h3v-15zm3 2 4 13 3-1-4-13zm-7 0v13h3v-13zm-2 14v2h18v-2z"/></svg>

                    <div className="widget-side-info">
                        <h3>Lifetime Sales</h3>
                        <h4 className="text-blue">5,495</h4>
                    </div>
                    <hr/>
                </div>



            </div>
            <div className="widget-row">
                <div className="widget-item medium-square">
                    Most popular products today
                    <div className="top-item-container">
                        <h2>#1</h2>
                        <img src={IMG_ChocolateChipCookie}/>
                        <h3>Chocolate Chip</h3>
                        <h4>452</h4>
                    </div> 
                    <div className="top-item-container">
                        <h2>#2</h2>
                        <img src={IMG_SnickerDoodleCookie}/>
                        <h3>Snicker Doodle</h3>
                        <h4>321</h4>
                    </div> 
                    <div className="top-item-container">
                        <h2>#3</h2>
                        <img src={IMG_SugarCookie}/>
                        <h3>Sugar Cookie</h3>
                        <h4>235</h4>
                    </div> 
                </div>
                <div className="widget-item medium-square">
                    Most popular products this month
                    <div className="top-item-container">
                        <h2>#1</h2>
                        <img src={IMG_DarkChocolate}/>
                        <h3>Double Choc</h3>
                        <h4>6642</h4>
                    </div> 
                    <div className="top-item-container">
                        <h2>#2</h2>
                        <img src={IMG_PeanutButter}/>
                        <h3>Peanut Butter</h3>
                        <h4>5345</h4>
                    </div> 
                    <div className="top-item-container">
                        <h2>#3</h2>
                        <img src={IMG_ChocolateChipCookie}/>
                        <h3>Chocolate Chip</h3>
                        <h4>5141</h4>
                    </div> 
                    <div className="container"></div>
                </div>
                <div className="widget-item medium-square">
                    <p>Hourly cookie sales today</p>
                    <CookieBarChart/>
                </div>
            </div>
        </div>
    );
};
export default WidgetItem;