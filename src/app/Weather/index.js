"use client"
import React, { useState, useEffect } from "react";
import API from "../utils/API"
const Weather= () => {
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

  return city ? ( 
 <>
 <div className = " grid grid-cols-3 ">
 <div className="border-t-4 border-r-4 border-red-500 p-2">{weather}</div>
 
 <div className ="p-1 border-t-4 border-red-500 p-2">
  <img src={image} alt=""></img>
 </div>
 <div className= "border-l-4 border-t-4 border-red-500 p-2">{temp} C</div></div>
 </>) : (<> help</>)    
  ;
}

export default Weather
