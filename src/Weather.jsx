import React, {useState, useEffect} from 'react'
import "./Weather.css"
import WeatherDetails from './Components/WeatherDetails/WeatherDetails'
import Forecast from './Components/Forecast/Forecast'




const Weather = () => {
  const APIKEY = "07047c265867a9b370dbd342914e7be0";
  const [city, setCity] = useState("");
  const[input, setInput] = useState("");
  const[error, setError] = useState("null");
  const [loading, setLoading] = useState(false);
  const[weatherData, setWeatherData] = useState(null);

  const fetchData = async(cityName) =>{
    try{

          setLoading(true)
          setError(null)
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
          const response = await fetch(url);
          const data = await response.json();
          setWeatherData(data);
          

    }
    
    catch(error){
      setError("Couldn't fetch data, please try again..")

    }

    finally{
      setLoading(false)

    }
  };

  const handleSubmit =(event)=>{
    event.preventDefault()
    fetchData(input)
    setCity(input)

  }
  

  useEffect(()=>{

    {
      fetchData(city)

    }
    

    

    
  },[city])



 
   
   return (
    <div>

    <div className='container'>
        <h3 className='title'>Weather App</h3>
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}
        className='user-input' placeholder='Enter City Name...' />
        <button type="submit" className='btn' >Get Weather</button>

        </form>

      
       

        

        <WeatherDetails weatherData={weatherData}/>
        <Forecast city={city}  />

       





      </div>

      
      
    </div>
  )
}

export default Weather
