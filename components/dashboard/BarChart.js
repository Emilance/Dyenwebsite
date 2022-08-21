import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as chartJS} from  "chart.js/auto"

const state = {
    labels: [ "book", "pencil", "eraser", "crayon", "products"],
    datasets: [
        {

            label:"RAinfall",
            backgroundColor :"rgb(5, 50, 90)",
            borderColor:"rgb(121, 120, 120)",
            borderWidth: 2,
            data : [20, 35, 83, 25, 10]
       },
       {
        label:"RAinfall",
        backgroundColor :"rgb(121, 120, 120)",
        borderColor:"rgb(121, 120, 120)",
        borderWidth: 2,
        data : [20, 3, 36, 25, 10]
   }
    ]
}


const BarChart = () => {
    return(
        <div  className={{height: "100%"}}>
            <Bar
              data={state}
              options ={{
                  title:{
                      display: true,
                      text:"average Rainfall",
                      fontSize :5
                  },
                  legend:{
                      display:true,
                      position:"right"
                  }
              }}
              />
        </div>
    )
}


export default BarChart