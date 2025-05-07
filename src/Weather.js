import { useState, useEffect } from "react";
import './Weather.css'
function Weather({ city },props) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city === "") return;  
    
    const apiKey = "3b6ba9856209433d8b9123622242712";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }, [city]);


 
  return (
    <div id="res">
    <p id={props.id}>{weather?.location?.name ? `🏙️${weather.location.name},${weather.location.country}` : ""}</p>
    <p id={props.id}>{weather?.current?.temp_c ? `${weather.current.temp_c}°C` : ""}</p>
    <p id={props.id}>{weather?.current?.feelslike_c ? `Feels Like:${weather.current.feelslike_c}°C` : ""}</p>
    <p id={props.id}>{weather?.current?.wind_kph ? `Wind:${weather.current.wind_kph}kph` : ""}</p>
    <p id={props.id}>{weather?.current?.humidity ? `Humidity:${weather.current.humidity}%` : ""}</p>
    <p id={props.id}>{weather?.current?.condition.text ? `${weather.current.condition.text}` : ""}</p>
    
    </div>
  );
}

export default Weather;
