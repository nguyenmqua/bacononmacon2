"use client"; 
import React, { useState, useEffect } from "react";
import API from "../../utils/API"
const Weather = () => {
    const [city, setCity] = useState ("")
    const [region, setRegion] = useState ("")
    const [image, setImage] = useState ("")
    const [weather, setWeather] = useState ("")
    const [temp, setTemp] = useState ("")
   
    

  useEffect(() => {
    API.Weather()
    .then(res=>{
        setCity(res.data.location.name)
        setRegion(res.data.location.region)
        setImage(res.data.current.condition.icon)
        setWeather(res.data.current.condition.text)
        setTemp (res.data.current.feelslike_c)
        console.log(res.data)})
        
  }, []);
    return (
        <>
        <div>
            {weather}
        </div>
        <div>
            {temp}
        </div>
        </>
    )
}


export default Weather