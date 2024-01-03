import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Badge,
  Divider,
} from '@mui/material';
import React from 'react';
import dogsData from '../Assets/dogsData';
// eslint-disable-next-line import/order
import { PushPin } from '@mui/icons-material';

function RightBar() {
  return (
    <Box flex={4} width="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" sx={{ width: { md: '18%' } }}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ justifyContent: 'flex-end' }}>
          {dogsData.map((data) => (
            <Avatar src={data.src} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<PushPin sx={{ color: 'gold' }} />}
              >
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary="Yup, seems to be good!"
              secondary="Tap to open"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary="Sent you a reel." secondary="Tap to open" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="Tap to open"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/8.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Thanks for the help."
              secondary="tap to open"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
