import React from 'react';
import { List, ListItem, ListItemText, Divider, Drawer, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: drawerWidth, flexShrink: 0 }}>
      <div style={{ width: drawerWidth, backgroundColor: '#1976d2', color: 'white', padding: '20px' }}>
        <Typography variant="h6" noWrap>
          My Dashboard
        </Typography>
      </div>
      <Divider />
      <List>
        {[
          { text: 'Control', icon: <ControlCameraIcon /> },
          { text: 'Data', icon: <BarChartIcon /> },
          { text: 'Teams', icon: <GroupIcon /> },
        ].map((item, index) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={index === 0 ? '/' : `/${item.text.toLowerCase()}`}
            sx={{
              '&:hover': { backgroundColor: '#f1f1f1' },
              '&.Mui-selected': { backgroundColor: '#e0e0e0' },
            }}
          >
            {item.icon}
            <ListItemText primary={item.text} sx={{ marginLeft: '10px', color: '#1976d2' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;