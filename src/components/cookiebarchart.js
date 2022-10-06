import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class CookieBarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
                datasets:[
                    {
                        label: 'Sales Per Hour',
                        data:[
                            23,
                            45,
                            56,
                            88,
                            77,
                            89,
                            97,
                            68,
                            79,
                            105,
                            66
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.7)',
                            'rgba(54,162,235,0.7)',
                            'rgba(255,206,86,0.7)',
                            'rgba(75,192,192,0.7)',
                            'rgba(153,102,255,0.7)',
                            'rgba(255,99,132,0.7)',
                            'rgba(54,162,235,0.7)',
                            'rgba(255,206,86,0.7)',
                            'rgba(75,192,192,0.7)',
                            'rgba(153,102,255,0.7)',
                            'rgba(255,99,132,0.7)',
                        ]
                    }
                ]
            }
        }
    }

    render(){
        return(
          <div className='chart'>
            <Bar
                data={this.state.chartData}
                options={{
                    /*maintainAspectRatio: false*/
                    plugins: {  // 'legend' now within object 'plugins {}'
                        legend: {
                          labels: {
                            color: "white",  // not 'fontColor:' anymore
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
                            color: "white", // not 'fontColor:' anymore
                            // fontSize: 18,
                            font: {
                              size: 18, // 'size' now within object 'font {}'
                            },
                            stepSize: 1,
                            beginAtZero: true,
                          },
                          grid: {
                            color: 'rgba(255,255,255,0.05)',
                          }
                        },
                        x: {  // not 'xAxes: [{' anymore (not an array anymore)
                          ticks: {
                            color: "white",  // not 'fontColor:' anymore
                            //fontSize: 14,
                            font: {
                              size: 14 // 'size' now within object 'font {}'
                            },
                            stepSize: 1,
                            beginAtZero: true
                          },
                          grid: {
                            color: 'rgba(255,255,255,0.05)',
                          }
                        }
                      }
                }}
            />
          </div>
        )
    }
}

export default CookieBarChart;