
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function({info}) {
    const INIT_URL ="https://media.istockphoto.com/id/1484578370/photo/a-large-green-bush-against-a-stormy-sky.jpg?s=612x612&w=0&k=20&c=B1jF07Mxmc5-7JH44cvNWJLSLfGczxx4BSu0nNSelAA=";
    let COLD_URL ="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL ="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">
         <h1>weather Information= {info.weather}</h1>
         <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can determined ${info.weather} and feels  Like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
};