import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import { useCookies } from 'react-cookie';

function State() {


    const [cookies, setCookie] = useCookies('');
    const [count,setCount] = useState({});
  useEffect(() => {
    axios.get('http://localhost:4000/api/personne/count',{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    .then(res=>{
       setCount(res.data.count);
    })
  },[])
const state = {
    options: {
        chart: {
            id: "basic-bar"
        },
        colors: ["#ff4f5b"],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Dose 1","Dose 2","Dose 3"]
        }, 
        stroke: {
            curve: 'smooth'
        }
        
    },
    series: [
        {
            name: "totale des personne prandre la dose",
            data: [count.dose1,count.dose2,count.dose3]
        }
    ]
};






return (
    <div className="row">
        <div className="mb-4 mb-lg-0 col-lg-7">
            <div className="h-100 card">
                <div className="card-header">
                    <h4 class="card-heading">Statistique des perssone prande les vaccin</h4>
                </div>
                <div className="card-body">
                    <h4 className="header-title mb-3">Prime par dose :</h4>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="90%"
                    />
                
                </div>
            </div>
        </div>


    </div> 
)

}
export default State;