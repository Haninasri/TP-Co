// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <Container maxWidth="lg" style={{ marginTop: '20px', marginLeft: '240px', paddingBottom: '20px' }}>
              <Dashboard />
            </Container>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;