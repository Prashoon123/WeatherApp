import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState("");

  const APP_ID = "4e37f8b62d902930c305918453b619f3";

  function findWeather(e) {
    e.preventDefault();
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputValue +
        "&appid=" +
        APP_ID +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherDetails(data);
        setWeatherDesc(data?.weather[0]?.description);
      })
      .catch((err) => {
        setWeatherDetails(null);
        setWeatherDesc(null);
        alert("Wrong city name!");
      });
  }

  console.log(weatherDetails);

  return (
    <div className="App">
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="App__input"
          type="text"
          placeholder="Enter a city"
        />

        <button
          className="App__button"
          onClick={findWeather}
          disabled={!inputValue || inputValue[0] === " "}
        >
          Search
        </button>

        {weatherDetails && (
          <div className="App__weather">
            <table>
              <tr>
                <th colSpan="2">Weather Information</th>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{(weatherDetails?.main?.temp).toFixed(1)}°C</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  {weatherDesc[0].toUpperCase()}
                  {weatherDesc.slice(1)}
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{weatherDetails?.sys?.country}</td>
              </tr>
              <tr>
                <td>Visibility</td>
                <td>{weatherDetails?.visibility}m</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>{weatherDetails?.wind?.speed} m/s</td>
              </tr>
            </table>

            <a href="https://news.google.com/search?q=weather" target="_blank">
              <button className="App__button">Find more weather news</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
