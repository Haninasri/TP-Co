// src/components/Footer.js

import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2', marginTop: 'auto' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="body1" color="inherit">
          © 2024/2025 My Dashboard App TP ISSATGF | All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;