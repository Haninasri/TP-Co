// src/components/Teams.js

import React from 'react';
import { Paper, Typography } from '@mui/material';
import Team from './team/Team'
import Box from '@mui/material/Box';



const Teams = () => {
  
  
  
  return (
    <div>
    <Paper style={{ padding: '20px', margin: '10px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom>Teams Management</Typography>
      <Typography variant="body1">Manage your teams and members here.</Typography>
    </Paper>
    <Box component="section" sx={{ p: 8,justifyContent: 'center',}} >
    <Team/>

    </Box>
    
    </div>

  );
};

export default Teams;