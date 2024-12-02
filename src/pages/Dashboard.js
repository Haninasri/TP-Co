// src/pages/Dashboard.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Control from '../components/Control';
import Data from '../components/Data';
import Teams from '../components/Team';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Control />} />
      <Route path="/data" element={<Data />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
};

export default Dashboard;