import { Box, Stack, Switch, createTheme } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Add from './components/Add';

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      // eslint-disable-next-line object-shorthand
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <SideBar />
          {/* <Switch
            onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
          /> */}
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
