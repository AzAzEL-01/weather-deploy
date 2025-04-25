import React from 'react'
import "./WeatherDetails.css"

const WeatherDetails = (props) => {

  
    if (!props.weatherData || !props.weatherData.main) {
      return <p className='error'>Enter a valid city to continue...</p>;
    }
  return (
    
    <div>
        <div className='header'>
        <h1 className="city">{props.weatherData?.name}</h1>
        <p className="temperature">{props.weatherData?.main.temp}°C</p>
        <p className="condition">{props.weatherData?.weather[0].main}</p>
        </div>
         <div className="weather-details">
          <div className='Humidity'>
            <p>Humidity</p>
            <p>{props.weatherData?.main.humidity}%</p>
          </div>
          <div className='windspeed'>
            <p>Wind Speed</p>
            <p>{props.weatherData?.wind.speed} mph</p>
            </div>
        </div>
      
    </div>
  )
}

export default WeatherDetails
