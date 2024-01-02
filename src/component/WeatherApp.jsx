import React, { useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import api from '../appKey';

function WeatherApp() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchBar = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };
  return (
    <Box>
      <Typography variant="h3">Weather app</Typography>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: '26px' }}>
        <TextField
          sx={{ width: '250px' }}
          label="Search any city"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton variant="contained" onClick={searchBar}>
          <Search />
        </IconButton>
      </Stack>
      <Divider />
      <Box>
        <Typography variant="h4">{weather?.name}</Typography>
        <Typography variant="h4">
          temperature: {weather.main?.temp} °c
        </Typography>
        <Divider />
        <Typography variant="h6">
          humedity:{weather.main?.humidity} %
        </Typography>
        <Divider />
        <Typography variant="h6">visibility:{weather?.visibility}</Typography>
        <Divider />
        <Typography variant="h6">
          wind speed:{weather.wind?.speed} m/s
        </Typography>
      </Box>
    </Box>
  );
}

export default WeatherApp;
