const APP_ID = "4e37f8b62d902930c305918453b619f3"

const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const image = document.querySelector(".image");

button.addEventListener("click", function (e) {
  e.preventDefault();

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=" + APP_ID + "&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      // let nameValue = data['name'];
      let tempValue = data["main"]["temp"];
      let descriptionValue = data["weather"][0]["description"];

      // name.innerHTML = nameValue;
      temp.innerHTML = tempValue + "°C";
      description.innerHTML = descriptionValue;
      if (tempValue <= 10.99) {
        image.setAttribute("src", "./images/frost.png");
      } else if (tempValue <= 20.99 && tempValue >= 11) {
        image.setAttribute("src", "./images/cold.png");
      } else if (tempValue <= 30.99 && tempValue >= 21) {
        image.setAttribute("src", "./images/humid.png");
      } else if (tempValue <= 40.99 && tempValue >= 31) {
        image.setAttribute("src", "./images/hot.png");
      }
    })

    .catch((err) => alert("Wrong city name!"));
});
