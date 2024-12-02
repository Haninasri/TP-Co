//import * as React from 'react';
import React, { useEffect, useState } from "react";
import { GaugeComponent } from 'react-gauge-component';
import Box from '@mui/material/Box';

import axios from 'axios'

export default function Gauge() {
 
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
          text: 'Too low temperature!'
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
          text: 'Low temperature!'
        }
      },
      {
        limit: 28,
        color: '#5BE12C',
        showTick: true,
        tooltip: {
          text: 'OK temperature!'
        }
      },
      {
        limit: 30, color: '#F5CD19', showTick: true,
        tooltip: {
          text: 'High temperature!'
        }
      },
      {
        color: '#EA4228',
        tooltip: {
          text: 'Too high temperature!'
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
    valueLabel: { formatTextValue: value => value + 'ºC' },
    tickLabels: {
      type: 'outer',
      defaultTickValueConfig: { 
        formatTextValue: (value: any) => value + 'ºC' ,
        style: {fontSize: 10}
    },
      ticks: [
        { value: 13 },
        { value: 22.5 },
        { value: 32 }
      ],
    }
  }}
  
  
  value={Race.temperature}
  minValue={-10}
  maxValue={60}
/>
</Box>
 
  );
}





