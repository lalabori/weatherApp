import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
  return (
    <div className="buttonContainer"> 
       <Button variant=
       {`${selectedCity == null ? "light" : "outline-light"}`} 
        onClick={()=>handleCityChange("current")}>
          
        Current Location
        </Button>
       
       {cities.map((city)=>(
        <Button 
        variant={`${selectedCity == city ? "light" : "outline-light"}`}
        onClick={()=> handleCityChange(city)}
        > 
        {city} 
        </Button>
       ))
       }
    </div> 
  )
}

export default WeatherButton
