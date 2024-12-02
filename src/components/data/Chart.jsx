//import * as React from 'react';
import React, { useEffect, useState } from "react";
import { GaugeComponent } from 'react-gauge-component';
import Box from '@mui/material/Box';
import axios from 'axios'

export default function Humidity() {
 
  const [Race,setRace]=useState([])
  const getRace = async()=>{
    await axios 
    .get('https://admin-773e7-default-rtdb.firebaseio.com/meteo.json').then(response=>{
      setRace(response.data);
      console.log('d',response)
    })
  }
  useEffect(()=>{
    getRace()
  },[])
  console.log('dataaaa',Race)
  
  return (
    <Box>
     
    <GaugeComponent
  type="semicircle"
  arc={{
    width: 0.2,
    padding: 0.005,
    cornerRadius: 1,
    // gradient: true,
    subArcs: [
      {
        limit: 15,
        color: '#EA4228',
        showTick: true,
        tooltip: {
          text: 'Too low humidity!'
        },
        onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
        onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
        onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
      },
      {
        limit: 17,
        color: '#F5CD19',
        showTick: true,
        tooltip: {
          text: 'Low humidity!'
        }
      },
      {
        limit: 28,
        color: '#5BE12C',
        showTick: true,
        tooltip: {
          text: 'OK humidity!'
        }
      },
      {
        limit: 30, color: '#F5CD19', showTick: true,
        tooltip: {
          text: 'High humidity!'
        }
      },
      {
        color: '#EA4228',
        tooltip: {
          text: 'Too high humidity!'
        }
      }
    ]
  }}
  pointer={{
    color: '#345243',
    length: 0.80,
    width: 15,
    //elastic: true,
   
  }}
  labels={{
    valueLabel: { formatTextValue: value => value + '%' },
    tickLabels: {
      type: 'outer',
      defaultTickValueConfig: { 
        formatTextValue: (value: any) => value + '%' ,
        style: {fontSize: 10}
    },
      ticks: [
        { value: 13 },
        { value: 22.5 },
        { value: 32 }
      ],
    }
  }}
  
  
  value={Race.humidity}
  minValue={-10}
  maxValue={80}
/>

</Box>
 
  );
}





