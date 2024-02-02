import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";

    const API_KEY ="b565bab6761d0a3f1a1cdd2852f3c6ac";
    
      let weatherGetInfo = async () =>{
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units="metric"`);
      let jsonResponse =  await response.json();
     
     let result = {
       city: city,
       temp: jsonResponse.main.temp,
       tempMin: jsonResponse.main.temp_min,
       tempMax: jsonResponse.main.temp_max,
       humidity: jsonResponse.main.humidity,
       feelsLike: jsonResponse.main.feels_Like,

     };
     console.log(result);
     return result;
      }  
      catch(err) {
      throw err;
       
      }
    
  }
     

    let handleChange = (evt) => {
       setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
      try{
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo= await weatherGetInfo();
      updateInfo(newInfo);
      }catch(err){
         setError(true);
      }
        
    }

    return(<div className="SearchBox">
        
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
         Search
       </Button>
       {error && <p style={{color: "red"}}>No such pair Exists!</p>};
        </form>
    </div>)
}