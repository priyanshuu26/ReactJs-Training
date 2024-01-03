import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
  CardMedia,
} from '@mui/material';
import React from 'react';
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  TurnedIn,
  TurnedInNot,
} from '@mui/icons-material';
import dogsData from '../Assets/dogsData';

function Feed() {
  return (
    <Box flex={5}>
      {dogsData.map((data) => (
        <Card sx={{ margin: { xl: 5, lg: 1, md: 0 } }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  background:
                    'radial-gradient(circle, rgba(204,160,179,1) 15%, rgba(148,187,233,1) 100%);',
                }}
              >
                {data.avatar}
              </Avatar>
            }
            title={data.title}
            subheader={data.subheader}
            action={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
          />
          <CardMedia
            component="img"
            sx={{ width: '50vw', height: '30vh', objectFit: 'contain' }}
            image={data.src}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2">{data.content}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
            <IconButton>
              <Checkbox
                icon={<TurnedInNot />}
                checkedIcon={<TurnedIn sx={{ color: 'grey' }} />}
              />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Feed;
