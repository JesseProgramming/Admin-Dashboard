import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class YearlyLineChart extends Component{
  
    constructor(props){
        super(props);
        
        this.state = {
            yearData:{
                labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets:[
                    {
                        label: 'Sales By Month',
                        data:[
                            553,
                            785,
                            961,
                            1342,
                            1134,
                            1457,
                            1952,
                            1752,
                            2257,
                            2145,
                            2317,
                            2464
                        ],
                        
                        backgroundColor:[
                            'rgba(54,162,235,0.4)',
                        ],
                    }
                ]
            }
        }
    }
    
    render(){
      let themeColor = document.getElementById("body");
      let graphThemeColor = (themeColor.className === 'theme-dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)');
      let graphTextColor = (themeColor.className === 'theme-dark' ? 'white' : 'black');
        return(
            <Line
                data={this.state.yearData}
                options={{
                    maintainAspectRatio: false,
                    fill:true,
                    fillColor : "yellow",
                    strokeColor : "black",
                    tension: 0.45,
                    /*maintainAspectRatio: false*/
                    plugins: {  // 'legend' now within object 'plugins {}'
                        legend: {
                          labels: {
                            color: graphTextColor,  // not 'fontColor:' anymore
                            // fontSize: 18  // not 'fontSize:' anymore
                            font: {
                              size: 18 // 'size' now within object 'font {}'
                            }
                          }
                        }
                      },
                      scales: {
                        y: {  // not 'yAxes: [{' anymore (not an array anymore)
                          ticks: {
                            color: graphTextColor, // not 'fontColor:' anymore
                            // fontSize: 18,
                            font: {
                              size: 18, // 'size' now within object 'font {}'
                            },
                            stepSize: 1,
                            beginAtZero: true
                          },
                          beginAtZero: true,
                          grid: {
                            color: graphThemeColor,
                          }
                          
                        },
                        x: {  // not 'xAxes: [{' anymore (not an array anymore)
                          ticks: {
                            color: graphTextColor,  // not 'fontColor:' anymore
                            //fontSize: 14,
                            font: {
                              size: 14 // 'size' now within object 'font {}'
                            },
                            stepSize: 1,
                            beginAtZero: true
                          },
                          grid: {
                            color: graphThemeColor,
                          }
                        }
                      }
                }}
            />
        )
    }
}

export default YearlyLineChart;