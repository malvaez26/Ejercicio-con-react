import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="../../public/img/Daniel.jpg"
        title="Imagen Daniel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Daniel Malvaez Hernández
        </Typography>
        <Typography variant="body1" color="text.secondary">
            daniel.malvaezh@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Tratando de entender esto llamado React. Mori. Pero aquí estamos.
        </Typography>
      </CardContent>
    </Card>
  );
}