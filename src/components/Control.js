// src/components/Control.js

import React from 'react';
import { Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Control = () => {
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
  return (
    <div style={{ width: '100%' }}>
    <Paper style={{ padding: '20px', margin: '10px', backgroundColor: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>Control Panel</Typography>
      <Typography variant="body1">Manage your settings and controls here.</Typography>
    </Paper>
    
    <Box  sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 1,
      m: 1,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}>

      <Item>    
<Typography variant="h6">
Turn To Controle
    <a target='_blank'
        rel='noopener noreferrer' href="https://control-rpi.onrender.com">Site pour controler</a>
</Typography></Item>
      
</Box>
    </div>
  );
};


export default Control;