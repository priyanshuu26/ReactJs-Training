import { Inbox, NotificationsActive, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Profile from '../Assets/passport_photo.jpg';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ paddingLeft: 0 }}>
        <Stack
          direction="row"
          justifyContent={{ xs: 'space-evenly', sm: 'space-between' }}
          width="100vw"
        >
          <Typography
            variant="h5"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            PRIYANSHU
          </Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <InputBase
            placeholder="  search..."
            sx={{ backgroundColor: 'white', width: '50%' }}
          />
          <Stack direction="row" spacing={4}>
            <Badge
              badgeContent={6}
              color="error"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Inbox />
            </Badge>
            <Badge
              badgeContent={9}
              color="error"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <NotificationsActive />
            </Badge>
            <Avatar
              src={Profile}
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setOpen(true)}
            />
          </Stack>
          <Menu
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
