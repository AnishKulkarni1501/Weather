import { useState, useEffect } from "react";

function SunAndMoon({ city }) {
  const [astron, setAstron] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
 

  useEffect(() => {
    if (city === "") return;

    const apiKey = "3b6ba9856209433d8b9123622242712";

    const url = `http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setAstron(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }, [city]);

  useEffect(() => {
    if (astron?.astronomy?.astro?.is_sun_up===0) {
       setDarkMode(true);
    }
    else {
      setDarkMode(false);
    }
  }, [astron]);

  function phase() {
    if (astron && astron.astronomy && astron.astronomy.astro && astron.astronomy.astro.moon_phase) {
      switch (astron.astronomy.astro.moon_phase) {
          case "Waning Gibbous":
           return '🌖';
          case "Waxing Gibbous":
           return '🌔';
          case "Waning Crescent":
           return '🌘';
          case "Waxing Cresent":
           return '🌒';
          case "Full Moon":
           return '🌕';
          case "New Moon":
           return '🌑';
        default:
          return '';
      }
    }
    return '';
  }

  return (
    <div id="res" style={{ backgroundColor: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000" }}> 
      <p>{astron?.astronomy?.astro?.sunrise ? `🌅 Sunrise: ${astron.astronomy.astro.sunrise}` : ""}</p>
      <p>{astron?.astronomy?.astro?.sunset ? `🌇 Sunset: ${astron.astronomy.astro.sunset}` : ""}</p>
      <p>{astron?.astronomy?.astro?.moonrise ? `🌕 Moonrise: ${astron.astronomy.astro.moonrise}` : ""}</p>
      <p>{astron?.astronomy?.astro?.moonset ? `🌑 Moonset: ${astron.astronomy.astro.moonset}` : ""}</p>
      <p>{astron?.astronomy?.astro?.moon_phase ? `${phase()} ${astron.astronomy.astro.moon_phase}` : ""}</p>
    </div>
  );
}

export default SunAndMoon;
