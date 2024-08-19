import axios from "axios"

export default {
    Weather: function(){
        return axios.get('https://weatherapi-com.p.rapidapi.com/current.json?q=80014', {
          headers: {
            'X-RapidAPI-Key': '8fc8315f1amsh70aff4e1a3ba621p1d89e4jsn59ed596832c4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
          },
      })}
}