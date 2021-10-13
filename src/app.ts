const APP_ID: string | undefined = "4e37f8b62d902930c305918453b619f3";

const button = document.querySelector(".button") as HTMLButtonElement;
const display = document.querySelector(".display") as HTMLDivElement;
const inputValue = document.querySelector(".inputValue") as HTMLInputElement;
const placeName = document.querySelector(".name") as HTMLHeadingElement;
const description = document.querySelector(
  ".description"
) as HTMLParagraphElement;
const temp = document.querySelector(".temp") as HTMLParagraphElement;
const image = document.querySelector(".image") as HTMLImageElement;

display.style.display = "none";

type MainData = {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
};

type WeatherDataDesc = {
  description: string;
};

interface WeatherData {
  main: MainData;
  weather: WeatherDataDesc[];
}

button.addEventListener("click", function (e: Event): void {
  e.preventDefault();

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=" +
      APP_ID +
      "&units=metric"
  )
    .then((response) => response.json())
    .then((data: WeatherData) => {
      const tempValue: number = data.main.temp;
      const descriptionValue: string = data.weather[0].description;

      if (tempValue <= 10.99) {
        image.setAttribute("src", "./images/frost.png");
        temp.innerHTML = tempValue + "°C";
        description.innerHTML = descriptionValue;
        display.style.display = "inline";
      } else if (tempValue <= 20.99 && tempValue >= 11) {
        image.setAttribute("src", "./images/cold.png");
        temp.innerHTML = tempValue + "°C";
        description.innerHTML = descriptionValue;
        display.style.display = "inline";
      } else if (tempValue <= 30.99 && tempValue >= 21) {
        image.setAttribute("src", "./images/humid.png");
        temp.innerHTML = tempValue + "°C";
        description.innerHTML = descriptionValue;
        display.style.display = "inline";
      } else if (tempValue <= 40.99 && tempValue >= 31) {
        image.setAttribute("src", "./images/hot.png");
        temp.innerHTML = tempValue + "°C";
        description.innerHTML = descriptionValue;
        display.style.display = "inline";
      }
    })

    .catch((err) => alert("Wrong city name!"));
});
