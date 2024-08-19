import React from "react";


const UserContext = React.createContext({
    setWeather: ()=>{},
    weather: ""
})

export default UserContext