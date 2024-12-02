import React, { useEffect, useState } from "react";
import { GaugeComponent } from 'react-gauge-component';
import Box from '@mui/material/Box';
import axios from 'axios'




export default function Air() {
 
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
          limit: 20,
          color: '#EA4228',
          showTick: true,
          tooltip: {
            text: 'Too low !'
          },
          onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
          onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
          onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
        },
        {
          limit: 35,
          color: '#F5CD19',
          showTick: true,
          tooltip: {
            text: 'Low !'
          }
        },
        {
          limit: 60,
          color: '#5BE12C',
          showTick: true,
          tooltip: {
            text: 'OK air_quality!'
          }
        },
        {
          limit: 100, color: '#F5CD19', showTick: true,
          tooltip: {
            text: 'High !'
          }
        },
        {
          color: '#EA4228',
          tooltip: {
            text: 'Too high !'
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
      valueLabel: { formatTextValue: value => value + 'AQI' },
      tickLabels: {
        type: 'outer',
        defaultTickValueConfig: { 
          formatTextValue: (value: any) => value + 'AQI' ,
          style: {fontSize: 10}
      },
        ticks: [
          { value: 13 },
          { value: 40.23 },
          { value: 60 }
        ],
      }
    }}
    
    
    value={Race.air_quality}
    minValue={0}
    maxValue={200}
  />
  
  </Box>
   
    );
  }