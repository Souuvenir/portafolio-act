import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300,}}>
      <CardMedia
        sx={{ height: 250}}
        image="https://i.pinimg.com/222x/20/fb/23/20fb23088a41f6bdb1bab64423836714.jpg"
        title="profile pic"
      />
    </Card>
  );
}