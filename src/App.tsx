
import React from 'react'
import './App.scss';
import '@fontsource/nunito';
import '@fontsource/roboto';
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Campaigns from './pages/Campaigns';
import { Box, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const defaultMaterialTheme = createTheme();
  return (
    <div className='App'>
       <ThemeProvider theme={defaultMaterialTheme}>
        <Header/>
        <Box>
          <Grid container spacing={0} columnSpacing={0}>
            <Grid item md={1}>
              <Menu />
            </Grid>
            <Grid item md={11}>
              <Campaigns/>
            </Grid>
          </Grid>
        </Box>
       </ThemeProvider>
    </div>
  );
}

export default App;

