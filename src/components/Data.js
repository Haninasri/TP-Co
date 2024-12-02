// src/components/Data.js

import React from 'react';
import { Paper, Typography } from '@mui/material';
import Raspberry from './data/Raspberry';
import Box from '@mui/material/Box';
import Gauge from './data/Gauge'
import Humidity from './data/Chart'
import Air from './data/Air'
import Intensity from './data/Intensity'
import PropTypes from 'prop-types';
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          p: 1,
          m: 1,
          bgcolor: 'grey.100',
          color: 'grey.800',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};


const Data = () => {
  return (
    <div>
    <Paper style={{ padding: '20px', margin: '10px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom>Data Overview</Typography>
      <Typography variant="body1">View your data here.</Typography>
    </Paper>
    <Raspberry/>
    <Box  sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
    
          <Item>Upload Humidity and Tempurature using axios fonction fetsh method</Item>
          
    </Box>
    <Box display="flex"
      padding='50px' 
      >
        <Gauge/>
        <Humidity/>
      </Box>
      <Box display="flex"
      padding='50px' 
      >
        <Air/>
        <Intensity/>
      </Box>

    </div>
  );
};

export default Data;